import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function TCAPage() {
  return (
    <div className="flex min-h-screen bg-[#e6f4f6]">
      <div className="w-full max-w-md mx-auto p-4 space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Mentalia</h1>
          <h2 className="text-xl mt-2">
            Trastornos de la Conducta Alimentaria
          </h2>
        </div>

        <div className="space-y-4">
          {/* What are Eating Disorders */}
          <Card className="bg-[#e9d5ff] p-4 flex gap-4">
            <div className="w-16 h-16 shrink-0">
              <Image
                src="/placeholder.svg"
                alt="TCA info icon"
                width={64}
                height={64}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">¿Qué son los TCA?</h3>
              <p className="text-sm text-gray-700">
                Los Trastornos de la Conducta Alimentaria son condiciones serias
                que afectan los hábitos alimenticios, pensamientos y
                comportamientos relacionados con la comida, el peso y la imagen
                corporal.
              </p>
            </div>
          </Card>

          {/* Common Symptoms */}
          <Card className="bg-[#e9d5ff] p-4 flex gap-4">
            <div className="w-16 h-16 shrink-0">
              <Image
                src="/placeholder.svg"
                alt="Symptoms icon"
                width={64}
                height={64}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Señales de advertencia</h3>
              <ul className="text-sm text-gray-700 list-disc pl-4">
                <li>Preocupación excesiva por el peso</li>
                <li>Cambios drásticos en los hábitos alimenticios</li>
                <li>Ejercicio compulsivo</li>
                <li>Aislamiento social</li>
                <li>Distorsión de la imagen corporal</li>
              </ul>
            </div>
          </Card>

          {/* Treatment Options */}
          <Card className="bg-[#e9d5ff] p-4 flex gap-4">
            <div className="w-16 h-16 shrink-0">
              <Image
                src="/placeholder.svg"
                alt="Treatment icon"
                width={64}
                height={64}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Opciones de tratamiento</h3>
              <p className="text-sm text-gray-700">
                El tratamiento generalmente incluye un equipo de profesionales:
                psicólogos, nutricionistas y médicos. La recuperación es posible
                con el apoyo y tratamiento adecuados. Es importante buscar ayuda
                profesional lo antes posible.
              </p>
            </div>
          </Card>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Recursos de ayuda</h2>
          <p className="text-gray-700">
            Si necesitas ayuda inmediata, estos recursos están disponibles 24/7:
          </p>

          <Card className="bg-red-50 p-4">
            <h3 className="font-semibold mb-2">Líneas de ayuda:</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>Línea Nacional TCA: 900 850 500</li>
              <li>WhatsApp: +1 234 567 8900</li>
              <li>Emergencias: 911</li>
            </ul>
          </Card>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Videos informativos</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-xl"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
