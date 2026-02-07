import { useProgram } from "@/src/context/ProgramContext";

export function useLoadMore(totalPages: number) {
  const { state, dispatch } = useProgram();

  const visible = state.page < totalPages;

  const handleLoadMore = () => {
    if (!visible) return;

    dispatch({ type: "SET_PAGE", payload: state.page + 1 });
  };

  return { visible, handleLoadMore };
}
