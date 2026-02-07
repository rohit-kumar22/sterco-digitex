import { getProgramCategories } from "@/src/services/program.service";
import ProgramTabs from "./programTabs/ProgramTabs";
import ProgramSearch from "./programSearch/programSearch";

export default async function ProgramsHero() {
  const categories = await getProgramCategories();

  return (
    <section className="bg-[#EAF4FB] pt-20 text-center relative pb-5">
      <p className="text-xs tracking-widest text-gray-500 font-semibold">
        PROGRAMS
      </p>

      <h1 className="mt-4 text-3xl md:text-4xl font-bold text-[#1F2A44]">
        COMPREHENSIVE <span className="text-[#1C7ED6]">ACADEMIC PROGRAMS</span>
        <br />
        FOR <span className="text-[#1C7ED6]">LIFELONG LEARNING</span>
      </h1>

      <div className="mt-8">
        <ProgramTabs categories={categories} />
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full max-w-4xl px-6">
        <ProgramSearch />
      </div>
    </section>
  );
}
