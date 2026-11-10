import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Suspense } from "react";
import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sacrament Meeting Planner | Greenville Ward",
  description:
    "Organize and explore sacrament meeting agendas, speakers, hymns, and meeting details for Greenville Ward.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Suspense fallback={null}>
          <Header />
        </Suspense>

        {children}

        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}

/*
Next.js necesita que ese contenido dinámico esté dentro de un límite 
<Suspense> para poder preparar y mostrar el resto de la página 
sin esperar a que termine. Es decir, Next.js puede preparar el resto 
de la página sin bloquearse esperando esos componentes.
title: define el nombre que aparecerá en la pestaña del navegador 
y como título de la página para los buscadores.
description: ofrece un resumen del propósito de la aplicación.
*/