import { useState, useEffect } from "react";
import { Program } from "@/src/types/programs";
import { useProgram } from "@/src/context/ProgramContext";

export function useProgramsClient() {
  const { state } = useProgram();

  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setLoading(true);

    const params = new URLSearchParams();

    if (state.search) params.append("search", state.search);
    if (state.schools.length)
      params.append("school_id", state.schools.join(","));
    if (state.departments.length)
      params.append("department_id", state.departments.join(","));

    params.append("page", String(state.page));

    fetch(
      `https://project-demo.in/jss/api/programs/${state.categorySlug}?${params}`
    )
      .then((res) => res.json())
      .then((json) => {
        setTotalPages(json.data.last_page);

        setPrograms((prev) =>
          state.page === 1 ? json.data.data : [...prev, ...json.data.data]
        );
      })
      .finally(() => setLoading(false));
  }, [
    state.categorySlug,
    state.search,
    state.schools,
    state.departments,
    state.page,
  ]);

  return { programs, loading, totalPages };
}
