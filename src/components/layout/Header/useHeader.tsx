"use client";

import { useState } from "react";

export function useHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return {
    isMenuOpen,
    toggleMenu,
    closeMenu,
  };
}
