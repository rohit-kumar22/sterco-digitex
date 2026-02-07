"use client";

import { School } from "@/src/types/programs";
import { toggleSelection } from "@/src/utils/toggleSelection";
import { useProgram } from "@/src/context/ProgramContext";

type Props = {
  schools?: School[];
};

export default function DepartmentFilter({ schools = [] }: Props) {
  const { state, dispatch } = useProgram();

  // collect departments based on selected schools
  const departments = schools
    .filter((school) =>
      state.schools.length ? state.schools.includes(school.id) : true
    )
    .flatMap((school) => school.departments ?? []);

  if (!departments.length) return null;

  return (
    <div>
      <h3 className="mb-3 font-semibold text-gray-900">Filter by Department</h3>

      <div className="space-y-2">
        {departments.map((dept) => (
          <label
            key={dept.id}
            className="flex items-center gap-2 cursor-pointer text-sm"
          >
            <input
              type="checkbox"
              checked={state.departments.includes(dept.id)}
              onChange={() =>
                dispatch({
                  type: "SET_DEPARTMENTS",
                  payload: toggleSelection(state.departments, dept.id),
                })
              }
              className="h-4 w-4 rounded border-gray-300"
            />

            <span>{dept.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
