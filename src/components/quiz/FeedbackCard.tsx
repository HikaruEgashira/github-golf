"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle } from "lucide-react";
import confetti from 'canvas-confetti';

interface FeedbackCardProps {
  isCorrect: boolean;
  explanation: string;
  explanationImage?: string;
  onNext: () => void;
}

export function FeedbackCard({
  isCorrect,
  explanation,
  explanationImage,
  onNext
}: FeedbackCardProps) {
  if (isCorrect) {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-4xl"
    >
      <Card className={`p-6 ${isCorrect ? 'border-green-500' : 'border-red-500'}`}>
        <div className="flex items-center space-x-4 mb-4">
          {isCorrect ? (
            <CheckCircle2 className="w-8 h-8 text-green-500" />
          ) : (
            <XCircle className="w-8 h-8 text-red-500" />
          )}
          <h3 className="text-xl font-bold">
            {isCorrect ? "Correct!" : "Incorrect!"}
          </h3>
        </div>

        <p className="text-muted-foreground mb-6">{explanation}</p>

        {explanationImage && (
          <div className="mb-6">
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
              <img
                src={explanationImage}
                alt="Example visualization"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        )}

        <Button onClick={onNext} className="w-full">
          Next Question
        </Button>
      </Card>
    </motion.div>
  );
}
