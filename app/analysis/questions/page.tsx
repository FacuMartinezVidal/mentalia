"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const QUESTIONS = [
  {
    id: 1,
    text: "¿Te sientes preocupado/a por cosas cotidianas, al punto que te cuesta concentrarte en otras tareas?",
  },
  {
    id: 2,
    text: "¿Has notado cambios en tus patrones de sueño (dificultad para dormir o dormir demasiado)?",
  },
  {
    id: 3,
    text: "¿Te sientes abrumado/a por tus emociones con frecuencia?",
  },
  {
    id: 4,
    text: "¿Has perdido interés en actividades que antes disfrutabas?",
  },
  {
    id: 5,
    text: "¿Experimentas momentos de tensión física como dolor de cabeza o tensión muscular?",
  },
];

const RESPONSES = [
  { value: "1", label: "Totalmente en desacuerdo", emoji: "😢" },
  { value: "2", label: "En desacuerdo", emoji: "🙁" },
  { value: "3", label: "Neutral", emoji: "😐" },
  { value: "4", label: "De acuerdo", emoji: "🙂" },
  { value: "5", label: "Totalmente de acuerdo", emoji: "😊" },
];

export default function QuestionsPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const router = useRouter();

  const progress = ((currentQuestion + 1) / QUESTIONS.length) * 100;

  const handleNext = () => {
    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      router.push("/analysis/results");
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#e6f4f6]">
      <header className="sticky top-0 bg-[#e6f4f6]/95 backdrop-blur-sm shadow-md z-10 py-6">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
            Mentalia
          </h1>
          <h2 className="text-xl text-center text-gray-600 mt-2 font-medium">
            Cuestionario de Evaluación
          </h2>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6 pb-16 space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="text-sm font-medium text-gray-500">
              Pregunta {currentQuestion + 1} de {QUESTIONS.length}
            </div>
          </div>
          <div className="w-full h-2 bg-purple-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-purple-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="bg-gradient-to-br from-[#e9d5ff] to-[#f3e8ff] p-8 hover:shadow-xl transition-all duration-300 rounded-xl border-none">
            <CardContent className="p-6">
              <div className="space-y-8">
                <h3 className="text-xl font-semibold text-purple-900 mb-4">
                  {QUESTIONS[currentQuestion].text}
                </h3>

                <RadioGroup
                  className="space-y-4"
                  value={answers[currentQuestion]?.toString()}
                  onValueChange={(value) => {
                    setAnswers((prev) => ({
                      ...prev,
                      [currentQuestion]: value,
                    }));
                  }}
                >
                  {RESPONSES.map((response) => (
                    <motion.div
                      key={response.value}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center space-x-3 hover:bg-white/50 p-4 rounded-lg transition-colors cursor-pointer"
                    >
                      <RadioGroupItem
                        value={response.value}
                        id={`response-${response.value}`}
                        className="text-purple-600"
                      />
                      <label
                        htmlFor={`response-${response.value}`}
                        className="flex items-center space-x-3 text-gray-700 cursor-pointer text-lg w-full"
                      >
                        <span className="text-2xl">{response.emoji}</span>
                        <span className="font-medium">{response.label}</span>
                      </label>
                    </motion.div>
                  ))}
                </RadioGroup>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="flex justify-between gap-4 pt-4">
          <Button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            variant="outline"
            className="px-8 py-2 disabled:opacity-50"
          >
            Anterior
          </Button>
          <Button
            onClick={handleNext}
            disabled={!answers[currentQuestion]}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2 disabled:opacity-50"
          >
            {currentQuestion === QUESTIONS.length - 1
              ? "Finalizar"
              : "Siguiente"}
          </Button>
        </div>
      </main>
    </div>
  );
}
