"use client";

import { ProgramCategory } from "@/src/types/programs";
import { useProgramTabs } from "./useProgramTabs";

interface Props {
  categories: ProgramCategory[];
}

export default function ProgramTabs({ categories }: Props) {
  const { activeTab, setActiveTab } = useProgramTabs(categories);

  return (
    <div className="relative w-full pt-px">
      {/* Long gray line ABOVE tabs */}
      <div className="absolute top-0 inset-x-80 h-px bg-gray-300" />

      {/* Tabs */}
      <div className="flex justify-center gap-12">
        {categories.map((category) => {
          const isActive = activeTab?.id === category.id;

          return (
            <button
              key={category.id}
              onClick={() => setActiveTab(category)}
              className={`relative pt-3 text-sm font-semibold transition cursor-pointer
                ${
                  isActive
                    ? "text-[#F59F00]"
                    : "text-gray-500 hover:text-gray-700"
                }`}
            >
              {category.name}

              {/* Orange segment ON the top line */}
              {isActive && (
                <span className="absolute -top-px left-0 right-0 h-0.75 bg-[#F59F00] rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
