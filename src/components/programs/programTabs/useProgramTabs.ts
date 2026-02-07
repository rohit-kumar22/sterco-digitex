"use client";

import { useEffect, useState } from "react";
import { ProgramCategory } from "@/src/types/programs";

export function useProgramTabs(categories: ProgramCategory[]) {
  const [activeTab, setActiveTab] = useState<ProgramCategory | null>(null);

  useEffect(() => {
    if (categories.length && !activeTab) {
      setActiveTab(categories[0]);
    }
  }, [categories, activeTab]);

  return { activeTab, setActiveTab };
}
