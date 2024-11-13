"use client";

import {
  Brain,
  HelpCircle,
  LightbulbIcon,
  LineChart,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/advices", icon: LightbulbIcon, label: "Consejos" },
    { href: "/analysis", icon: LineChart, label: "Análisis" },
    { href: "/profile", icon: Brain, label: "Perfil" },
    { href: "/help", icon: HelpCircle, label: "Ayuda" },
    { href: "/professionals", icon: Users, label: "Profesionales" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t bg-white/80 backdrop-blur-md">
      <div className="flex justify-around p-2 max-w-xl mx-auto">
        {navItems.map(({ href, icon: Icon, label }) => (
          <Link href={href} key={href} className="w-full">
            <Button
              variant="ghost"
              className={`w-full flex flex-col items-center gap-1 h-auto py-3 px-1 transition-all ${
                pathname === href
                  ? "text-primary bg-primary/10 hover:bg-primary/15"
                  : "hover:bg-gray-100"
              }`}
            >
              <Icon
                className={`h-5 w-5 ${
                  pathname === href ? "stroke-[2.5px]" : ""
                }`}
              />
              <span className="text-xs font-medium">{label}</span>
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}
