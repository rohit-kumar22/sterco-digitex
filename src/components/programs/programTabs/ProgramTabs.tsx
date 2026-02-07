"use client";

import { ProgramCategory } from "@/src/types/programs";
import { useProgram } from "@/src/context/ProgramContext";

interface Props {
  categories: ProgramCategory[];
}

export default function ProgramTabs({ categories }: Props) {
  const { state, dispatch } = useProgram();

  return (
    <div className="relative w-full pt-px">
      <div className="absolute top-0 inset-x-80 h-px bg-gray-300" />

      <div className="flex justify-center gap-12">
        {categories.map((category) => {
          const isActive = state.categorySlug === category.slug;

          return (
            <button
              key={category.id}
              onClick={() =>
                dispatch({
                  type: "SET_CATEGORY",
                  payload: category.slug,
                })
              }
              className={`relative pt-3 text-sm font-semibold transition
                ${
                  isActive
                    ? "text-[#F59F00]"
                    : "text-gray-500 hover:text-gray-700"
                }`}
            >
              {category.name}

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
