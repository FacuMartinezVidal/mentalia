"use client";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProfilePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-screen bg-[#e6f4f6]"
    >
      <div className="w-full max-w-2xl mx-auto p-6 space-y-8">
        {/* Updated Header with Profile */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative"
        >
          {/* Updated banner design */}
          <div className="h-48 bg-[#e9d5ff] rounded-[2rem] relative overflow-hidden flex items-center justify-center">
            {/* Centered Profile Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="w-32 h-32 bg-white rounded-full p-1 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                  <Image
                    src="/images/martina.jpg"
                    alt="Profile picture"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover object-[center_35%]"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-sm font-medium">
                      Cambiar foto
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Name and Location - Adjusted spacing */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center space-y-2 mt-6"
        >
          <h1 className="text-4xl font-bold text-gray-800">Martina Gomez</h1>
          <p className="text-xl text-gray-600">Misiones, Posadas</p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="grid grid-cols-3 gap-4"
        >
          <Card className="bg-[#e9d5ff] p-4 text-center rounded-[1.5rem] shadow-sm">
            <p className="text-3xl font-bold text-gray-800">7</p>
            <p className="text-gray-600 text-sm">Días activos</p>
          </Card>
          <Card className="bg-[#e9d5ff] p-4 text-center rounded-[1.5rem] shadow-sm">
            <p className="text-3xl font-bold text-gray-800">12</p>
            <p className="text-gray-600 text-sm">Ejercicios</p>
          </Card>
          <Card className="bg-[#e9d5ff] p-4 text-center rounded-[1.5rem] shadow-sm">
            <p className="text-3xl font-bold text-gray-800">5</p>
            <p className="text-gray-600 text-sm">Logros</p>
          </Card>
        </motion.div>

        {/* Personal Information */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Card className="bg-white p-6 rounded-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#e9d5ff] rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                    stroke="#9333ea"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 21C20 18.8783 19.1571 16.8434 17.6569 15.3431C16.1566 13.8429 14.1217 13 12 13C9.87827 13 7.84344 13.8429 6.34315 15.3431C4.84285 16.8434 4 18.8783 4 21"
                    stroke="#9333ea"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold">Información Personal</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
              <div className="space-y-1">
                <p className="text-gray-500">Email</p>
                <p className="text-gray-700 break-words">
                  martina.gomez@email.com
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-500">Teléfono</p>
                <p className="text-gray-700">+54 11-2342-2454</p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-500">Edad</p>
                <p className="text-gray-700">20 años</p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-500">Miembro desde</p>
                <p className="text-gray-700">Enero 2024</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Progress Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <Card className="bg-white p-6 rounded-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#e9d5ff] rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-[#9333ea]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Mi Progreso</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#9333ea] rounded-full"></div>
                <span className="text-gray-700">
                  7 días consecutivos de meditación
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#9333ea] rounded-full"></div>
                <span className="text-gray-700">
                  3 ejercicios de respiración completados
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#9333ea] rounded-full"></div>
                <span className="text-gray-700">
                  5 entradas en el diario de gratitud
                </span>
              </li>
            </ul>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
