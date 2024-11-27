"use client";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function ConsejosPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-screen bg-gradient-to-b from-[#e6f4f6] to-[#f0f7f8]"
    >
      <div className="w-full max-w-2xl mx-auto p-6 space-y-8 pb-0">
          <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center "
        >
          <h2 className="text-2xl text-gray-700">Consejos</h2>
        </motion.div>


        <div className="space-y-6">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Card className="bg-[#e9d5ff] p-5 flex gap-5 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
              <div className="w-20 h-20 shrink-0 flex items-center justify-center bg-white rounded-full">
                <svg
                  className="w-12 h-12 text-[#4a148c]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  Respiración y meditación
                </h3>
                <p className="text-sm text-gray-700">
                  Mejora tu enfoque y reduce la ansiedad con técnicas de
                  respiración y meditación, claves para tu bienestar mental.
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Card className="bg-[#e9d5ff] p-5 flex gap-5 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
              <div className="w-20 h-20 shrink-0 flex items-center justify-center bg-white rounded-full">
                <svg
                  className="w-12 h-12 text-[#4a148c]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  Ejercicio y movimiento
                </h3>
                <p className="text-sm text-gray-700">
                  Moverte y hacer ejercicio libera endorfinas, elevando tu ánimo
                  y ayudando a gestionar el estrés de forma efectiva.
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Card className="bg-[#e9d5ff] p-5 flex gap-5 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
              <div className="w-20 h-20 shrink-0 flex items-center justify-center bg-white rounded-full">
                <svg
                  className="w-12 h-12 text-[#4a148c]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                  />
                </svg>
              </div>
              <div>
                <div>
                  <h3 className="text-lg font-semibold">
                    Música y sonidos relajantes
                  </h3>
                  <p className="text-sm text-gray-700">
                    La música relajante reduce el estrés y promueve la calma,
                    esencial para una mente tranquila.
                  </p>
                  <a
                    href="https://open.spotify.com/album/4TXwGeSplAFc1PvrEMWX7R?si=r5NHAol3TtmeuaJJbPdmVQ"
                    className="text-sm text-[#4a148c] hover:text-[#6a1b9a] hover:underline inline-flex items-center gap-2 mt-2 transition-colors duration-300"
                  >
                    Accede a nuestra playlist de Spotify aquí
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                    </svg>
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="space-y-6 bg-white/50 p-6 rounded-xl backdrop-blur-sm"
        >
          <h2 className="text-2xl font-bold text-[#4a148c]">
            Guía de Meditación
          </h2>
          <p className="text-gray-700 text-lg">
            Estos videos te serán de gran ayuda para aprender a meditar por tu
            cuenta!
          </p>

          <div className="space-y-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg"
            >
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/tYwnSBkc_To"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </motion.div>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="aspect-w-16 aspect-h-9"
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
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
