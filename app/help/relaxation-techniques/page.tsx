import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function RelaxPage() {
  return (
    <div className="flex min-h-screen bg-[#e6f4f6]">
      <div className="w-full max-w-md mx-auto p-4 space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Mentalia</h1>
          <h2 className="text-xl mt-2">Técnicas de Relajación y Calma</h2>
        </div>

        <div className="space-y-4">
          {/* Breathing Techniques */}
          <Card className="bg-[#e9d5ff] p-4 flex gap-4">
            <div className="w-16 h-16 shrink-0">
              <Image
                src="/placeholder.svg"
                alt="Breathing icon"
                width={64}
                height={64}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Técnicas de Respiración</h3>
              <ul className="text-sm text-gray-700 list-disc pl-4">
                <li>
                  Respiración 4-7-8: Inhala (4s), mantén (7s), exhala (8s)
                </li>
                <li>Respiración diafragmática profunda</li>
                <li>Respiración cuadrada</li>
                <li>Respiración alternada por fosas nasales</li>
                <li>Respiración consciente</li>
              </ul>
            </div>
          </Card>

          {/* Progressive Relaxation */}
          <Card className="bg-[#e9d5ff] p-4 flex gap-4">
            <div className="w-16 h-16 shrink-0">
              <Image
                src="/placeholder.svg"
                alt="Relaxation icon"
                width={64}
                height={64}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Relajación Progresiva</h3>
              <p className="text-sm text-gray-700">
                Técnica que consiste en tensar y relajar diferentes grupos
                musculares:
              </p>
              <ul className="text-sm text-gray-700 list-disc pl-4 mt-2">
                <li>Comienza por los pies y tobillos</li>
                <li>Sigue con piernas y muslos</li>
                <li>Abdomen y pecho</li>
                <li>Brazos y manos</li>
                <li>Cuello y rostro</li>
              </ul>
            </div>
          </Card>

          {/* Mindfulness */}
          <Card className="bg-[#e9d5ff] p-4 flex gap-4">
            <div className="w-16 h-16 shrink-0">
              <Image
                src="/placeholder.svg"
                alt="Mindfulness icon"
                width={64}
                height={64}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Mindfulness</h3>
              <p className="text-sm text-gray-700">
                Ejercicios de atención plena para conectar con el presente:
              </p>
              <ul className="text-sm text-gray-700 list-disc pl-4 mt-2">
                <li>Observación consciente</li>
                <li>Escaneo corporal</li>
                <li>Meditación guiada</li>
                <li>Caminata consciente</li>
              </ul>
            </div>
          </Card>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Recursos de Relajación</h2>
          <p className="text-gray-700">
            Herramientas adicionales para tu práctica diaria:
          </p>

          <Card className="bg-[#e9d5ff] p-4">
            <h3 className="font-semibold mb-2">Música y Sonidos:</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>Sonidos de la naturaleza</li>
              <li>Música instrumental relajante</li>
              <li>Mantras y meditaciones guiadas</li>
              <a
                href="https://open.spotify.com/playlist/YOUR_PLAYLIST_ID"
                className="text-sm text-[#4a148c] hover:underline inline-flex items-center gap-1 mt-1"
              >
                Accede a nuestra playlist de Spotify aquí
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
              </a>
            </ul>
          </Card>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Videos de Meditación Guiada</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/VIDEO_ID_1"
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
