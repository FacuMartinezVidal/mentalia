"use client";
import {
  Brain,
  HelpCircle,
  LightbulbIcon,
  LineChart,
  Users,
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
          <CardContent className="p-6">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="text-center">
                <h1 className="text-3xl font-bold text-[#4a9e90]">Mentalia</h1>
                <h2 className="mt-2 text-2xl text-gray-700">
                  ¡Te damos la bienvenida Martina!
                </h2>
                <p className="mt-2 text-gray-600">
                  Estás tomando un buen paso hacia tu bienestar
                  <br />
                  al buscar respuestas!
                </p>
              </div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <p className="font-semibold text-[#4a9e90]">Mentalia</p>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  es una plataforma que busca acompañarte en tus procesos
                  internos, un medio de apoyo para transitar aquello que
                  necesites, y sobre todo, para darte herramientas de ayuda.
                  Esperamos realmente contribuir a tu salud mental
                </p>
              </motion.div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#4a9e90]">
                  Cuéntanos un poco sobre ti
                </h3>
                <div className="space-y-4 rounded-xl bg-[#e6f4f6]/50 p-6 shadow-inner">
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Cuáles son tus pasatiempos favoritos?
                    </label>
                    <Input
                      className="mt-1 bg-white/90 border-[#4a9e90]/20 focus:border-[#4a9e90] focus:ring-[#4a9e90]"
                      placeholder="Escribe aquí..."
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Cómo te has sentido últimamente?
                    </label>
                    <Input
                      className="mt-1 bg-white/90 border-[#4a9e90]/20 focus:border-[#4a9e90] focus:ring-[#4a9e90]"
                      placeholder="Escribe aquí..."
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Qué actividades te ayudan a relajarte?
                    </label>
                    <Input
                      className="mt-1 bg-white/90 border-[#4a9e90]/20 focus:border-[#4a9e90] focus:ring-[#4a9e90]"
                      placeholder="Escribe aquí..."
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Tienes alguna meta personal que te gustaría alcanzar?
                    </label>
                    <Input
                      className="mt-1 bg-white/90 border-[#4a9e90]/20 focus:border-[#4a9e90] focus:ring-[#4a9e90]"
                      placeholder="Escribe aquí..."
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Con quién sueles hablar cuando necesitas apoyo?
                    </label>
                    <Input
                      className="mt-1 bg-white/90 border-[#4a9e90]/20 focus:border-[#4a9e90] focus:ring-[#4a9e90]"
                      placeholder="Escribe aquí..."
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Qué te motivó a buscar apoyo en Mentalia?
                    </label>
                    <Input
                      className="mt-1 bg-white/90 border-[#4a9e90]/20 focus:border-[#4a9e90] focus:ring-[#4a9e90]"
                      placeholder="Escribe aquí..."
                    />
                  </div>
                </div>
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
