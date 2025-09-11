export interface ReadingContent {
  id: number;
  question: string;
  description: string;
  codeExamples?: string[];
  tables?: string[][];
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