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
    location: "Cordoba, Capital",
    image: "/placeholder.svg?height=80&width=80",
    type: "psicologo",
  },
  {
    id: 2,
    name: "Pablo Gomez",
    profession: "Psiquiatra",
    location: "Cordoba, Capital",
    image: "/placeholder.svg?height=80&width=80",
    type: "psiquiatra",
  },
  {
    id: 3,
    name: "Sol Fernandez",
    profession: "Psicóloga",
    location: "Cordoba, Capital",
    image: "/placeholder.svg?height=80&width=80",
    type: "psicologo",
  },
  {
    id: 4,
    name: "Emiliano Gonzalez",
    profession: "Psicólogo",
    location: "Cordoba, Capital",
    image: "/placeholder.svg?height=80&width=80",
    type: "psicologo",
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
                  <div className="w-20 h-20 shrink-0 rounded-full bg-[#e9d5ff] flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-[#4a148c]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
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
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>{professional.name}</DialogTitle>
                          </DialogHeader>
                          {/* Add professional details here */}
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
