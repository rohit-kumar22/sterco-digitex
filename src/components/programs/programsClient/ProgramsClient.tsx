"use client";

import { School } from "@/src/types/programs";
import ProgramFilters from "../programFilters/ProgramFilters";
import MobileFilters from "../programFilters/components/mobileFilter/MobileFilter";
import ProgramGrid from "./components/programGrid/programGrid";
import LoadMore from "./components/loadMore/LoadMore";
import { useProgramsClient } from "./useProgramsClient";
import { useLoadMore } from "./components/loadMore/useLoadMore";

interface Props {
  schools: School[];
}

export default function ProgramsClient({ schools }: Props) {
  const { programs, loading, totalPages } = useProgramsClient();
  const { visible, handleLoadMore } = useLoadMore(totalPages);

  return (
    <section className="container mx-auto px-20 bg-[#f3f3f3] pt-4 pb-5">
      <div className="flex gap-8 mt-8">
        <ProgramFilters schools={schools} />

        <div className="flex-1">
          <ProgramGrid programs={programs} loading={loading} />

          <LoadMore
            visible={visible}
            loading={loading}
            onClick={handleLoadMore}
          />
        </div>
      </div>

      <MobileFilters schools={schools} />
    </section>
  );
}
