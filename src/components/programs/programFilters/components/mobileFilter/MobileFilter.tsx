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
        className="lg:hidden fixed bottom-4 right-4 z-40 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg"
        onClick={() => setOpen(true)}
      >
        Filters
      </button>

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 bg-black/40 z-50">
          <div className="absolute bottom-0 w-full bg-white rounded-t-xl p-4 max-h-[85vh] overflow-y-auto">
            {/* Filters now use Context internally */}
            <SchoolFilter schools={schools} />

            <div className="mt-6">
              <DepartmentFilter schools={schools} />
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-6">
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
