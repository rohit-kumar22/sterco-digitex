export function toggleSelection(list: number[], value: number) {
  if (list.includes(value)) {
    return list.filter((id) => id !== value);
  }
  return [...list, value];
}
