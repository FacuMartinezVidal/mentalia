import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function HealthTipsPage() {
  return (
    <div className="flex min-h-screen bg-[#e6f4f6]">
      <div className="w-full max-w-md mx-auto p-4 space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Mentalia</h1>
          <h2 className="text-xl mt-2">Tips para tu Salud Mental</h2>
        </div>

        <div className="space-y-4">
          {/* Daily Routines */}
          <Card className="bg-[#e9d5ff] p-4 flex gap-4">
            <div className="w-16 h-16 shrink-0">
              <Image
                src="/placeholder.svg"
                alt="Routine icon"
                width={64}
                height={64}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Rutinas Diarias</h3>
              <ul className="text-sm text-gray-700 list-disc pl-4">
                <li>Mantén un horario regular de sueño</li>
                <li>Haz ejercicio moderado diariamente</li>
                <li>Come de manera equilibrada</li>
                <li>Toma descansos durante el día</li>
                <li>Limita el uso de redes sociales</li>
              </ul>
            </div>
          </Card>

          {/* Emotional Management */}
          <Card className="bg-[#e9d5ff] p-4 flex gap-4">
            <div className="w-16 h-16 shrink-0">
              <Image
                src="/placeholder.svg"
                alt="Emotional icon"
                width={64}
                height={64}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Manejo Emocional</h3>
              <ul className="text-sm text-gray-700 list-disc pl-4">
                <li>Practica la meditación o mindfulness</li>
                <li>Escribe un diario de gratitud</li>
                <li>Comparte tus sentimientos con otros</li>
                <li>Aprende a decir &quot;no&quot; cuando lo necesites</li>
                <li>Reconoce y acepta tus emociones</li>
              </ul>
            </div>
          </Card>

          {/* Social Connection */}
          <Card className="bg-[#e9d5ff] p-4 flex gap-4">
            <div className="w-16 h-16 shrink-0">
              <Image
                src="/placeholder.svg"
                alt="Social icon"
                width={64}
                height={64}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Conexión Social</h3>
              <p className="text-sm text-gray-700">
                Mantén contacto regular con amigos y familia. Participa en
                actividades grupales, únete a clubes o grupos de interés, y no
                dudes en buscar apoyo cuando lo necesites.
              </p>
            </div>
          </Card>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Recursos Adicionales</h2>
          <p className="text-gray-700">
            Aquí encontrarás contenido que te ayudará a mantener una buena salud
            mental:
          </p>

          <Card className="bg-[#e9d5ff] p-4">
            <h3 className="font-semibold mb-2">Actividades Recomendadas:</h3>
            <ul className="text-sm text-gray-700 space-y-2 list-disc pl-4">
              <li>Yoga y ejercicios de respiración</li>
              <li>Lectura y actividades creativas</li>
              <li>Paseos en la naturaleza</li>
              <li>Hobbies que disfrutes</li>
            </ul>
          </Card>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              Videos de Ejercicios de Relajación
            </h2>
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
