"use client";

import { useState } from "react";
import { QuestionCard } from "@/components/quiz/QuestionCard";
import { ProgressBar } from "@/components/quiz/ProgressBar";
import { ResultCard } from "@/components/quiz/ResultCard";
import { FeedbackCard } from "@/components/quiz/FeedbackCard";
import { quizQuestions } from "@/lib/quiz-data";
import type { QuizState } from "@/lib/types";

export default function App() {
    const [quizState, setQuizState] = useState<QuizState>({
        currentQuestion: 0,
        score: 0,
        answers: [],
        isComplete: false,
        showFeedback: false,
    });

    const handleAnswer = (answerIndex: number) => {
        const currentQuestion = quizQuestions[quizState.currentQuestion];
        const isCorrect = answerIndex === currentQuestion.correctAnswer;

        setQuizState((prev) => ({
            ...prev,
            score: isCorrect ? prev.score + 1 : prev.score,
            answers: [...prev.answers, answerIndex],
            showFeedback: true,
        }));
    };

    const handleNextQuestion = () => {
        setQuizState((prev) => {
            const isLastQuestion = prev.currentQuestion === quizQuestions.length - 1;
            return {
                ...prev,
                currentQuestion: isLastQuestion ? prev.currentQuestion : prev.currentQuestion + 1,
                isComplete: isLastQuestion,
                showFeedback: false,
            };
        });
    };

    const restartQuiz = () => {
        setQuizState({
            currentQuestion: 0,
            score: 0,
            answers: [],
            isComplete: false,
            showFeedback: false,
        });
    };

    if (quizState.isComplete) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center p-4">
                <ResultCard
                    score={quizState.score}
                    totalQuestions={quizQuestions.length}
                    onRestart={restartQuiz}
                />
            </div>
        );
    }

    const currentQuestion = quizQuestions[quizState.currentQuestion];
    const currentAnswer = quizState.answers[quizState.currentQuestion];

    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 space-y-6">
            <ProgressBar
                current={quizState.currentQuestion + 1}
                total={quizQuestions.length}
            />
            {quizState.showFeedback ? (
                <FeedbackCard
                    isCorrect={currentAnswer === currentQuestion.correctAnswer}
                    explanation={currentQuestion.explanation}
                    explanationImage={currentQuestion.explanationImage}
                    onNext={handleNextQuestion}
                />
            ) : (
                <QuestionCard
                    question={currentQuestion}
                    selectedAnswer={currentAnswer !== undefined ? currentAnswer : null}
                    onSelectAnswer={handleAnswer}
                    isAnswered={currentAnswer !== undefined}
                />
            )}
        </div>
    );
}
