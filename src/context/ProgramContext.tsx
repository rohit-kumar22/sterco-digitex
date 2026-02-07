"use client";

import { createContext, useContext, useReducer } from "react";

type State = {
  search: string;
  schools: number[];
  departments: number[];
  page: number;
};

type Action =
  | { type: "SET_SEARCH"; payload: string }
  | { type: "SET_SCHOOLS"; payload: number[] }
  | { type: "SET_DEPARTMENTS"; payload: number[] }
  | { type: "SET_PAGE"; payload: number };

const initialState: State = {
  search: "",
  schools: [],
  departments: [],
  page: 1,
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

    default:
      return state;
  }
}

const ProgramContext = createContext<any>(null);

export function ProgramProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProgramContext.Provider value={{ state, dispatch }}>
      {children}
    </ProgramContext.Provider>
  );
}

export function useProgram() {
  return useContext(ProgramContext);
}
