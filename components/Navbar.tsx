import {
  Brain,
  HelpCircle,
  LightbulbIcon,
  LineChart,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Navbar() {
  return (
    <div className="border-t bg-white">
      <div className="flex justify-around p-2">
        <Link href="/advices">
          <Button
            variant="ghost"
            className="flex flex-col items-center gap-1 h-auto py-2"
          >
            <LightbulbIcon className="h-5 w-5" />
            <span className="text-xs">Consejos</span>
          </Button>
        </Link>
        <Link href="/analysis">
          <Button
            variant="ghost"
            className="flex flex-col items-center gap-1 h-auto py-2"
          >
            <LineChart className="h-5 w-5" />
            <span className="text-xs">Análisis</span>
          </Button>
        </Link>
        <Link href="/profile">
          <Button
            variant="ghost"
            className="flex flex-col items-center gap-1 h-auto py-2 text-primary"
          >
            <Brain className="h-5 w-5" />
            <span className="text-xs">Perfil</span>
          </Button>
        </Link>
        <Link href="/help">
          <Button
            variant="ghost"
            className="flex flex-col items-center gap-1 h-auto py-2"
          >
            <HelpCircle className="h-5 w-5" />
            <span className="text-xs">Ayuda</span>
          </Button>
        </Link>
        <Link href="/professionals">
          <Button
            variant="ghost"
            className="flex flex-col items-center gap-1 h-auto py-2"
          >
            <Users className="h-5 w-5" />
            <span className="text-xs">Profesionales</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
