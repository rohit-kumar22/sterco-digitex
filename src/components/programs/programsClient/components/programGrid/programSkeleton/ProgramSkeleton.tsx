export default function ProgramSkeleton() {
  return (
    <div className="rounded-lg overflow-hidden bg-white shadow animate-pulse">
      <div className="h-48 bg-gray-300" />
      <div className="p-4 space-y-2">
        <div className="h-3 bg-gray-300 w-1/3" />
        <div className="h-4 bg-gray-300 w-full" />
        <div className="h-3 bg-gray-300 w-2/3" />
      </div>
    </div>
  );
}
