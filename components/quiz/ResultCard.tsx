import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, RefreshCw } from "lucide-react";

interface ResultCardProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

export function ResultCard({
  score,
  totalQuestions,
  onRestart,
}: ResultCardProps) {
  const percentage = (score / totalQuestions) * 100;

  return (
    <Card className="w-full max-w-2xl p-6 text-center">
      <div className="flex justify-center mb-4">
        <Trophy className="w-16 h-16 text-yellow-500" />
      </div>
      <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
      <p className="text-xl mb-2">
        You scored {score} out of {totalQuestions}
      </p>
      <p className="text-lg text-muted-foreground mb-6">
        ({percentage.toFixed(1)}% correct)
      </p>
      <Button onClick={onRestart} className="w-full">
        <RefreshCw className="mr-2 h-4 w-4" /> Try Again
      </Button>
    </Card>
  );
}
