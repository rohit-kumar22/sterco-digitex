import ProgramsHero from "@/src/components/programs/ProgramsHero";
import ProgramsClient from "@/src/components/programs/programsClient/ProgramsClient";
import { getSchoolDepartmentList } from "@/src/services/program.service";
import { ProgramProvider } from "@/src/context/ProgramContext";

export default async function Home() {
  const schools = await getSchoolDepartmentList();

  return (
    <ProgramProvider>
      <ProgramsHero />
      <ProgramsClient slug="under-graduate" schools={schools} />
    </ProgramProvider>
  );
}
