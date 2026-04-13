"use client";
import Link from "next/link";
import Favorito from "./Favorito";

export default function Pelicula({ peliData }) {
  return (
    <div className="w-[300px] group relative bg-[#0a1a2a] border border-white/20 rounded-lg overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all duration-300 ring-1 ring-white/10">

      <div className="absolute top-7 right-2 z-10 drop-shadow-md">
        <Favorito peliData={peliData} />
      </div>
     
      {/* --- BARRA SUPERIOR (Estilo Aero Window) --- */}
      <Link href={`/peliculas/${peliData.id}`}>
        <div className="h-6 bg-gradient-to-b from-white/20 to-transparent flex items-center px-2 justify-between border-b border-white/10">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-white/30"></div>
            <div className="w-2 h-2 rounded-full bg-white/30"></div>
          </div>
          <span className="text-[10px] text-blue-100/70 font-sans tracking-wide uppercase">Windows Media Player</span>
        </div>

        {/* --- CONTENEDOR DE VIDEO (Poster) --- */}
        <div className="relative aspect-[16/10] overflow-hidden bg-black">
          <img
            src={`https://image.tmdb.org/t/p/w500/${peliData.poster_path}`}
            alt={peliData.title}
            className="w-full h-full object-contain group-hover:scale-105 transition duration-700"
          />

          {/* Overlay al hacer hover (Información) */}
          <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="bg-black/60 p-2 rounded border border-white/20 backdrop-blur-sm text-center">
              <p className="text-white text-xs font-bold">{peliData.title}</p>
              <p className="text-blue-300 text-[10px] mt-1">{peliData.vote_average} ⭐</p>
            </div>
          </div>

          {/* Botón Favorito (Esquina superior) */}
        </div>

        {/* --- PANEL DE CONTROLES (Estilo Windows 7) --- */}
        <div className="relative p-3 bg-gradient-to-b from-[#1a3a5a] via-[#0d2137] to-[#050c14] border-t border-white/20">

          {/* Brillo reflectante superior del panel */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/40"></div>

          {/* Barra de progreso ficticia */}
          <div className="w-full h-1.5 bg-black/50 rounded-full mb-3 relative overflow-hidden border border-white/5">
            <div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-blue-600 to-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]"></div>
          </div>

          <div className="flex items-center justify-between gap-2">
            {/* Controles Izquierda */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-gradient-to-b from-gray-400 to-gray-600 flex items-center justify-center border border-black/50 shadow-inner">
                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-white border-b-[4px] border-b-transparent ml-0.5"></div>
              </div>
              <div className="text-[10px] text-blue-200/80 font-mono">00:00 / 02:15</div>
            </div>

            {/* Título Central */}
            <div className="flex-1 px-2">
              <h3 className="text-white text-[11px] font-semibold truncate text-center drop-shadow-md">
                {peliData.title}
              </h3>
            </div>

            {/* Iconos Derecha */}
            <div className="flex items-center gap-2 opacity-70">
              <div className="w-3 h-3 bg-blue-400/50 rounded-sm italic text-[8px] flex items-center justify-center text-white">HD</div>
              <div className="w-4 h-1 bg-white/40 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Efecto Glossy (Brillo de cristal sobre todo el componente) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent"></div>
      </Link>
    </div>
  );
}