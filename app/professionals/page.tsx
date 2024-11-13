"use client";

import { useState } from "react";

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
    <div className="flex min-h-screen bg-[#e6f4f6]">
      <div className="w-full max-w-md mx-auto p-4 space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Mentalia</h1>
          <h2 className="text-xl mt-2">Profesionales</h2>
        </div>

        <div className="space-y-4">
          {filteredProfessionals.map((professional) => (
            <Card key={professional.id} className="bg-[#1e3a5f] text-white p-4">
              <div className="flex gap-4">
                <Image
                  src={professional.image}
                  alt={professional.name}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{professional.name}</h3>
                  <p className="text-sm opacity-90">
                    {professional.profession} |{" "}
                    <span className="text-red-500">●</span>{" "}
                    {professional.location}
                  </p>
                  <div className="flex gap-2 mt-3">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="rounded-sm"
                    >
                      Ver Info.
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="rounded-sm"
                    >
                      Contactar
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
