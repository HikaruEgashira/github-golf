export interface Question {
  id: number;
  question: string;
  character: string;
  characterImage: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  explanationImage?: string;
}

export interface QuizState {
  currentQuestion: number;
  score: number;
  answers: number[];
  isComplete: boolean;
  showFeedback: boolean;
}