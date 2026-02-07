"use client";

import { School } from "@/src/types/programs";
import { toggleSelection } from "@/src/utils/toggleSelection";
import { useProgram } from "@/src/context/ProgramContext";

type Props = {
  schools?: School[];
};

export default function SchoolFilter({ schools = [] }: Props) {
  const { state, dispatch } = useProgram();

  if (!schools.length) return null;

  return (
    <div>
      <h3 className="mb-3 font-semibold text-gray-900">Browse by School</h3>

      <div className="space-y-2">
        {schools.map((school) => (
          <label
            key={school.id}
            className="flex items-center gap-2 cursor-pointer text-sm"
          >
            <input
              type="checkbox"
              checked={state.schools.includes(school.id)}
              onChange={() =>
                dispatch({
                  type: "SET_SCHOOLS",
                  payload: toggleSelection(state.schools, school.id),
                })
              }
              className="h-4 w-4 rounded border-gray-300"
            />

            <span>{school.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
