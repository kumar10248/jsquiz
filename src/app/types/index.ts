export interface TableData {
  headers: string[];
  rows: string[][];
}

export interface ReadingContent {
  id: number;
  question: string;
  description: string;
  codeExamples?: string[];
  tables?: TableData[];  // Now properly typed with headers and rows
  image?: string[];
  imageSize?: 'small' | 'medium' | 'large';
}

export interface QuizOption {
  correct: boolean;
  text: string;
}

export interface QuizQuestion {
  id: number;
  title: string;
  code?: string;
  options: QuizOption[];
  explanation: string;
}

export interface UserProgress {
  totalQuestions: number;
  correctAnswers: number;
  completedQuestions: number[];
}