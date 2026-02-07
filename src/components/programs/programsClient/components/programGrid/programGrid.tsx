import { Program } from "@/src/types/programs";
import ProgramCard from "./programCard/ProgramCard";
import ProgramSkeleton from "./programSkeleton/ProgramSkeleton";

interface Props {
  programs: Program[];
  loading: boolean;
}

export default function ProgramGrid({ programs, loading }: Props) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 9 }).map((_, i) => (
          <ProgramSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (!programs.length) {
    return (
      <div className="text-center py-20 text-gray-500">No programs found</div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {programs.map((program) => (
        <ProgramCard key={program.slug} program={program} />
      ))}
    </div>
  );
}
