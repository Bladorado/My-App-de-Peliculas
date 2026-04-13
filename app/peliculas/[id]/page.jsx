import Link from "next/link";

async function fetchPeli(idPeli) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${idPeli}?api_key=${process.env.API_KEY}`)
    const data = await res.json()
    console.log(data)
    return data
}


export async function generateMetadata({ params }) {
    const { id } = await params;
    const peli = await fetchPeli(id)
    return {
        title: `Peliculas | ${peli.title}`
    }
}

export default async function FichaPelicula({ params }) {
    const { id } = await params;

    const peli = await fetchPeli(id)

    return (
        <div className="max-w-4xl mx-auto my-10 overflow-hidden rounded-lg border border-white/30 bg-slate-800/40 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-1 ring-white/10">
      
        {/* --- BARRA DE TÍTULO DE VENTANA --- */}
        <div className="h-9 bg-gradient-to-b from-white/20 to-transparent flex items-center justify-between px-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="text-xs text-blue-100 font-medium drop-shadow-md">Detalles de la película</span>
          </div>
          <div className="flex gap-2">
            <div className="w-4 h-4 rounded-sm bg-white/10 border border-white/20 flex items-center justify-center text-[10px] text-white">_</div>
            <div className="w-4 h-4 rounded-sm bg-red-500/60 border border-white/20 flex items-center justify-center text-[10px] text-white">X</div>
          </div>
        </div>
  
        <div className="flex flex-col md:flex-row p-8 gap-8 relative">
          {/* Brillo reflectante diagonal */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
  
          {/* --- POSTER (Estilo Pantalla de Video) --- */}
          <div className="flex-shrink-0 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur opacity-25"></div>
            <img
              src={`https://image.tmdb.org/t/p/w500${peli.poster_path}`}
              alt={peli.title}
              className="relative rounded-md border border-white/20 w-full md:w-[300px] shadow-2xl object-cover"
            />
          </div>
  
          {/* --- INFORMACIÓN (Estilo Formulario Windows) --- */}
          <div className="flex flex-col gap-4 z-10">
            <div>
              <h1 className="text-4xl font-bold text-white drop-shadow-md tracking-tight italic">
                {peli.title}
              </h1>
              <div className="h-1 w-20 bg-cyan-500 mt-2 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]"></div>
            </div>
  
            <div className="bg-black/20 p-4 rounded border border-white/5 backdrop-blur-sm">
              <p className="text-blue-100/90 leading-relaxed text-sm italic">
                {peli.overview}
              </p>
            </div>
  
            <div className="flex flex-wrap gap-4 mt-2">
              {/* Badge Puntuación */}
              <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-b from-slate-700 to-slate-900 rounded border border-white/10 shadow-inner">
                <span className="text-yellow-400 text-sm">⭐</span>
                <span className="text-white font-mono text-sm">{peli.vote_average}</span>
              </div>
  
              {/* Badge Fecha */}
              <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-b from-slate-700 to-slate-900 rounded border border-white/10 shadow-inner">
                <span className="text-cyan-400 text-sm">📅</span>
                <span className="text-white font-mono text-sm">{peli.release_date}</span>
              </div>
            </div>
  
            {/* --- BOTÓN ATRÁS (Estilo Vista Previa) --- */}
            <div className="mt-auto pt-6">
              <Link href="/">
                <button className="group relative px-8 py-2 overflow-hidden rounded-md bg-gradient-to-b from-slate-200 to-slate-400 text-slate-900 font-bold border border-slate-600 shadow-lg active:translate-y-0.5 transition-all">
                  {/* Reflejo brillante del botón */}
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-white/40 skew-y-[-2deg]"></div>
                  <span className="relative flex items-center gap-2">
                    <span className="group-hover:-translate-x-1 transition-transform">◀</span> 
                    Regresar a Biblioteca
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
  
        {/* Barra de estado inferior */}
        <div className="h-6 bg-black/30 border-t border-white/5 px-4 flex items-center">
          <span className="text-[10px] text-blue-300/50 uppercase tracking-[0.2em]">Windows Media Details Panel</span>
        </div>
      </div>
    )
} 
