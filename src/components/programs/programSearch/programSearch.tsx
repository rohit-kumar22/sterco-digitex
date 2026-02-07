"use client";

import { useSearch } from "./useProgramSearch";

export default function Search() {
  const { value, setValue } = useSearch(300);

  return (
    <div className="bg-white rounded-lg shadow-lg focus-within:ring-0">
      <input
        type="text"
        placeholder="Search Course"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full px-4 py-3 outline-none"
      />
    </div>
  );
}
