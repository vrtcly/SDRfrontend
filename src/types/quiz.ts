export interface Option {
  label: string;
  points: number;
}

export interface Question {
  questionText: string;
  options: Option[];
  multiSelect?: boolean;
  isTextEntry?: boolean;
}

export interface Section {
  sectionTitle: string;
  sectionPoints: number;
  questions: Question[];
}

export type QuizData = Section[];