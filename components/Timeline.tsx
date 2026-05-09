import type { TimelineItem } from "@/types/portfolio";

type TimelineProps = {
  items: TimelineItem[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <article key={item.month}>
          <span>{item.month}</span>
          <p>{item.content}</p>
        </article>
      ))}
    </div>
  );
}
