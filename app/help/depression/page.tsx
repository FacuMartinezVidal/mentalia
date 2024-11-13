"use client";

import { Card } from "@/components/ui/card";
import {
  Heart,
  AlertTriangle,
  ThumbsUp,
  Phone,
  MessageCircle,
  Youtube,
  Mail,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

export default function DepressionPage() {
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
            Depresión
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
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Card className="group bg-gradient-to-br from-[#e9d5ff] to-[#f3e8ff] p-8 hover:shadow-xl transition-all duration-300 rounded-xl border-none">
              <div className="flex gap-8 items-start">
                <div className="shrink-0 bg-white/50 p-3 rounded-xl group-hover:scale-105 transition-transform">
                  <Heart className="w-10 h-10 text-purple-600 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-purple-900">
                    ¿Qué es la depresión?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    La depresión es una enfermedad que afecta cómo te sientes,
                    piensas y actúas. Puede causar problemas emocionales y
                    físicos, afectando tu vida diaria.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Card className="group bg-gradient-to-br from-[#e9d5ff] to-[#f3e8ff] p-8 hover:shadow-xl transition-all duration-300 rounded-xl border-none">
              <div className="flex gap-8 items-start">
                <div className="shrink-0 bg-white/50 p-3 rounded-xl group-hover:scale-105 transition-transform">
                  <AlertTriangle className="w-10 h-10 text-purple-600 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-purple-900">
                    Síntomas comunes
                  </h3>
                  <ul className="text-gray-700 space-y-2 leading-relaxed">
                    <li className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-purple-500" />
                      Tristeza persistente
                    </li>
                    <li className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-purple-500" />
                      Pérdida de interés
                    </li>
                    <li className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-purple-500" />
                      Cambios en el apetito
                    </li>
                    <li className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-purple-500" />
                      Problemas de sueño
                    </li>
                    <li className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-purple-500" />
                      Fatiga o falta de energía
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
                    Existen diversos tratamientos efectivos, incluyendo terapia
                    psicológica y medicación. Un profesional de la salud puede
                    ayudarte a encontrar el tratamiento adecuado.
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
                    Línea de Crisis
                  </h3>
                </div>
                <a
                  href="tel:988"
                  className="text-2xl font-bold text-purple-600 hover:text-purple-700 transition-colors flex items-center gap-2"
                >
                  988
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
          <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-purple-50 to-white rounded-xl overflow-hidden shadow-inner">
            <iframe
              src="https://www.youtube.com/embed/9OEo3emh4lQ"
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
