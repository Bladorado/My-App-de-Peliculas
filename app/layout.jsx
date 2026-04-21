import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Windows Media Center - Películas",
  description: "Disfruta de tu biblioteca multimedia",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen bg-[#0b2b4a] overflow-hidden selection:bg-cyan-500/30">
      
          {/* BARRA LATERAL ESTILO "EXPLORADOR DE WINDOWS 7" */}
          <aside className="w-64 flex-shrink-0 sticky top-0 h-screen z-50 
                             bg-gradient-to-r from-white/20 to-white/5 
                             backdrop-blur-xl border-r border-white/30 
                             shadow-[5px_0_15px_rgba(0,0,0,0.2)] flex flex-col">
            
      
            <div className="p-6 flex-1 ">
              {/* Aquí podrías poner un logo de "Media Center" */}
              <Nav />
            </div>

            
          </aside>

          {/* CONTENEDOR PRINCIPAL */}
          <main className="relative flex-1 min-w-0 h-screen overflow-y-auto 
                           bg-gradient-to-br from-transparent via-[#0b2b4a]/50 to-black/40 
                           scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
            <div className="relative z-10">
              {children}
            </div>
          </main>
     
      </body>
    </html>
  );
}