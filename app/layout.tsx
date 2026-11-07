import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


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
*/