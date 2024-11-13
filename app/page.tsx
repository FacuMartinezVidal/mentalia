import {
  Brain,
  HelpCircle,
  LightbulbIcon,
  LineChart,
  Users,
} from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Component() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50">
      <Card className="w-full max-w-md overflow-hidden bg-[#e6f4f6] h-screen flex flex-col">
        <CardContent className="p-4 overflow-y-auto flex-1">
          <div className="space-y-4">
            <div className="text-center">
              <h1 className="text-2xl font-bold">Mentalia</h1>
              <h2 className="mt-2 text-xl">Te damos la bienvenida Martina!</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Estás tomando un buen paso hacia tu bienestar
                <br />
                al buscar respuestas!
              </p>
            </div>

            <div className="flex justify-center">
              <div className="relative h-32 w-32">
                <Image
                  src="/placeholder.svg"
                  alt="Brain mascot"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
            </div>

            <div className="text-center text-sm">
              <p className="font-semibold">Mentalia</p>
              <p className="mt-2 text-muted-foreground">
                es una plataforma que busca acompañarte en tus procesos
                internos, un medio de apoyo para transitar aquello que
                necesites, y sobre todo, para darte herramientas de ayuda.
                Esperamos realmente contribuir a tu salud mental
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">
                Cuéntanos un poco sobre ti
              </h3>
              <div className="space-y-4 rounded-lg bg-[#bff0e9] p-4">
                <div>
                  <label className="text-sm font-medium">
                    Cuáles son tus pasatiempos favoritos?
                  </label>
                  <Input className="mt-1 bg-white" placeholder="escribe aquí" />
                </div>
                <div>
                  <label className="text-sm font-medium">
                    Cómo te has sentido últimamente?
                  </label>
                  <Input className="mt-1 bg-white" placeholder="escribe aquí" />
                </div>
                <div>
                  <label className="text-sm font-medium">
                    Qué actividades te ayudan a relajarte?
                  </label>
                  <Input className="mt-1 bg-white" placeholder="escribe aquí" />
                </div>
                <div>
                  <label className="text-sm font-medium">
                    Tienes alguna meta personal que te gustaría alcanzar?
                  </label>
                  <Input className="mt-1 bg-white" placeholder="escribe aquí" />
                </div>
                <div>
                  <label className="text-sm font-medium">
                    Con quién sueles hablar cuando necesitas apoyo?
                  </label>
                  <Input className="mt-1 bg-white" placeholder="escribe aquí" />
                </div>
                <div>
                  <label className="text-sm font-medium">
                    Qué te motivó a buscar apoyo en Mentalia?
                  </label>
                  <Input className="mt-1 bg-white" placeholder="escribe aquí" />
                </div>
              </div>
              <Button className="w-full bg-[#4a9e90] text-white hover:bg-[#3d8276]">
                Enviar
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
