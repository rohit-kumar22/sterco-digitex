"use client";

import { useState } from "react";
import { ProgramCategory } from "@/src/types/programs";

export function useProgramTabs(categories: ProgramCategory[]) {
  const [activeTab, setActiveTab] = useState<ProgramCategory | null>(
    categories.length ? categories[0] : null
  );

  return {
    activeTab,
    setActiveTab,
  };
}
