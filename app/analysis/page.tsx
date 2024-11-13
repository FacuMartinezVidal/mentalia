"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AnalysisPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#e6f4f6]"
    >
      <header className="sticky top-0 bg-[#e6f4f6]/95 backdrop-blur-sm shadow-md z-10 py-6">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl font-bold text-center bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent"
          >
            Mentalia
          </motion.h1>
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl text-center text-gray-600 mt-2 font-medium"
          >
            Análisis Preliminar
          </motion.h2>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6 pb-16">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Card className="bg-gradient-to-br from-[#e9d5ff] to-[#f3e8ff] p-8 hover:shadow-xl transition-all duration-300 rounded-xl border-none">
            <CardContent className="p-6 space-y-8">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-center space-y-4"
              >
                <h3 className="text-2xl font-semibold text-purple-900">
                  Evaluación Inicial
                </h3>
                <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
                  Recuerda que esta es solo una guía preliminar basada en tus
                  respuestas. Para obtener un diagnóstico adecuado y recibir el
                  tratamiento que necesitas, es esencial que hables con un
                  psicólogo u otro profesional de la salud mental.
                </p>
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Link href="/analysis/questions">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-6 rounded-lg text-lg font-medium transition-colors duration-300">
                    COMENZAR ANÁLISIS
                  </Button>
                </Link>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </motion.div>
  );
}
