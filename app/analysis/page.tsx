import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AnalysisPage() {
  return (
    <div className="flex min-h-screen bg-[#e6f4f6] p-4">
      <Card className="w-full max-w-md mx-auto overflow-hidden shadow-lg">
        <CardContent className="p-6 space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Mentalia</h1>
            <h2 className="text-xl mt-2">Análisis</h2>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground">
              Recuerda que esta es solo una guía preliminar basada en tus
              respuestas. Para obtener un diagnóstico adecuado y recibir el
              tratamiento que necesitas, es esencial que hables con un psicólogo
              u otro profesional de la salud mental.
            </p>
          </div>

          <Button className="w-full bg-[#4a148c] hover:bg-[#6a1b9a] text-white py-6 rounded-lg">
            COMENZAR ANALISIS
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
