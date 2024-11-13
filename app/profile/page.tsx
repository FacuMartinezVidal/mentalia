import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen bg-[#e6f4f6]">
      <div className="w-full max-w-2xl mx-auto p-6 space-y-8">
        {/* Header with Profile */}
        <div className="relative mb-24">
          {/* Background Banner */}
          <div className="h-40 bg-[#e9d5ff] rounded-[2rem]" />

          {/* Profile Image Overlay */}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-20">
            <div className="w-40 h-40 bg-[#e6f4f6] rounded-full p-2">
              <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
                <Image
                  src="/placeholder.svg"
                  alt="Profile picture"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
                <span className="text-gray-400 text-sm">Profile picture</span>
              </div>
            </div>
          </div>
        </div>

        {/* Name and Location */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-gray-800">Martina Gomez</h1>
          <p className="text-xl text-gray-600">Madrid, España</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-3 gap-4">
          <Card className="bg-[#e9d5ff] p-4 text-center rounded-[1.5rem]">
            <p className="text-3xl font-bold">7</p>
            <p className="text-gray-600">Días activa</p>
          </Card>
          <Card className="bg-[#e9d5ff] p-4 text-center rounded-[1.5rem]">
            <p className="text-3xl font-bold">12</p>
            <p className="text-gray-600">Ejercicios</p>
          </Card>
          <Card className="bg-[#e9d5ff] p-4 text-center rounded-[1.5rem]">
            <p className="text-3xl font-bold">5</p>
            <p className="text-gray-600">Logros</p>
          </Card>
        </div>

        {/* Personal Information */}
        <Card className="bg-white p-6 rounded-3xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-[#e9d5ff] rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                  stroke="#9333ea"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 21C20 18.8783 19.1571 16.8434 17.6569 15.3431C16.1566 13.8429 14.1217 13 12 13C9.87827 13 7.84344 13.8429 6.34315 15.3431C4.84285 16.8434 4 18.8783 4 21"
                  stroke="#9333ea"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold">Información Personal</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
            <div className="space-y-1">
              <p className="text-gray-500">Email</p>
              <p className="text-gray-700 break-words">
                martina.gomez@email.com
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-gray-500">Teléfono</p>
              <p className="text-gray-700">+34 600</p>
            </div>
            <div className="space-y-1">
              <p className="text-gray-500">Edad</p>
              <p className="text-gray-700">25 años</p>
            </div>
            <div className="space-y-1">
              <p className="text-gray-500">Miembro desde</p>
              <p className="text-gray-700">Enero 2024</p>
            </div>
          </div>
        </Card>

        {/* Progress Section */}
        <Card className="bg-white p-6 rounded-3xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-[#e9d5ff] rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-[#9333ea]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Mi Progreso</h3>
          </div>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#9333ea] rounded-full"></div>
              <span className="text-gray-700">
                7 días consecutivos de meditación
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#9333ea] rounded-full"></div>
              <span className="text-gray-700">
                3 ejercicios de respiración completados
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#9333ea] rounded-full"></div>
              <span className="text-gray-700">
                5 entradas en el diario de gratitud
              </span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
