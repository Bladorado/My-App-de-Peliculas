import { fetchPeli, fetchPeliTrailer } from "@/lib/apipeli";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const peli = await fetchPeli(id);
  return {
    title: `Películas | ${peli.title}`
  };
}

export default async function FichaPelicula({ params }) {
  const { id } = await params;
  const peli = await fetchPeli(id);
  const trailer = await fetchPeliTrailer(id);

  // Formateo de datos
  const rating = Math.round(peli.vote_average * 10) / 10;
  const stars = Math.round(peli.vote_average / 2);
  const year = peli.release_date?.slice(0, 4);
  const runtime = peli.runtime 
    ? `${Math.floor(peli.runtime / 60)}h ${peli.runtime % 60}min` 
    : null;

  return (
    <div className="max-w-5xl mx-auto my-10 overflow-hidden rounded-lg border border-white/30 bg-slate-800/40 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-1 ring-white/10">

      {/* BARRA DE TÍTULO DE VENTANA */}
      <div className="h-9 bg-gradient-to-b from-white/20 to-transparent flex items-center justify-between px-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="text-xs text-blue-100 font-medium drop-shadow-md">
            Detalles de la película
          </span>
        </div>
        <Link href="/">
          <div className="flex gap-2">
            <div className="w-4 h-4 rounded-sm bg-white/10 border border-white/20 flex items-center justify-center text-[10px] text-white">_</div>
            <div className="w-4 h-4 rounded-sm bg-red-500/60 border border-white/20 flex items-center justify-center text-[10px] text-white">X</div>
          </div>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row p-8 gap-8 relative">
        {/* Brillo reflectante diagonal */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>

        {/* POSTER */}
        <div className="flex-shrink-0 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
          {peli.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${peli.poster_path}`}
              alt={peli.title}
              className="relative rounded-md border border-white/20 w-full md:w-[300px] shadow-2xl object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="relative rounded-md border border-white/20 w-full md:w-[300px] h-[450px] bg-gradient-to-b from-slate-700 to-slate-900 flex items-center justify-center">
              <span className="text-zinc-500 text-sm">Sin imagen</span>
            </div>
          )}
        </div>

        {/* INFORMACIÓN */}
        <div className="flex flex-col gap-4 z-10 flex-1">
          <div>
            <h1 className="text-4xl font-bold text-white drop-shadow-md tracking-tight italic">
              {peli.title}
            </h1>
            <div className="h-1 w-20 bg-cyan-500 mt-2 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]"></div>
          </div>

          {/* Tagline (si existe) */}
          {peli.tagline && (
            <p className="text-cyan-300/70 text-sm italic">
              &ldquo;{peli.tagline}&rdquo;
            </p>
          )}

          {/* Sinopsis */}
          {peli.overview && (
            <div className="bg-black/20 p-4 rounded border border-white/5 backdrop-blur-sm">
              <p className="text-blue-100/90 leading-relaxed text-sm">
                {peli.overview}
              </p>
            </div>
          )}

          {/* Metadatos mejorados */}
          <div className="flex flex-wrap gap-4 mt-2">
            {/* Rating con estrellas */}
            {peli.vote_count > 0 && (
              <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-b from-slate-700 to-slate-900 rounded border border-white/10 shadow-inner">
                <span className="text-yellow-400 text-sm">
                  {"★".repeat(stars)}{"☆".repeat(5 - stars)}
                </span>
                <span className="text-white font-mono text-sm">{rating}</span>
              </div>
            )}

            {/* Año */}
            {year && (
              <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-b from-slate-700 to-slate-900 rounded border border-white/10 shadow-inner">
                <span className="text-cyan-400 text-sm">📅</span>
                <span className="text-white font-mono text-sm">{year}</span>
              </div>
            )}

            {/* Duración */}
            {runtime && (
              <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-b from-slate-700 to-slate-900 rounded border border-white/10 shadow-inner">
                <span className="text-purple-400 text-sm">⏱️</span>
                <span className="text-white font-mono text-sm">{runtime}</span>
              </div>
            )}
          </div>

          {/* Géneros */}
          {peli.genres?.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {peli.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="px-3 py-1 bg-slate-700/50 border border-white/20 text-zinc-300 text-xs font-medium rounded-full"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          )}

          {/* TRÁILER (responsive y con fallback) */}
          <div className="mt-2">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-cyan-400/70 mb-2">
              Tráiler oficial
            </h3>
            {trailer?.key ? (
              <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-lg border border-white/20">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${trailer.key}?rel=0&modestbranding=1`}
                  title={`Tráiler de ${peli.title}`}
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="w-full h-[200px] bg-black/40 rounded-lg border border-white/10 flex items-center justify-center">
                <p className="text-zinc-500 text-sm">No hay tráiler disponible</p>
              </div>
            )}
          </div>

          {/* BOTÓN ATRÁS (corregido sin button anidado) */}
          <div className="mt-auto pt-6 flex justify-between">
            <Link
              href="/"
              className="group relative px-8 py-2 overflow-hidden rounded-md bg-gradient-to-b from-slate-200 to-slate-400 text-slate-900 font-bold border border-slate-600 shadow-lg active:translate-y-0.5 transition-all inline-block"
            >
              <div className="absolute top-0 left-0 w-full h-1/2 bg-white/40 skew-y-[-2deg]"></div>
              <span className="relative flex items-center gap-2">
                <span className="group-hover:-translate-x-1 transition-transform">◀</span>
                Regresar a Biblioteca
              </span>
            </Link>
            <Link
              href="/Buscar"
              className="group relative px-8 py-2 overflow-hidden rounded-md bg-gradient-to-b from-slate-200 to-slate-400 text-slate-900 font-bold border border-slate-600 shadow-lg active:translate-y-0.5 transition-all inline-block"
            >
              <div className="absolute top-0 left-0 w-full h-1/2 bg-white/40 skew-y-[-2deg]"></div>
              <span className="relative flex items-center gap-2">
                <span className="group-hover:-translate-x-1 transition-transform">◀</span>
                Regresar al Buscador
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Barra de estado inferior */}
      <div className="h-6 bg-black/30 border-t border-white/5 px-4 flex items-center">
        <span className="text-[10px] text-blue-300/50 uppercase tracking-[0.2em]">
          Windows Media Details Panel
        </span>
      </div>
    </div>
  );
}