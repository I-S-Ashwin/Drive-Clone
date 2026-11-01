"use client";

import { useState } from "react";
import { MoreHorizontal } from "lucide-react";
import { Models } from "node-appwrite";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { actionsDropdownItems } from "@/constants";
import { deleteFile, renameFile, updateFileUsers } from "@/lib/actions/file.actions";
import { usePathname } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { constructDownloadUrl, convertFileSize } from "@/lib/utils";

export default function ActionDropdown({ file }: { file: Models.Document }) {
  const path = usePathname();
  const { toast } = useToast();
  const [action, setAction] = useState<string | null>(null);
  const [name, setName] = useState(file.name.replace(/\.[^.]+$/, ""));
  const [emails, setEmails] = useState<string>(((file.users || []) as string[]).join(", "));
  const [busy, setBusy] = useState(false);
  const extension = file.extension || "";

  const submit = async () => {
    setBusy(true);
    try {
      if (action === "rename") {
        await renameFile({ fileId: file.$id, name, extension, path });
      } else if (action === "share") {
        await updateFileUsers({
          fileId: file.$id,
          emails: emails.split(",").map((email) => email.trim()).filter(Boolean),
          path,
        });
      } else if (action === "delete") {
        await deleteFile({ fileId: file.$id, bucketFileId: file.bucketFileId, path });
      }
      setAction(null);
    } catch {
      toast({ description: "Unable to complete this action. Please try again.", className: "error-toast" });
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" aria-label={`Actions for ${file.name}`} onClick={(event) => event.stopPropagation()} onKeyDown={(event) => event.stopPropagation()}>
            <MoreHorizontal className="size-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" onClick={(event) => event.stopPropagation()}>
          {actionsDropdownItems.map((item) => (
            <DropdownMenuItem key={item.value} onSelect={(event) => {
              if (item.value === "download") return;
              event.preventDefault();
              setAction(item.value);
            }}>
              {item.value === "download" ? (
                <a href={constructDownloadUrl(file.bucketFileId)} download={file.name} className="w-full">{item.label}</a>
              ) : item.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <Dialog open={!!action} onOpenChange={(open) => !open && setAction(null)}>
        <DialogContent>
          <DialogHeader><DialogTitle className="capitalize">{action} file</DialogTitle></DialogHeader>
          {action === "details" && <div className="space-y-2"><p>{file.name}</p><p>{convertFileSize(file.size)}</p><p>{file.type}</p></div>}
          {action === "rename" && <Input value={name} onChange={(event) => setName(event.target.value)} aria-label="File name" />}
          {action === "share" && <Input value={emails} onChange={(event) => setEmails(event.target.value)} placeholder="Emails separated by commas" aria-label="Share with email addresses" />}
          {action === "delete" && <p>Delete <strong>{file.name}</strong>? This cannot be undone.</p>}
          {action !== "details" && <Button disabled={busy} onClick={submit} className="mt-4">{busy ? "Saving…" : action === "delete" ? "Delete" : "Save"}</Button>}
        </DialogContent>
      </Dialog>
    </>
  );
}
