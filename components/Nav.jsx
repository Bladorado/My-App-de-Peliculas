import Link from 'next/link';
import Image from 'next/image';


export default function Nav() {
  return (
    <nav className="fixed m-auto h-[calc(100vh-20px)]  flex flex-col bg-slate-700/60 backdrop-blur-md rounded-lg shadow-2xl border border-slate-500/50 overflow-hidden font-sans">
      
    {/* --- BARRA SUPERIOR (Tipo Windows 7 Gadgets) --- */}
    <div className="p-3 bg-gradient-to-b from-slate-600/60 to-slate-700/60 flex items-center justify-between border-b border-white/10">
      
      {/* Botones de Navegación y Título */}
      <div className="flex items-center gap-2">
          <button className="w-5 h-5 rounded-full border border-slate-400 flex items-center justify-center bg-slate-500/50 text-slate-200">
              <span className="text-[10px]">‹</span>
          </button>
          <h1 className="text-white/80 text-sm font-light tracking-wide px-3 py-1 bg-slate-500/50 rounded-full border border-white/5 shadow-inner">
              Página 1 de 1
          </h1>
          <button className="w-5 h-5 rounded-full border border-slate-400 flex items-center justify-center bg-slate-500/50 text-slate-200">
              <span className="text-[10px]">›</span>
          </button>
      </div>

      {/* Input de Búsqueda Ficticio */}
     
    </div>

    {/* --- REJILLA DE GADGETS (Tus Links) --- */}
    <div className="flex-1 p-5 aoverflow-y-auto">
      
      {/* Link 1 (Populares) */}
      <Link href="/" className="group flex flex-col items-center justify-center text-center gap-2">
          {/* Contenedor del Icono con Hover */}
          <div className="w-20 h-20 flex items-center justify-center rounded-lg border-2 border-transparent group-hover:bg-slate-300/10 group-hover:border-slate-300/20 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300">
              {/* Icono (Emoji o SVG) */}
              <div className="w-16 h-16 rounded border border-slate-500 bg-slate-800 flex items-center justify-center text-4xl shadow-inner">
                 ✨
              </div>
          </div>
          {/* Tu texto original */}
          <span className="text-blue-100 text-xs font-light tracking-wide opacity-80 group-hover:opacity-100 line-clamp-2 px-1">
              Populares
          </span>
      </Link>
      
      {/* Link 2 (Buscar) */}
      <Link href="/Buscar" className="group flex flex-col items-center justify-center text-center gap-2">
          <div className="w-20 h-20 flex items-center justify-center rounded-lg border-2 border-transparent group-hover:bg-slate-300/10 group-hover:border-slate-300/20 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300">
              <div className="w-16 h-16 rounded border border-slate-500 bg-slate-800 flex items-center justify-center text-4xl shadow-inner">
                 🔍
              </div>
          </div>
          <span className="text-blue-100 text-xs font-light tracking-wide opacity-80 group-hover:opacity-100 line-clamp-2 px-1">
              Buscar
          </span>
      </Link>
      
      {/* Link 3 (Mis Favoritos) */}
      <Link href="/Favoritas-pelis" className="group flex flex-col items-center justify-center text-center gap-2">
          <div className="w-20 h-20 flex items-center justify-center rounded-lg border-2 border-transparent group-hover:bg-slate-300/10 group-hover:border-slate-300/20 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300">
              <div className="w-16 h-16 rounded border border-slate-500 bg-slate-800 flex items-center justify-center text-4xl shadow-inner">
                 ⭐
              </div>
          </div>
          <span className="text-blue-100 text-xs font-light tracking-wide opacity-80 group-hover:opacity-100 line-clamp-2 px-1">
              Mis Favoritos
          </span>
      </Link>
      
    </div>

    {/* --- BARRA INFERIOR --- */}
    <div className="p-3 bg-gradient-to-t from-black/20 to-transparent flex items-center justify-between border-t border-white/5">
      <button className="flex items-center gap-2 text-white/70 text-xs hover:text-cyan-300">
          <span className="w-5 h-5 rounded-full border border-slate-500 bg-slate-600 flex items-center justify-center text-[10px]">▼</span>
          Mostrar detalhes
      </button>
      <span className="text-[10px] text-blue-200/50 font-mono tracking-wider uppercase pr-2">
         {/* Tu texto original */}
         VG v2.0
      </span>
    </div>
  </nav>
  )
}