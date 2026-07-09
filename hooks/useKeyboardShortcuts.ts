"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const useKeyboardShortcuts = () => {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl/Cmd + K → Focus search
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        const searchInput = document.querySelector<HTMLInputElement>(".search-input");
        searchInput?.focus();
      }

      // Ctrl/Cmd + U → Click upload button
      if ((e.ctrlKey || e.metaKey) && e.key === "u") {
        e.preventDefault();
        const uploadButton = document.querySelector<HTMLButtonElement>(".uploader-button");
        uploadButton?.click();
      }

      // Ctrl/Cmd + 1-5 → Navigate to pages
      if ((e.ctrlKey || e.metaKey) && ["1", "2", "3", "4", "5"].includes(e.key)) {
        e.preventDefault();
        const routes = ["/", "/documents", "/images", "/media", "/others"];
        const index = parseInt(e.key) - 1;
        router.push(routes[index]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router]);
};

export default useKeyboardShortcuts;
