"use client";

import { createContext, useContext, useReducer } from "react";

/* ---------- TYPES ---------- */

type State = {
  search: string;
  schools: number[];
  departments: number[];
  page: number;
  categorySlug: string;
};

type Action =
  | { type: "SET_SEARCH"; payload: string }
  | { type: "SET_SCHOOLS"; payload: number[] }
  | { type: "SET_DEPARTMENTS"; payload: number[] }
  | { type: "SET_PAGE"; payload: number }
  | { type: "SET_CATEGORY"; payload: string };

type ProgramContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

export const ProgramContext = createContext<ProgramContextType | null>(null);

/* ---------- REDUCER ---------- */

const initialState: State = {
  search: "",
  schools: [],
  departments: [],
  page: 1,
  categorySlug: "under-graduate",
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_SEARCH":
      return { ...state, search: action.payload, page: 1 };

    case "SET_SCHOOLS":
      return { ...state, schools: action.payload, page: 1 };

    case "SET_DEPARTMENTS":
      return { ...state, departments: action.payload, page: 1 };

    case "SET_PAGE":
      return { ...state, page: action.payload };

    case "SET_CATEGORY":
      return {
        ...state,
        categorySlug: action.payload,
        page: 1,
      };

    default:
      return state;
  }
}

/* ---------- PROVIDER ---------- */

export function ProgramProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProgramContext.Provider value={{ state, dispatch }}>
      {children}
    </ProgramContext.Provider>
  );
}

/* ---------- HOOK ---------- */

export function useProgram() {
  const context = useContext(ProgramContext);

  if (!context) {
    throw new Error("useProgram must be used inside ProgramProvider");
  }

  return context;
}
