"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Component() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#e6f4f6] to-[#bff0e9] py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md px-4 pb-20"
      >
        <Card className="overflow-y-auto border-none shadow-lg bg-white ">
          <CardContent className="p-6">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="text-center relative">
                <Image
                  src="/images/5_bienvenida.svg" // Cambia por la ruta de tu imagen SVG
                  alt="Ilustración de bienvenida"
                  width={200}
                  height={200}
                  className="mx-auto"
                />
                <div className="bg-white/90 justify-normal rounded-3xl p-4  shadow-lg border border-[#4a9e90]/10 hover:shadow-xl transition-shadow duration-300">
                  <p className="text-gray-700 text-lg font-medium leading-relaxed">
                    <span className="block mb-2">¡Hola! 👋</span>
                    Me llamo{" "}
                    <span className="text-[#4a9e90] font-semibold">
                      Mendi
                    </span>{" "}
                    y seré tu compañero en este viaje hacia el bienestar
                    emocional ✨
                  </p>
                </div>
                <Button
                  className="w-full bg-[#4a9e90] text-white hover:bg-[#3d8276] transition-colors duration-300 rounded-lg py-6 mt-8"
                  onClick={() => (window.location.href = "/home")}
                >
                  Comenzar
                </Button>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
