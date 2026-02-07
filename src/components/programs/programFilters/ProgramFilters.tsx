"use client";

import { School } from "@/src/types/programs";
import SchoolFilter from "./components/schoolFilter/SchoolFilter";
import DepartmentFilter from "./components/departmentFilter/DepartmentFilter";

type Props = {
  schools: School[];
};

export default function ProgramFilters({ schools }: Props) {
  if (!schools.length) return null;

  return (
    <aside className="hidden lg:block w-72 space-y-6">
      <SchoolFilter schools={schools} />
      <DepartmentFilter schools={schools} />
    </aside>
  );
}
