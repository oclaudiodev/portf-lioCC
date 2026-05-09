type TagListProps = {
  items: string[];
};

export function TagList({ items }: TagListProps) {
  return (
    <ul className="tag-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
