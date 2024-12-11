"use client";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

// Replace RESULTS with tips
const RESULTS = [
  {
    category: "Pensamientos obsesivos",
    tip: "Practica ejercicios de respiración profunda y mindfulness diariamente para reducir los síntomas de ansiedad.",
    color: "text-orange-600",
  },
  {
    category: "Preocupacion constante por el futuro",
    tip: "Mantén una rutina diaria estructurada y busca actividades que te generen satisfacción.",
    color: "text-red-600",
  },
  {
    category: "Necesidad de controlar las situaciones",
    tip: "Identifica tus emociones y aprende técnicas de autorregulación como el diario emocional.",
    color: "text-purple-600",
  },
  {
    category: "Desesperacion ante lo desconocido",
    tip: "Incorpora actividad física regular y momentos de descanso en tu rutina diaria.",
    color: "text-blue-600",
  },
];

const CircleChart = ({
  percentage,
  label,
  delay,
}: {
  percentage: number;
  label: string;
  delay: number;
}) => (
  <motion.div
    className="relative"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay, duration: 0.5 }}
  >
    <div className="w-32 h-32 rounded-full flex items-center justify-center relative">
      <svg className="absolute top-0 left-0 w-full h-full -rotate-90">
        <circle
          className="text-purple-100"
          strokeWidth="8"
          stroke="currentColor"
          fill="transparent"
          r="56"
          cx="64"
          cy="64"
        />
        <motion.circle
          className="text-purple-500 drop-shadow-lg"
          strokeWidth="8"
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="56"
          cx="64"
          cy="64"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: percentage / 100 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </svg>
      <div className="text-2xl font-bold text-purple-900">{percentage}%</div>
    </div>
    <div className="text-center mt-3 text-sm font-medium text-purple-800">
      {label}
    </div>
  </motion.div>
);

export default function ResultsPage() {
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

      <main className="max-w-4xl mx-auto p-6 pb-16 space-y-8">
        <Card className="bg-gradient-to-br from-[#e9d5ff] to-[#f3e8ff] p-8 hover:shadow-xl transition-all duration-300 rounded-xl border-none">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-purple-900">
                En base a tus respuestas, podes estar atravesando por:
              </h3>
              <div className="space-y-4">
                {RESULTS.map((result, index) => (
                  <motion.div
                    key={result.category}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="p-4 rounded-lg bg-white/50">
                      <h4 className={`font-semibold ${result.color} mb-2`}>
                        {result.category}
                      </h4>
                      <p className="text-gray-700">{result.tip}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-purple-200">
              <h3 className="text-xl font-semibold text-purple-900 mb-6">
                Esto se puede relacionar con:
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                <CircleChart percentage={75} label="Ansiedad" delay={0.2} />
                <CircleChart percentage={25} label="Depresión" delay={0.4} />
                <CircleChart percentage={15} label="Estrés" delay={0.6} />
                <CircleChart
                  percentage={50}
                  label="Reg. Emocional"
                  delay={0.8}
                />
              </div>
            </div>
          </div>
        </Card>

        <Card className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold text-purple-900 mb-4">
            Recomendaciones
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Basado en tus resultados, te recomendamos consultar con un
            profesional de la salud mental para una evaluación más detallada.
            Mientras tanto, puedes explorar nuestras secciones de técnicas de
            relajación y recursos de apoyo.
          </p>
        </Card>
      </main>
    </div>
  );
}
