"use client";

import { useEffect, useState } from "react";
import { useProgram } from "@/src/context/ProgramContext";

export function useSearch(delay: number = 300) {
  const { state, dispatch } = useProgram();

  const [value, setValue] = useState(state.search);

  useEffect(() => {
    setValue(state.search);
  }, [state.search]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (value !== state.search) {
        dispatch({ type: "SET_SEARCH", payload: value });
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay, dispatch, state.search]);

  return {
    value,
    setValue,
  };
}
