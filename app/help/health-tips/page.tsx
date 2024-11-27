"use client";

import { Card } from "@/components/ui/card";
import {
  Heart,
  Brain,
  Users,
  ArrowRight,
  Youtube,
  Sparkles,
  Leaf,
} from "lucide-react";
import { motion } from "framer-motion";

export default function HealthTipsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#e6f4f6]"
    >
      <div className="w-full max-w-2xl mx-auto p-6 space-y-8 pb-0">
          <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center "
        >
          <h2 className="text-2xl text-gray-700">Tips para tu salud mental</h2>
        </motion.div>
        </div>

      <main className="max-w-4xl mx-auto p-6 pb-16 space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="grid gap-8"
        >
          {/* Daily Routines */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Card className="group bg-gradient-to-br from-[#e9d5ff] to-[#f3e8ff] p-8 hover:shadow-xl transition-all duration-300 rounded-xl border-none">
              <div className="flex gap-8 items-start">
                <div className="shrink-0 bg-white/50 p-3 rounded-xl group-hover:scale-105 transition-transform">
                  <Heart className="w-10 h-10 text-purple-600 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-purple-900">
                    Rutinas Diarias
                  </h3>
                  <ul className="text-gray-700 space-y-2 leading-relaxed">
                    <li className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-purple-500" />
                      Mantén un horario regular de sueño
                    </li>
                    <li className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-purple-500" />
                      Haz ejercicio moderado diariamente
                    </li>
                    <li className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-purple-500" />
                      Come de manera equilibrada
                    </li>
                    <li className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-purple-500" />
                      Toma descansos durante el día
                    </li>
                    <li className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-purple-500" />
                      Limita el uso de redes sociales
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Emotional Management */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Card className="group bg-gradient-to-br from-[#e9d5ff] to-[#f3e8ff] p-8 hover:shadow-xl transition-all duration-300 rounded-xl border-none">
              <div className="flex gap-8 items-start">
                <div className="shrink-0 bg-white/50 p-3 rounded-xl group-hover:scale-105 transition-transform">
                  <Brain className="w-10 h-10 text-purple-600 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-purple-900">
                    Manejo Emocional
                  </h3>
                  <ul className="text-gray-700 space-y-2 leading-relaxed">
                    <li className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-purple-500" />
                      Practica la meditación o mindfulness
                    </li>
                    <li className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-purple-500" />
                      Escribe un diario de gratitud
                    </li>
                    <li className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-purple-500" />
                      Comparte tus sentimientos con otros
                    </li>
                    <li className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-purple-500" />
                      Aprende a decir &quot;no&quot; cuando lo necesites
                    </li>
                    <li className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-purple-500" />
                      Reconoce y acepta tus emociones
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Social Connection */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Card className="group bg-gradient-to-br from-[#e9d5ff] to-[#f3e8ff] p-8 hover:shadow-xl transition-all duration-300 rounded-xl border-none">
              <div className="flex gap-8 items-start">
                <div className="shrink-0 bg-white/50 p-3 rounded-xl group-hover:scale-105 transition-transform">
                  <Users className="w-10 h-10 text-purple-600 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-purple-900">
                    Conexión Social
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Mantén contacto regular con amigos y familia. Participa en
                    actividades grupales, únete a clubes o grupos de interés, y
                    no dudes en buscar apoyo cuando lo necesites.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="bg-white rounded-xl p-8 shadow-xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-purple-600" />
            <h2 className="text-2xl font-bold text-purple-900">
              Recursos Adicionales
            </h2>
          </div>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Aquí encontrarás contenido que te ayudará a mantener una buena salud
            mental:
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Card className="group bg-gradient-to-br from-[#e9d5ff] to-[#f3e8ff] p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/50 p-2 rounded-lg group-hover:scale-105 transition-transform">
                  <Leaf className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg text-purple-900">
                  Actividades Recomendadas:
                </h3>
              </div>
              <ul className="text-gray-700 space-y-2 leading-relaxed pl-4">
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-4 h-4 text-purple-500" />
                  Yoga y ejercicios de respiración
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-4 h-4 text-purple-500" />
                  Lectura y actividades creativas
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-4 h-4 text-purple-500" />
                  Paseos en la naturaleza
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-4 h-4 text-purple-500" />
                  Hobbies que disfrutes
                </li>
              </ul>
            </Card>
          </motion.div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="bg-white rounded-xl p-8 shadow-xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <Youtube className="w-8 h-8 text-purple-600" />
            <h2 className="text-2xl font-bold text-purple-900">
              Videos de Relajación
            </h2>
          </div>
          <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-purple-50 to-white rounded-xl overflow-hidden shadow-inner">
            <iframe
              src="https://www.youtube.com/embed/8-mCglCgmHY"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </motion.section>
      </main>
    </motion.div>
  );
}
