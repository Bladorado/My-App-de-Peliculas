"use client";

import { createContext, useContext, useState, useEffect } from "react";

// Crear el contexto
const FavoritosContext = createContext();

// Hook personalizado para usar el contexto
export function useFavoritos() {
  const context = useContext(FavoritosContext);
  if (!context) {
    throw new Error("useFavoritos debe usarse dentro de FavoritosProvider");
  }
  return context;
}

// Provider que envuelve toda la app
export function FavoritosProvider({ children }) {
  // Estado para guardar la lista de películas favoritas
  const [favoritos, setFavoritos] = useState([]);
  
  // Estado para saber si ya cargamos los datos del localStorage
  const [cargando, setCargando] = useState(true);

  // Cargar favoritos desde localStorage al iniciar
  useEffect(() => {
    const favoritosGuardados = localStorage.getItem("peliculasFavoritas");
    if (favoritosGuardados) {
      setFavoritos(JSON.parse(favoritosGuardados));
    }
    setCargando(false);
  }, []);

  // Guardar en localStorage cada vez que cambian los favoritos
  useEffect(() => {
    if (!cargando) {
      localStorage.setItem("peliculasFavoritas", JSON.stringify(favoritos));
    }
  }, [favoritos, cargando]);

  // Verificar si una película es favorita
  const esFavorito = (peliId) => {
    return favoritos.some((peli) => peli.id === peliId);
  };

  // Agregar una película a favoritos
  const agregarFavorito = (peliData) => {
    if (!esFavorito(peliData.id)) {
      setFavoritos([...favoritos, peliData]);
    }
  };

  // Eliminar una película de favoritos
  const eliminarFavorito = (peliId) => {
    setFavoritos(favoritos.filter((peli) => peli.id !== peliId));
  };

  // Alternar (agregar/eliminar)
  const toggleFavorito = (peliData) => {
    if (esFavorito(peliData.id)) {
      eliminarFavorito(peliData.id);
    } else {
      agregarFavorito(peliData);
    }
  };

  // Valor que estará disponible en toda la app
  const value = {
    favoritos,
    cargando,
    esFavorito,
    agregarFavorito,
    eliminarFavorito,
    toggleFavorito,
  };

  return (
    <FavoritosContext.Provider value={value}>
      {children}
    </FavoritosContext.Provider>
  );
}