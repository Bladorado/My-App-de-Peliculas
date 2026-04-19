"use client";
import Link from "next/link";
import Image from "next/image";
import Favorito from "./Favorito";

export default function Pelicula({ peliData }) {
  // Procesar datos igual que el original
  const rating = Math.round(peliData.vote_average * 10) / 10;
  const year = peliData.release_date?.slice(0, 4);

  return (
    <div className="w-full max-w-[300px] group relative bg-[#0a1a2a] border border-white/20 rounded-lg overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      
   
      <div className="absolute top-7 right-2 z-20 drop-shadow-md">
        <Favorito peliData={peliData} />
      </div>

      <Link href={`/peliculas/${peliData.id}`} className="block">
        {/* --- BARRA SUPERIOR (Estilo Aero Window) --- */}
        <div className="h-6 bg-gradient-to-b from-white/20 to-transparent flex items-center px-2 justify-between border-b border-white/10">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-white/30"></div>
            <div className="w-2 h-2 rounded-full bg-white/30"></div>
          </div>
          <span className="text-[10px] text-blue-100/70 font-sans tracking-wide uppercase">
            Windows Media Player
          </span>
        </div>

        {/* --- CONTENEDOR DE POSTER --- */}
        <div className="relative aspect-[16/10] overflow-hidden bg-black">
       
          <Image
            src={`https://image.tmdb.org/t/p/w500${peliData.poster_path}`}
            alt={peliData.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
            className="object-cover transition duration-700 group-hover:scale-105"
          />

          {/* Overlay al hacer hover (mejorado) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
            <h3 className="text-white text-sm font-bold line-clamp-2">
              {peliData.title}
            </h3>
            <div className="flex items-center justify-between mt-1">
              {year && (
                <span className="text-blue-200 text-[10px]">{year}</span>
              )}
              {peliData.vote_average > 0 && (
                <span className="flex items-center gap-1 text-[10px]">
                  <span className="text-yellow-400">★</span>
                  <span className="text-white">{rating}</span>
                </span>
              )}
            </div>
            {peliData.overview && (
              <p className="text-blue-100 text-[10px] mt-2 line-clamp-3">
                {peliData.overview}
              </p>
            )}
          </div>
        </div>

        {/* --- PANEL DE CONTROLES --- */}
        <div className="relative p-3 bg-gradient-to-b from-[#1a3a5a] via-[#0d2137] to-[#050c14] border-t border-white/20">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/40"></div>

          {/* Barra de progreso */}
          <div className="w-full h-1.5 bg-black/50 rounded-full mb-3 relative overflow-hidden border border-white/5">
            <div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-blue-600 to-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]"></div>
          </div>

          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-gradient-to-b from-gray-400 to-gray-600 flex items-center justify-center border border-black/50 shadow-inner">
                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-white border-b-[4px] border-b-transparent ml-0.5"></div>
              </div>
              <div className="text-[10px] text-blue-200/80 font-mono">00:00 / 02:15</div>
            </div>

            <div className="flex-1 px-2">
              <h3 className="text-white text-[11px] font-semibold truncate text-center drop-shadow-md">
                {peliData.title}
              </h3>
            </div>

            <div className="flex items-center gap-2 opacity-70">
              <div className="w-3 h-3 bg-blue-400/50 rounded-sm italic text-[8px] flex items-center justify-center text-white">HD</div>
              <div className="w-4 h-1 bg-white/40 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Efecto Glossy */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent"></div>
      </Link>
    </div>
  );
}