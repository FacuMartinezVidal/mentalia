import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import NoNavbar from "@/components/NoNavbar";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mentalia",
  description: "TPO SEMINARIO",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/icon.png" type="image/png" />
      </head>
      <body className={inter.className}>
        <Providers>
          <main className="flex flex-col min-h-screen max-h-screen overflow-hidden">
            <div className="sticky top-0 bg-[#e6f4f6]/95 backdrop-blur-sm shadow-md z-10">
              <Image
                src="/images/icon.png" // Cambia por la ruta de tu imagen
                alt="Ilustración de bienvenida"
                width={100}
                height={100}
                className="mx-auto"
              />
            </div>
            <div className="flex-1 overflow-y-auto">{children}</div>
            <NoNavbar />
          </main>
        </Providers>
      </body>
    </html>
  );
}
