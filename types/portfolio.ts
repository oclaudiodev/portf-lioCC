export type Card = {
  title: string;
  items?: string[];
  description?: string;
};

export type LessonSection = {
  title: string;
  paragraphs?: string[];
  items?: string[];
  code?: string;
};

export type Lesson = {
  id: string;
  number: string;
  title: string;
  summary: string;
  sections: LessonSection[];
};

export type TimelineItem = {
  month: string;
  content: string;
};

export type AssessmentItem = {
  title: string;
  description: string;
};
