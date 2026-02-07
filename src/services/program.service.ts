import { ProgramCategory, School, Program } from "@/src/types/programs";
import { API_BASE_URL } from "@/src/config/api";

interface ProgramsResponse {
  data: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    data: Program[];
  };
}

/* ---------- PROGRAM CATEGORIES ---------- */
export async function getProgramCategories(): Promise<ProgramCategory[]> {
  const res = await fetch(`${API_BASE_URL}/program-list`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch program categories");
  }

  const json = await res.json();
  return json.data;
}

/* ---------- PROGRAMS ---------- */
export async function getPrograms(
  slug: string,
  page: number
): Promise<ProgramsResponse["data"]> {
  const res = await fetch(`${API_BASE_URL}/programs/${slug}?page=${page}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch programs");
  }

  const json = await res.json();
  return json.data;
}

/* ---------- SCHOOL + DEPARTMENTS ---------- */
export async function getSchoolDepartmentList(): Promise<School[]> {
  const res = await fetch(`${API_BASE_URL}/school-department-list`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch school & department list");
  }

  const json = await res.json();
  return json.data;
}
