import { Program } from "@/src/types/programs";

interface Props {
  program: Program;
}

export default function ProgramCard({ program }: Props) {
  return (
    <div className="rounded-lg overflow-hidden shadow hover:shadow-lg transition bg-white">
      <div className="h-48 bg-gray-200">
        {program.banner && (
          <img
            src={program.banner}
            alt={program.name}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <div className="p-4">
        <p className="text-xs text-gray-500">{program.degree_name}</p>
        <h3 className="mt-1 font-semibold text-sm text-gray-800 line-clamp-2">
          {program.name}
        </h3>
        <p className="mt-1 text-xs text-gray-500">{program.department_name}</p>
      </div>
    </div>
  );
}
