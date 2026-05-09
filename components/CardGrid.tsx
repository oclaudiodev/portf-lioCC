import type { Card } from "@/types/portfolio";

type CardGridProps = {
  cards: Card[];
  compact?: boolean;
};

export function CardGrid({ cards, compact = false }: CardGridProps) {
  return (
    <div className={`grid cards ${compact ? "compact" : ""}`}>
      {cards.map((card) => (
        <article key={card.title}>
          <h3>{card.title}</h3>
          {card.description ? <p>{card.description}</p> : null}
          {card.items ? (
            <ul>
              {card.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </article>
      ))}
    </div>
  );
}
