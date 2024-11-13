"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import {
  Wind,
  Activity,
  Brain,
  Music,
  Youtube,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

export default function RelaxPage() {
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
            Técnicas de Relajación y Calma
          </motion.h2>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6 pb-16 space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="grid gap-8"
        >
          {/* Breathing Techniques Card */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Card className="group bg-gradient-to-br from-[#e9d5ff] to-[#f3e8ff] p-8 hover:shadow-xl transition-all duration-300 rounded-xl border-none">
              <div className="flex gap-8 items-start">
                <div className="shrink-0 bg-white/50 p-3 rounded-xl group-hover:scale-105 transition-transform">
                  <Wind className="w-10 h-10 text-purple-600 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-purple-900">
                    Técnicas de Respiración
                  </h3>
                  <ul className="text-gray-700 space-y-2 leading-relaxed">
                    <li className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-purple-500" />
                      Respiración 4-7-8: Inhala (4s), mantén (7s), exhala (8s)
                    </li>
                    <li className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-purple-500" />
                      Respiración diafragmática profunda
                    </li>
                    <li className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-purple-500" />
                      Respiración cuadrada
                    </li>
                    <li className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-purple-500" />
                      Respiración alternada por fosas nasales
                    </li>
                    <li className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-purple-500" />
                      Respiración consciente
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Progressive Relaxation Card */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Card className="group bg-gradient-to-br from-[#e9d5ff] to-[#f3e8ff] p-8 hover:shadow-xl transition-all duration-300 rounded-xl border-none">
              <div className="flex gap-8 items-start">
                <div className="shrink-0 bg-white/50 p-3 rounded-xl group-hover:scale-105 transition-transform">
                  <Activity className="w-10 h-10 text-purple-600 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-purple-900">
                    Relajación Progresiva
                  </h3>
                  <p className="text-gray-700">
                    Técnica que consiste en tensar y relajar diferentes grupos
                    musculares:
                  </p>
                  <ul className="text-gray-700 space-y-2 leading-relaxed mt-2">
                    <li className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-purple-500" />
                      Comienza por los pies y tobillos
                    </li>
                    <li className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-purple-500" />
                      Sigue con piernas y muslos
                    </li>
                    <li className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-purple-500" />
                      Abdomen y pecho
                    </li>
                    <li className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-purple-500" />
                      Brazos y manos
                    </li>
                    <li className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-purple-500" />
                      Cuello y rostro
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Mindfulness Card */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Card className="group bg-gradient-to-br from-[#e9d5ff] to-[#f3e8ff] p-8 hover:shadow-xl transition-all duration-300 rounded-xl border-none">
              <div className="flex gap-8 items-start">
                <div className="shrink-0 bg-white/50 p-3 rounded-xl group-hover:scale-105 transition-transform">
                  <Brain className="w-10 h-10 text-purple-600 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-purple-900">
                    Mindfulness
                  </h3>
                  <p className="text-gray-700">
                    Ejercicios de atención plena para conectar con el presente:
                  </p>
                  <ul className="text-gray-700 space-y-2 leading-relaxed mt-2">
                    <li className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-purple-500" />
                      Observación consciente
                    </li>
                    <li className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-purple-500" />
                      Escaneo corporal
                    </li>
                    <li className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-purple-500" />
                      Meditación guiada
                    </li>
                    <li className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-purple-500" />
                      Caminata consciente
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>

        {/* Resources Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="bg-white rounded-xl p-8 shadow-xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <Music className="w-8 h-8 text-purple-600" />
            <h2 className="text-2xl font-bold text-purple-900">Recursos</h2>
          </div>
          <p className="text-gray-700">
            Herramientas adicionales para tu práctica diaria:
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Card className="bg-[#e9d5ff] p-4">
              <h3 className="font-semibold mb-2">Música y Sonidos:</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>Sonidos de la naturaleza</li>
                <li>Música instrumental relajante</li>
                <li>Mantras y meditaciones guiadas</li>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://open.spotify.com/playlist/YOUR_PLAYLIST_ID"
                  className="text-sm text-[#4a148c] hover:underline inline-flex items-center gap-1 mt-1"
                >
                  Accede a nuestra playlist de Spotify aquí
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                </motion.a>
              </ul>
            </Card>
          </motion.div>
        </motion.section>

        {/* Videos Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="bg-white rounded-xl p-8 shadow-xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <Youtube className="w-8 h-8 text-purple-600" />
            <h2 className="text-2xl font-bold text-purple-900">
              Videos de Meditación
            </h2>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-purple-50 to-white rounded-xl overflow-hidden shadow-inner"
          >
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/wWE0A09vJQU"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-xl"
            ></iframe>
          </motion.div>
        </motion.section>
      </main>
    </motion.div>
  );
}
