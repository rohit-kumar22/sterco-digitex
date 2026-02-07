"use client";

import { useEffect, useState } from "react";
import { Program } from "@/src/types/programs";
import { useProgram } from "@/src/context/ProgramContext";

export function useProgramsClient(slug: string) {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  const { state } = useProgram();

  useEffect(() => {
    setLoading(true);

    const params = new URLSearchParams();

    if (state.search) params.append("search", state.search);
    if (state.schools.length) params.append("schools", state.schools.join(","));
    if (state.departments.length)
      params.append("departments", state.departments.join(","));

    params.append("page", String(state.page));

    fetch(
      `https://project-demo.in/jss/api/programs/${slug}?${params.toString()}`
    )
      .then((res) => res.json())
      .then((json) => {
        const newPrograms = json.data.data;
        const lastPage = json.data.last_page;

        setTotalPages(lastPage);

        // append when page > 1
        setPrograms((prev) =>
          state.page === 1 ? newPrograms : [...prev, ...newPrograms]
        );
      })
      .finally(() => setLoading(false));
  }, [slug, state.search, state.schools, state.departments, state.page]);

  const hasMore = state.page < totalPages;

  return { programs, loading, hasMore };
}
