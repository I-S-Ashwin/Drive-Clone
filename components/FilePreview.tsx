"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Models } from "node-appwrite";
import { constructDownloadUrl } from "@/lib/utils";

interface FilePreviewProps {
  file: Models.Document;
  isOpen: boolean;
  onClose: () => void;
}

const FilePreview = ({ file, isOpen, onClose }: FilePreviewProps) => {
  const fileUrl = file.url;
  const downloadUrl = constructDownloadUrl(file.bucketFileId);

  const renderPreview = () => {
    switch (file.type) {
      case "image":
        return (
          <div className="relative flex items-center justify-center max-h-[70vh] overflow-hidden rounded-xl">
            <Image
              src={fileUrl}
              alt={file.name}
              width={800}
              height={600}
              className="max-h-[70vh] w-auto object-contain rounded-xl"
            />
          </div>
        );

      case "video":
        return (
          <div className="relative max-h-[70vh] overflow-hidden rounded-xl">
            <video
              controls
              className="w-full max-h-[70vh] rounded-xl"
              src={fileUrl}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        );

      case "audio":
        return (
          <div className="flex flex-col items-center gap-6 py-8">
            <div className="relative">
              <div className="flex-center size-32 rounded-full bg-gradient-to-br from-brand/20 to-brand/5 dark:from-brand/30 dark:to-brand/10">
                <div className="flex-center size-20 rounded-full bg-gradient-to-br from-brand to-brand-100 animate-pulse">
                  <Image
                    src="/assets/icons/file-audio.svg"
                    alt="audio"
                    width={40}
                    height={40}
                    className="invert"
                  />
                </div>
              </div>
              {/* Animated sound wave rings */}
              <div className="absolute inset-0 rounded-full border-2 border-brand/20 animate-ping" />
            </div>
            <p className="subtitle-2 text-light-100 dark:text-light-200">{file.name}</p>
            <audio controls className="w-full max-w-md">
              <source src={fileUrl} />
              Your browser does not support the audio element.
            </audio>
          </div>
        );

      case "document":
        if (file.extension === "pdf") {
          return (
            <iframe
              src={fileUrl}
              className="w-full h-[70vh] rounded-xl border-0"
              title={file.name}
            />
          );
        }
        return (
          <div className="flex flex-col items-center gap-4 py-12">
            <div className="flex-center size-24 rounded-2xl bg-brand/10 dark:bg-brand/20">
              <Image
                src={`/assets/icons/file-${file.extension}.svg`}
                alt={file.extension}
                width={48}
                height={48}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/assets/icons/file-document.svg";
                }}
              />
            </div>
            <p className="body-1 text-light-100 dark:text-light-200">
              Preview not available for .{file.extension} files
            </p>
            <a
              href={downloadUrl}
              download={file.name}
              className="primary-btn px-6 py-3 text-white rounded-full"
            >
              Download to view
            </a>
          </div>
        );

      default:
        return (
          <div className="flex flex-col items-center gap-4 py-12">
            <div className="flex-center size-24 rounded-2xl bg-light-300 dark:bg-dark-100/50">
              <Image
                src="/assets/icons/file-other.svg"
                alt="file"
                width={48}
                height={48}
              />
            </div>
            <p className="body-1 text-light-100 dark:text-light-200">
              Preview not available for this file type
            </p>
            <a
              href={downloadUrl}
              download={file.name}
              className="primary-btn px-6 py-3 text-white rounded-full"
            >
              Download to view
            </a>
          </div>
        );
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] overflow-auto rounded-[26px] border-0 bg-white dark:bg-dark-200 p-6 shadow-drop-2">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-light-100 dark:text-light-200">
            <span className="line-clamp-1">{file.name}</span>
          </DialogTitle>
        </DialogHeader>
        <div className="mt-2">{renderPreview()}</div>
      </DialogContent>
    </Dialog>
  );
};

export default FilePreview;
