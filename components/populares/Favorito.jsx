"use client";

import { useFavoritos } from "@/store/useFavoritosStore";

export default function Favorito({ peliData }) { // ← Recibir peliData como prop

  const toggleFavorito = useFavoritos((state) => state.toggleFavorito);
  const isFav = useFavoritos((state) => state.esFavorito(peliData.id));

  return (
    <div className="bg-black/60 backdrop-blur-sm p-2 rounded-full hover:scale-110 transition-transform duration-200 cursor-pointer">
      <svg
        className="w-5 h-5 text-white fill-none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        onClick={() => toggleFavorito(peliData)} // ← Usar toggle del contexto
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          className={`hover:fill-red-500/45 transition-colors ease-in-out duration-300 active:fill-red-500 ${isFav ? "fill-red-500" : "fill-red-500/10"
            }`}
        />
      </svg>
    </div>
  );
}