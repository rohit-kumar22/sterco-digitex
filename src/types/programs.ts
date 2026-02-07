export interface ProgramCategory {
  id: number;
  name: string;
  slug: string;
  image: string;
}

export interface Program {
  name: string;
  banner: string | null;
  slug: string;
  degree_name: string;
  department_name: string;
}

export type Department = {
  id: number;
  name: string;
};

export type School = {
  id: number;
  name: string;
  departments: Department[];
};
