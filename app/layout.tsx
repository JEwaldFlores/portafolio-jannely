
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://portafolio-jannely-vp6i.vercel.app"
  ),

  title: "Jannely Ewald | Backend & Full Stack Developer",

  description:
    "Portafolio profesional de Jannely Ewald. Desarrollo backend y full stack, APIs REST, proyectos y soluciones tecnológicas.",

  openGraph: {
    title: "Jannely Ewald | Backend & Full Stack Developer",
    description:
      "Conoce mis proyectos, experiencia y tecnologías en desarrollo backend y full stack.",
    url: "https://portafolio-jannely-vp6i.vercel.app",
    siteName: "Jannely Ewald | Portafolio",
    images: [
      {
        url: "/portafolio.png",
        width: 1200,
        height: 630,
        alt: "Portafolio profesional de Jannely Ewald",
      },
    ],
    type: "website",
    locale: "es_MX",
  },

  twitter: {
    card: "summary_large_image",
    title: "Jannely Ewald | Backend & Full Stack Developer",
    description:
      "Explora mis proyectos de desarrollo backend y full stack.",
    images:["/portafolio.png"],
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}

