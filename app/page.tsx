"use client";
import {
  Brain,
  HelpCircle,
  LightbulbIcon,
  LineChart,
  Users,
  Smile,
  Target,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Component() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#e6f4f6] to-[#bff0e9] py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md px-4 pb-24"
      >
        <Card className="overflow-y-auto border-none shadow-lg bg-white">
          <CardContent className="">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="text-center">
                <Image
                  src="/images/5.svg" // Cambia por la ruta de tu imagen SVG
                  alt="Ilustración de bienvenida"
                  width={200}
                  height={200}
                  className="mx-auto"
                />
                <h1 className="text-3xl font-bold text-[#4a9e90]">
                  ¡Bienvenida, Martina!
                </h1>
                <p className="text-gray-700">
                  Estás dando un gran paso hacia tu bienestar al iniciar este
                  viaje.
                </p>
              </div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              ></motion.div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#4a9e90]">
                  Cuéntanos un poco sobre ti
                </h3>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="shadow-lg rounded-lg bg-white"
                >
                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center space-x-4">
                        <Smile className="w-8 h-8 text-[#4a9e90]" />
                        <h2 className="text-xl font-bold text-gray-800">
                          Paso 1: Sentimientos y Relajación
                        </h2>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700">
                          ¿Cómo te has sentido últimamente?
                        </label>
                        <Input
                          className="mt-1 bg-white border-[#4a9e90]/20 focus:border-[#4a9e90] focus:ring-[#4a9e90]"
                          placeholder="Escribe aquí..."
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700">
                          ¿Qué actividades te ayudan a relajarte?
                        </label>
                        <Input
                          className="mt-1 bg-white border-[#4a9e90]/20 focus:border-[#4a9e90] focus:ring-[#4a9e90]"
                          placeholder="Escribe aquí..."
                        />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="shadow-lg rounded-lg bg-white"
                >
                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center space-x-4">
                        <Target className="w-8 h-8 text-[#4a9e90]" />
                        <h2 className="text-xl font-bold text-gray-800">
                          Paso 2: Metas, Motivación y Apoyo
                        </h2>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700">
                          ¿Qué metas personales tienes?
                        </label>
                        <Input
                          className="mt-1 bg-white border-[#4a9e90]/20 focus:border-[#4a9e90] focus:ring-[#4a9e90]"
                          placeholder="Escribe aquí..."
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700">
                          ¿Qué te motivó a buscar apoyo en Mentalia?
                        </label>
                        <Input
                          className="mt-1 bg-white border-[#4a9e90]/20 focus:border-[#4a9e90] focus:ring-[#4a9e90]"
                          placeholder="Escribe aquí..."
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700">
                          ¿Con quién hablas cuando necesitas apoyo?
                        </label>
                        <Input
                          className="mt-1 bg-white border-[#4a9e90]/20 focus:border-[#4a9e90] focus:ring-[#4a9e90]"
                          placeholder="Escribe aquí..."
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700">
                          ¿Qué esperas obtener al usar Mentalia?
                        </label>
                        <Input
                          className="mt-1 bg-white border-[#4a9e90]/20 focus:border-[#4a9e90] focus:ring-[#4a9e90]"
                          placeholder="Escribe aquí..."
                        />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                <Button
                  className="w-full bg-[#4a9e90] text-white hover:bg-[#3d8276] transition-colors duration-300 rounded-lg py-6"
                  onClick={() => (window.location.href = "/advices")}
                >
                  Continuar
                </Button>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
