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
    phone: "+54 351 123-4567",
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
    phone: "+54 351 234-5678",
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
    phone: "+54 351 345-6789",
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
    phone: "+54 351 456-7890",
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
      <div className="w-full max-w-2xl mx-auto px-4 py-6 space-y-6">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center mb-6 flex items-center justify-center"
        >
          <div className="flex items-center justify-center">
          <h2 className="text-2xl font-bold text-gray-800 mr-8">
            Profesionales
          </h2>
          <Image
            src="/images/3_profesionales.svg"
            alt="Cerebro ilustrativo"
            width={130}
            height={130}
            className="object-contain"
          />
          </div>
          
        </motion.div>

        {/* Filter Section */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-white/50 rounded-2xl p-4 shadow-sm mb-6"
        >
          <RadioGroup
            value={filter}
            onValueChange={setFilter}
            className="flex justify-between px-2"
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

        {/* Professionals List */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="space-y-4"
        >
          {filteredProfessionals.map((professional) => (
            <motion.div
              key={professional.id}
              initial={{ scale: 1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="bg-white hover:bg-white/80 transition-all duration-300 hover:shadow-md p-5 cursor-pointer group">
                    <div className="flex gap-4">
                      <div className="relative w-16 h-16 shrink-0 rounded-full bg-[#e9d5ff] overflow-hidden">
                        <Image
                          src={professional.image}
                          alt={professional.name}
                          layout="fill"
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h3 className="text-base font-semibold text-gray-800 truncate">
                            {professional.name}
                          </h3>
                          <span className="text-sm text-[#4a148c] font-medium group-hover:text-[#6a1b9a] transition-colors duration-300 whitespace-nowrap">
                            Ver más →
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          {professional.profession} • {professional.location}
                        </p>
                        <p className="text-sm text-gray-500 line-clamp-1">
                          {professional.specializations.join(" • ")}
                        </p>
                      </div>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader className="flex flex-col items-center">
                    <DialogTitle className="text-2xl font-bold text-[#4a148c]">
                      {professional.name}
                    </DialogTitle>
                    <p className="text-sm text-gray-500">
                      {professional.profession} • {professional.location}
                    </p>
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
                      <span className="text-gray-600">
                        {professional.experience}
                      </span>
                    </p>
                    <div className="bg-[#f3e5f5] rounded-lg p-4 space-y-2">
                      <p className="text-gray-800">
                        <strong>Email:</strong>{" "}
                        <a
                          href={`mailto:${professional.contact}`}
                          className="text-[#4a148c] hover:underline"
                        >
                          {professional.contact}
                        </a>
                      </p>
                      <p className="text-gray-800">
                        <strong>Teléfono:</strong>{" "}
                        <a
                          href={`tel:${professional.phone}`}
                          className="text-[#4a148c] hover:underline"
                        >
                          {professional.phone}
                        </a>
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
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
