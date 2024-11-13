import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function ConsejosPage() {
  return (
    <div className="flex min-h-screen bg-[#e6f4f6]">
      <div className="w-full max-w-md mx-auto p-4 space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Mentalia</h1>
          <h2 className="text-xl mt-2">Consejos</h2>
        </div>

        <div className="space-y-4">
          {/* Respiración y meditación */}
          <Card className="bg-[#e9d5ff] p-4 flex gap-4">
            <div className="w-16 h-16 shrink-0">
              <Image
                src="/placeholder.svg"
                alt="Meditation icon"
                width={64}
                height={64}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                Respiración y meditación
              </h3>
              <p className="text-sm text-gray-700">
                Mejora tu enfoque y reduce la ansiedad con técnicas de
                respiración y meditación, claves para tu bienestar mental.
              </p>
            </div>
          </Card>

          {/* Ejercicio y movimiento */}
          <Card className="bg-[#e9d5ff] p-4 flex gap-4">
            <div className="w-16 h-16 shrink-0">
              <Image
                src="/placeholder.svg?height=64&width=64"
                alt="Exercise icon"
                width={64}
                height={64}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Ejercicio y movimiento</h3>
              <p className="text-sm text-gray-700">
                Moverte y hacer ejercicio libera endorfinas, elevando tu ánimo y
                ayudando a gestionar el estrés de forma efectiva.
              </p>
            </div>
          </Card>

          {/* Música y sonidos relajantes */}
          <Card className="bg-[#e9d5ff] p-4 flex gap-4">
            <div className="w-16 h-16 shrink-0">
              <Image
                src="/placeholder.svg?height=64&width=64"
                alt="Music icon"
                width={64}
                height={64}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <div>
                <h3 className="text-lg font-semibold">
                  Música y sonidos relajantes
                </h3>
                <p className="text-sm text-gray-700">
                  La música relajante reduce el estrés y promueve la calma,
                  esencial para una mente tranquila.
                </p>
                <a
                  href="https://open.spotify.com/album/4TXwGeSplAFc1PvrEMWX7R?si=r5NHAol3TtmeuaJJbPdmVQ"
                  className="text-sm text-[#4a148c] hover:underline inline-flex items-center gap-1 mt-1"
                >
                  Accede a nuestra playlist de Spotify aquí
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                </a>
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Guía de Meditación</h2>
          <p className="text-gray-700">
            Estos videos te serán de gran ayuda para aprender a meditar por tu
            cuenta!
          </p>

          {/* YouTube video embed */}
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/tYwnSBkc_To"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-xl"
            ></iframe>
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/wWE0A09vJQU"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-xl"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
