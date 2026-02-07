import { useState, useEffect } from "react";
import { Program } from "@/src/types/programs";
import { useProgram } from "@/src/context/ProgramContext";

export function useProgramsClient(slug: string) {
  const { state } = useProgram();

  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setLoading(true);

    const params = new URLSearchParams();

    if (state.search) params.append("search", state.search);
    if (state.schools.length) params.append("schools", state.schools.join(","));
    if (state.departments.length)
      params.append("departments", state.departments.join(","));

    params.append("page", String(state.page));

    fetch(`https://project-demo.in/jss/api/programs/${slug}?${params}`)
      .then((res) => res.json())
      .then((json) => {
        const newPrograms = json.data.data;
        const pages = json.data.last_page;

        setTotalPages(pages);

        setPrograms((prev) =>
          state.page === 1 ? newPrograms : [...prev, ...newPrograms]
        );
      })
      .finally(() => setLoading(false));
  }, [slug, state.search, state.schools, state.departments, state.page]);

  return { programs, loading, totalPages };
}
