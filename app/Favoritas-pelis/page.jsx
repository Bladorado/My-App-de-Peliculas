"use client";


import ListaPeli from "@/components/populares/ListaPeli";
import { useFavoritos } from "@/store/useFavoritosStore";

export default function Favoritos() {

  const favoritos = useFavoritos(state => state.favoritos)
  





  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-white mb-2">
        Mis Películas Favoritas
      </h1>
      <p className="text-gray-400 mb-6">
        {favoritos.length} {favoritos.length === 1 ? "película guardada" : "películas guardadas"}
      </p>

      {favoritos.length === 0 ? (
        <div className="text-center py-16 bg-gray-800/30 rounded-xl">
          <svg className="w-20 h-20 mx-auto text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <p className="text-gray-400 text-lg">No tienes películas favoritas</p>
          <p className="text-gray-500">Ve a la página de populares y haz clic en el corazón ❤️</p>
        </div>
      ) : (
        <ListaPeli peliculas={favoritos} />
      )}
    </div>
  );
}