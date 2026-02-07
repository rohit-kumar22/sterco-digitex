interface Props {
  visible: boolean;
  loading: boolean;
  onClick: () => void;
}

export default function LoadMore({ visible, loading, onClick }: Props) {
  if (!visible) return null;

  return (
    <div className="flex justify-center mt-10">
      <button
        onClick={onClick}
        disabled={loading}
        className="px-6 py-2 border rounded-md bg-white hover:bg-gray-100 disabled:opacity-50"
      >
        {loading ? "Loading..." : "LOAD MORE ↓"}
      </button>
    </div>
  );
}
