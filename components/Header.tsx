"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Search from "@/components/Search";
import FileUploader from "@/components/FileUploader";
import { signOutUser } from "@/lib/actions/user.actions";
import ThemeToggle from "@/components/ThemeToggle";
import useKeyboardShortcuts from "@/hooks/useKeyboardShortcuts";

const Header = ({
  userId,
  accountId,
}: {
  userId: string;
  accountId: string;
}) => {
  useKeyboardShortcuts();

  const handleSignOut = async () => {
    await signOutUser();
  };

  return (
    <header className="header">
      <Search />
      <div className="header-wrapper">
        <FileUploader ownerId={userId} accountId={accountId} />
        <ThemeToggle />
        <Button
          type="button"
          className="sign-out-button"
          onClick={handleSignOut}
        >
          <Image
            src="/assets/icons/logout.svg"
            alt="logo"
            width={24}
            height={24}
            className="w-6"
          />
        </Button>
      </div>
    </header>
  );
};
export default Header;
