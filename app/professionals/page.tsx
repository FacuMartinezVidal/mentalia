"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";

// Sample data
const professionals = [
    {
      id: 1,
      name: "Veronica Suarez",
      profession: "Psicóloga",
      location: "Córdoba, Capital",
      image: "/images/veronica.jpg?height=80&width=80",
      type: "psicologo",
      biography:
        "Verónica cuenta con más de 10 años de experiencia en psicología clínica. Se destaca por su enfoque empático y personalizado en el tratamiento de sus pacientes.",
      specializations: ["Ansiedad", "Depresión", "Terapia Familiar"],
      experience:
        "Ha trabajado en hospitales, centros de salud y consultas privadas, ayudando a cientos de pacientes a superar sus desafíos emocionales y mentales.",
      contact: "v.suarez.psicologia@gmail.com",
    },
    {
      id: 2,
      name: "Pablo Gomez",
      profession: "Psiquiatra",
      location: "Córdoba, Capital",
      image: "/images/pablo.jpg?height=80&width=80",
      type: "psiquiatra",
      biography:
        "Pablo es un psiquiatra con especialización en trastornos del estado de ánimo y psicofarmacología. Ofrece tratamientos efectivos y modernos para mejorar la calidad de vida de sus pacientes.",
      specializations: ["Depresión", "Trastorno Bipolar"],
      experience:
        "Ha trabajado en instituciones psiquiátricas reconocidas y colabora regularmente en investigaciones sobre salud mental.",
      contact: "pablogomez@consultoriogomez.com",
    },
    {
      id: 3,
      name: "Sol Fernandez",
      profession: "Psicóloga",
      location: "Córdoba, Capital",
      image: "/images/sol.jpg?height=80&width=80",
      type: "psicologo",
      biography:
        "Sol se especializa en terapia cognitivo-conductual y tiene experiencia en el tratamiento de la ansiedad. Su enfoque práctico y orientado a resultados ha ayudado a numerosos pacientes.",
      specializations: ["Ansiedad", "Terapia Cognitivo-Conductual"],
      experience:
        "Trabajó en centros de salud mental y consulta privada, enfocándose en adultos jóvenes y adolescentes.",
      contact: "contacto@solfernandezpsicologia.com",
    },
    {
      id: 4,
      name: "Emiliano Gonzalez",
      profession: "Psicólogo",
      location: "Córdoba, Capital",
      image: "/images/emiliano.jpg?height=80&width=80",
      type: "psicologo",
      biography:
        "Emiliano trabaja con adolescentes y adultos, enfocándose en el desarrollo personal y el fortalecimiento de habilidades emocionales.",
      specializations: ["Desarrollo Personal", "Terapia de Pareja"],
      experience:
        "Tiene una amplia trayectoria en terapias individuales y grupales, ayudando a sus pacientes a alcanzar su máximo potencial.",
      contact: "e.gonzalez.adultos@gmail.com",
    },
];

export default function ProfessionalsPage() {
  const [filter, setFilter] = useState("todos");

  const filteredProfessionals = professionals.filter((professional) => {
    if (filter === "todos") return true;
    return professional.type === filter;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-screen bg-gradient-to-b from-[#e6f4f6] to-[#f0f7f8]"
    >
      <div className="w-full max-w-3xl mx-auto p-6 space-y-8">
        {/* Header Section */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#4a148c] to-[#b388ff] text-transparent bg-clip-text">
            Mentalia
          </h1>
          <h2 className="text-2xl text-gray-700 font-medium">Profesionales</h2>
        </motion.div>

        {/* Filter Section */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-white/50 rounded-2xl p-4 shadow-sm"
        >
          <RadioGroup
            value={filter}
            onValueChange={setFilter}
            className="flex flex-wrap gap-3 justify-center"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="todos"
                id="todos"
                className="text-[#4a148c]"
              />
              <Label htmlFor="todos" className="cursor-pointer">
                Todos
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="psicologo"
                id="psicologo"
                className="text-[#4a148c]"
              />
              <Label htmlFor="psicologo" className="cursor-pointer">
                Psicólogos
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="psiquiatra"
                id="psiquiatra"
                className="text-[#4a148c]"
              />
              <Label htmlFor="psiquiatra" className="cursor-pointer">
                Psiquiatras
              </Label>
            </div>
          </RadioGroup>
        </motion.div>

        {/* Professionals Grid */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {filteredProfessionals.map((professional) => (
            <motion.div
              key={professional.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-white hover:bg-white transition-all duration-300 hover:shadow-md p-5">
                <div className="flex gap-4">
                  <div className="relative w-20 h-20 shrink-0 rounded-full bg-[#e9d5ff] overflow-hidden">
                    <Image
                      src={professional.image}
                      alt={professional.name}
                      layout="fill"
                      className="rounded-full object-cover"
                    />
                  </div>

                  <div className="flex-1 space-y-2">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {professional.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {professional.profession} • {professional.location}
                      </p>
                    </div>

                    <div className="flex gap-2">
                    <Dialog>
  <DialogTrigger asChild>
    <Button
      variant="outline"
      size="sm"
      className="bg-[#e9d5ff] hover:bg-[#dbb8ff] border-none text-[#4a148c]"
    >
      Ver Info
    </Button>
  </DialogTrigger>
  <DialogContent className="p-6 bg-white rounded-lg shadow-xl max-w-md mx-auto">
    <DialogHeader>
      <DialogTitle className="text-2xl font-bold text-[#4a148c]">
        {professional.name}
      </DialogTitle>
      <p className="text-sm text-gray-500">{professional.profession} • {professional.location}</p>
    </DialogHeader>
    <div className="mt-4 space-y-4">
      <p className="text-gray-800 leading-relaxed">
        <strong>Biografía:</strong> {professional.biography}
      </p>
      <p className="text-gray-800">
        <strong>Especializaciones:</strong>{" "}
        <span className="text-gray-600">
          {professional.specializations.join(", ")}
        </span>
      </p>
      <p className="text-gray-800">
        <strong>Experiencia:</strong>{" "}
        <span className="text-gray-600">{professional.experience}</span>
      </p>
      <div className="bg-[#f3e5f5] rounded-lg p-4">
        <p className="text-gray-800">
          <strong>Contacto:</strong>{" "}
          <a
            href={`mailto:${professional.contact}`}
            className="text-[#4a148c] hover:underline"
          >
            {professional.contact}
          </a>
        </p>
      </div>
    </div>
    
  </DialogContent>
</Dialog>


                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-[#4a148c] hover:bg-[#6a1b9a] text-white border-none"
                      >
                        Contactar
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results Message */}
        {filteredProfessionals.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-center py-10"
          >
            <p className="text-gray-500">
              No se encontraron profesionales para esta categoría.
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
