import Deshobard from "@/components/populares/Deshobard";
import Pelicula from "@/components/populares/Pelicula";
import { consumirApi } from "@/lib/apipeli";
import Image from "next/image";




export default async function HomePopulares() {
  const data = await consumirApi();
  const peliculas = data?.results || [];

  return (
    // Fondo Estilo Windows 7 (Azul Aero)
    <div className="min-h-screen w-full bg-[#0b2b4a] bg-[radial-gradient(circle_at_top,_#1e5799_0%,_#2989d8_50%,_#207cca_51%,_#7db9e8_100%)]">
      
      {/* HEADER / BANNER ESTILO MEDIA CENTER */}
      <div className="relative h-[40vh] md:h-[45vh] overflow-hidden border-b border-white/20">
        {/* Overlay con brillo de cristal */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/40 to-[#0b2b4a] z-10"></div>
        <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px] z-0"></div>
        
        <img
          src="https://image.tmdb.org/t/p/original/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg"
          alt="Banner"
          className="w-full h-full object-cover opacity-60"
        />

        <div className="absolute bottom-12 left-0 right-0 text-center z-20 px-4">
          {/* Título con sombra suave tipo Windows */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Biblioteca de Películas
          </h2>
          <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-4"></div>
          <p className="text-blue-100 text-sm md:text-lg max-w-2xl mx-auto font-light italic">
            "Organiza y disfruta tus videos favoritos"
          </p>
        </div>
      </div>

      {/* BARRA DE HERRAMIENTAS (Toolbar estilo Win7) */}
      <div className="bg-gradient-to-b from-white/20 to-white/5 border-y border-white/10 backdrop-blur-md px-6 py-2 flex items-center gap-4">
        <div className="flex items-center gap-2 text-white/80 text-xs hover:bg-white/10 p-1 rounded transition">
            <span className="w-4 h-4 rounded-full bg-blue-500 border border-white/40 shadow-[0_0_5px_cyan]"></span>
            Organizar
        </div>
        <div className="h-4 w-[1px] bg-white/20"></div>
        <div className="text-white/80 text-xs font-medium italic underline decoration-cyan-400">
            Todas las populares
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL (El "Contenedor" de la biblioteca) */}
      <main className="w-full p-6">
        <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl p-6 ring-1 ring-black/20">
          <Deshobard peliculas={peliculas} />
        </div>
      </main>

      {/* Footer Estilo Barra de Tareas */}
      <footer className="w-full h-10 bg-black/40 backdrop-blur-2xl border-t border-white/20 flex items-center px-6 fixed bottom-0 z-50">
         <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-600 via-green-500 to-yellow-400 border border-white/50 shadow-[0_0_10px_rgba(255,255,255,0.3)] cursor-pointer hover:scale-110 transition"></div>
            <span className="text-white/60 text-[10px] uppercase tracking-widest ml-4">Windows Media Center</span>
         </div>
      </footer>
    </div>
  );
}