"use client";

import { Question } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  onSelectAnswer: (index: number) => void;
  isAnswered: boolean;
}

export function QuestionCard({
  question,
  selectedAnswer,
  onSelectAnswer,
  isAnswered,
}: QuestionCardProps) {
  return (
    <Card className="w-full max-w-2xl p-6 space-y-6">
      <div className="flex items-center space-x-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden">
          <Image
            src={question.characterImage}
            alt={question.character}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{question.character}</h3>
          <p className="text-xl font-bold mt-2">{question.question}</p>
        </div>
      </div>
      
      <div className="grid gap-3">
        {question.options.map((option, index) => (
          <Button
            key={index}
            variant={
              isAnswered
                ? index === question.correctAnswer
                  ? "default"
                  : index === selectedAnswer
                  ? "destructive"
                  : "outline"
                : "outline"
            }
            className={cn(
              "justify-start text-left h-auto p-4",
              selectedAnswer === index && !isAnswered && "border-primary"
            )}
            onClick={() => !isAnswered && onSelectAnswer(index)}
          >
            <span className="mr-2">{String.fromCharCode(65 + index)}.</span>
            {option}
          </Button>
        ))}
      </div>
    </Card>
  );
}