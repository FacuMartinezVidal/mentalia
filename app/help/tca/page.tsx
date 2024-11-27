"use client";

import { Card } from "@/components/ui/card";
import {
  Utensils,
  AlertTriangle,
  ThumbsUp,
  Phone,
  MessageCircle,
  Youtube,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

export default function TCAPage() {
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
          <h2 className="text-2xl text-gray-700">Trastornos de la Conducta Alimentaria</h2>
        </motion.div>
        </div>
      

      <main className="max-w-4xl mx-auto p-6 pb-16 space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="grid gap-8"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="group bg-gradient-to-br from-[#e9d5ff] to-[#f3e8ff] p-8 hover:shadow-xl transition-all duration-300 rounded-xl border-none">
              <div className="flex gap-8 items-start">
                <div className="shrink-0 bg-white/50 p-3 rounded-xl group-hover:scale-105 transition-transform">
                  <Utensils className="w-10 h-10 text-purple-600 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-purple-900">
                    ¿Qué son los TCA?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Los Trastornos de la Conducta Alimentaria son condiciones
                    serias que afectan los hábitos alimenticios, pensamientos y
                    comportamientos relacionados con la comida, el peso y la
                    imagen corporal.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="group bg-gradient-to-br from-[#e9d5ff] to-[#f3e8ff] p-8 hover:shadow-xl transition-all duration-300 rounded-xl border-none">
              <div className="flex gap-8 items-start">
                <div className="shrink-0 bg-white/50 p-3 rounded-xl group-hover:scale-105 transition-transform">
                  <AlertTriangle className="w-10 h-10 text-purple-600 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-purple-900">
                    Señales de advertencia
                  </h3>
                  <ul className="text-gray-700 space-y-2 leading-relaxed">
                    <li className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-purple-500" />
                      Preocupación excesiva por el peso
                    </li>
                    <li className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-purple-500" />
                      Cambios drásticos en los hábitos alimenticios
                    </li>
                    <li className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-purple-500" />
                      Ejercicio compulsivo
                    </li>
                    <li className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-purple-500" />
                      Aislamiento social
                    </li>
                    <li className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-purple-500" />
                      Distorsión de la imagen corporal
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="group bg-gradient-to-br from-[#e9d5ff] to-[#f3e8ff] p-8 hover:shadow-xl transition-all duration-300 rounded-xl border-none">
              <div className="flex gap-8 items-start">
                <div className="shrink-0 bg-white/50 p-3 rounded-xl group-hover:scale-105 transition-transform">
                  <ThumbsUp className="w-10 h-10 text-purple-600 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-purple-900">
                    Opciones de tratamiento
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    El tratamiento generalmente incluye un equipo de
                    profesionales: psicólogos, nutricionistas y médicos. La
                    recuperación es posible con el apoyo y tratamiento
                    adecuados. Es importante buscar ayuda profesional lo antes
                    posible.
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
          <h2 className="text-2xl font-bold mb-6 text-purple-900">
            Recursos de ayuda
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Si necesitas ayuda inmediata, estos recursos están disponibles 24/7:
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Card className="group bg-gradient-to-r from-purple-50 to-purple-100 p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white p-2 rounded-lg group-hover:scale-105 transition-transform">
                    <Phone className="w-6 h-6 text-purple-500" />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    Línea Nacional TCA
                  </h3>
                </div>
                <a
                  href="tel:900850500"
                  className="text-2xl font-bold text-purple-600 hover:text-purple-700 transition-colors flex items-center gap-2"
                >
                  900 850 500
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Card>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Card className="group bg-gradient-to-r from-purple-50 to-purple-100 p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white p-2 rounded-lg group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-6 h-6 text-purple-500" />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    WhatsApp
                  </h3>
                </div>
                <a
                  href="https://wa.me/12345678900"
                  className="text-xl font-bold text-purple-600 hover:text-purple-700 transition-colors flex items-center gap-2"
                >
                  +1 234 567 8900
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Card>
            </motion.div>
          </div>
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
              Videos informativos
            </h2>
          </div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-purple-50 to-white rounded-xl overflow-hidden shadow-inner"
          >
            <iframe
              src="https://www.youtube.com/embed/hx6B40ey-ss"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </motion.div>
        </motion.section>
      </main>
    </motion.div>
  );
}
