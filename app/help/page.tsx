import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LearnMorePage() {
  return (
    <div className="flex min-h-screen bg-[#e6f4f6]">
      <div className="w-full max-w-md mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#4a148c] to-[#b388ff] text-transparent bg-clip-text">
            Mentalia
          </h1>
        </div>

        {/* Title Section */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-800">
            Conocé más sobre...
          </h2>
          <p className="text-gray-600">
            Selecciona un tema para obtener más información
          </p>
        </div>

        {/* Buttons Grid */}
        <div className="grid gap-4">
          <Link href="/help/depression" className="group">
            <Button className="w-full h-16 bg-[#b388ff] hover:bg-[#9c77e0] justify-between text-xl font-medium rounded-2xl shadow-sm group-hover:shadow-md transition-all duration-200 px-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-lg">😔</span>
                </div>
                Depresión
              </div>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>

          <Link href="/help/anxiety" className="group">
            <Button className="w-full h-16 bg-[#1e3a5f] hover:bg-[#152c4a] justify-between text-xl font-medium rounded-2xl shadow-sm group-hover:shadow-md transition-all duration-200 px-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-lg">😰</span>
                </div>
                Ansiedad
              </div>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>

          <Link href="/help/health-tips" className="group">
            <Button className="w-full h-16 bg-[#4db6ac] hover:bg-[#3d9d94] justify-between text-xl font-medium rounded-2xl shadow-sm group-hover:shadow-md transition-all duration-200 px-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-lg">💡</span>
                </div>
                Tips para tu salud mental
              </div>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>

          <Link href="/help/tca" className="group">
            <Button className="w-full h-16 bg-[#4a148c] hover:bg-[#3a1070] justify-between text-xl font-medium rounded-2xl shadow-sm group-hover:shadow-md transition-all duration-200 px-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-lg">🍽️</span>
                </div>
                TCA
              </div>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>

          <Link href="/help/relaxation-techniques" className="group">
            <Button className="w-full h-16 bg-[#ce93d8] hover:bg-[#ba68c8] justify-between text-xl font-medium rounded-2xl shadow-sm group-hover:shadow-md transition-all duration-200 px-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-lg">🧘‍♀️</span>
                </div>
                Técnicas de relajación
              </div>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Bottom Text */}
        <p className="text-center text-gray-500 text-sm">
          ¿Necesitas ayuda inmediata?
          <Link
            href="/help/emergency"
            className="text-[#4a148c] hover:underline ml-1"
          >
            Contacta con profesionales
          </Link>
        </p>
      </div>
    </div>
  );
}