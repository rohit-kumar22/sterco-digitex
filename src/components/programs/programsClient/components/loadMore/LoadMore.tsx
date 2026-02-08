interface Props {
  visible: boolean;
  loading: boolean;
  onClick: () => void;
}

export default function LoadMore({ visible, loading, onClick }: Props) {
  if (!visible) return null;

  return (
    <div className="flex items-center justify-center mt-10 gap-4">
      <div className="flex-1 h-px bg-gray-300" />

      <button
        onClick={onClick}
        disabled={loading}
        className="px-6 py-2 border rounded-md bg-white hover:bg-gray-100 disabled:opacity-50 whitespace-nowrap"
      >
        {loading ? "Loading..." : "LOAD MORE ↓"}
      </button>

      <div className="flex-1 h-px bg-gray-300" />
    </div>
  );
}
