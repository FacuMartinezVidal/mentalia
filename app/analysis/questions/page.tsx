"use client";
import { useState, useEffect } from "react";
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
  }
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const progress = ((currentQuestion + 1) / QUESTIONS.length) * 100;

  const handleNext = () => {
    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setIsModalOpen(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      const timer = setTimeout(() => {
        router.push("/analysis/results");
      }, Math.floor(Math.random() * (4500 - 500 + 1)) + 2500);
      return () => clearTimeout(timer);
    }
  }, [isModalOpen]);

  return (
    <div className="min-h-screen bg-[#e6f4f6]">
      <div className="w-full max-w-2xl mx-auto p-6 space-y-8 pb-0">
          <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center "
        >
          <h2 className="text-2xl text-gray-700">Cuestionario de Evaluación</h2>
        </motion.div>
        </div>

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

      {isModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm">
    <div className="bg-purple-100 p-8 rounded-lg shadow-xl text-center">
      <h2 className="text-xl font-bold text-purple-800">✨ Estamos procesando tus resultados ✨</h2>
      <p className="text-sm text-purple-700 mt-2">
        Esto solo tomará unos momentos.
      </p>
      
      <div className="flex justify-center my-6">
        <img src="/images/9_analisis.svg" alt="Loading" className="animate-bounce w-64 h-64" />
      </div>

      <p className="text-lg font-semibold text-purple-800">⏳ Por favor, espera un momento... ⏳</p>
      <p className="text-xs text-purple-600 mt-2">
        Gracias por tu paciencia. Estamos aquí para ayudarte.
      </p>
    </div>
  </div>
)}



    </div>
  );
}
