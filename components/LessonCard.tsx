import type { Lesson } from "@/types/portfolio";

type LessonCardProps = {
  lesson: Lesson;
};

export function LessonCard({ lesson }: LessonCardProps) {
  return (
    <article className="lesson searchable" id={lesson.id}>
      <div className="lesson__header">
        <span>{lesson.number}</span>
        <div>
          <h3>{lesson.title}</h3>
          <p>{lesson.summary}</p>
        </div>
      </div>
      <div className="lesson__body">
        {lesson.sections.map((section) => (
          <section key={section.title} className="lesson-section">
            <h4>{section.title}</h4>
            {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.items ? (
              <ul className="lesson-list">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            {section.code ? (
              <pre>
                <code>{section.code}</code>
              </pre>
            ) : null}
          </section>
        ))}
      </div>
    </article>
  );
}
