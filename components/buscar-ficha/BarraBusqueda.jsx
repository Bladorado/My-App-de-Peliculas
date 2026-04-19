"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function BarraBusqueda() {
    
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [texto, setTexto] = useState(searchParams.get("q") ?? "");

    function buscar() {
        if (!texto.trim()) return;
        const params = new URLSearchParams(searchParams);
        params.set("q", texto.trim());
        router.push(`${pathname}?${params.toString()}`);
    }

    return (
        <div className="w-full bg-transparent p-6">
            <div className="max-w-7xl mx-auto">
                
                {/* --- TÍTULO ESTILO WINDOWS --- */}
                <div className="mb-6 ml-2">
                    <h1 className="text-3xl font-light text-white drop-shadow-md">
                        Buscar películas
                    </h1>
                    <div className="h-[1px] w-full bg-gradient-to-r from-white/30 via-transparent to-transparent mt-1"></div>
                </div>

                {/* --- CONTENEDOR DE INPUT (Estilo Search Box de Win 7) --- */}
                <div className="relative group max-w-2xl">
                    {/* El borde exterior con brillo de cristal */}
                    <div className="absolute -inset-[1px] bg-gradient-to-b from-white/50 to-white/10 rounded-sm pointer-events-none"></div>
                    
                    <div className="relative flex items-center bg-white shadow-[inset_0_1px_3px_rgba(0,0,0,0.2)] p-[2px]">
                        
                        {/* Input */}
                        <input
                            type="text"
                            value={texto}
                            onChange={(e) => setTexto(e.target.value)}
                            onKeyDown={(e) => e.key == "Enter" && buscar()}
                            placeholder="Título, actor, género..."
                            className="w-full bg-white py-2 pl-3 pr-12 text-gray-800 placeholder-gray-400 focus:outline-none text-sm italic"
                        />

                        {/* Botón Lupa (El clásico botón azul de Win7) */}
                        <button
                            onClick={buscar}
                            className="absolute right-0 h-full w-10 bg-gradient-to-b from-blue-400 via-blue-600 to-blue-700 border-l border-blue-800 flex items-center justify-center group-hover:brightness-110 transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]"
                        >
                            <svg 
                                className="w-5 h-5 text-white drop-shadow-sm" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={3} 
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                                />
                            </svg>
                            
                            {/* Brillo superior del botón */}
                            <div className="absolute top-0 left-0 w-full h-[50%] bg-white/20 pointer-events-none"></div>
                        </button>

                        {/* Botón Limpiar (X pequeña) */}
                        {texto && (
                            <button 
                                onClick={() => setTexto("")}
                                className="absolute right-12 text-gray-400 hover:text-red-500 font-bold text-xs px-2"
                            >
                                ✕
                            </button>
                        )}
                    </div>
                </div>

                {/* --- PIE DE BÚSQUEDA --- */}
                <p className="text-[11px] text-blue-200/60 mt-2 ml-2 italic tracking-wider">
                    Ingrese los criterios de búsqueda para filtrar la biblioteca local.
                </p>
            </div>
        </div>
    );
}
