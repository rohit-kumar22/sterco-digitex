"use client";

import { useState } from "react";
import { School } from "@/src/types/programs";
import SchoolFilter from "../schoolFilter/SchoolFilter";
import DepartmentFilter from "../departmentFilter/DepartmentFilter";

type Props = {
  schools: School[];
};

export default function MobileFilters({ schools }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Filter Button */}
      <button
        className="lg:hidden fixed bottom-5 right-4 z-40 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg"
        onClick={() => setOpen(true)}
      >
        Filters
      </button>

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 bg-black/40 z-50">
          {/* Container */}
          <div className="absolute inset-0 bg-white flex flex-col">
            {/* Scrollable Filters */}
            <div className="flex-1 overflow-y-auto p-4">
              <SchoolFilter schools={schools} />

              <div className="mt-6">
                <DepartmentFilter schools={schools} />
              </div>
            </div>

            {/* Sticky Actions */}
            <div className="sticky bottom-0 bg-white border-t p-4 flex gap-3">
              <button
                className="flex-1 border rounded-md py-2"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>

              <button
                className="flex-1 bg-blue-600 text-white rounded-md py-2"
                onClick={() => setOpen(false)}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
