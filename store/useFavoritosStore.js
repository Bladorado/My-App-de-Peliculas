import { create } from "zustand"
import { persist } from 'zustand/middleware';


export const useFavoritos = create
    (persist(
        (set, get) => ({
            favoritos: [], //Estado inicial

            toggleFavorito:(pelicula) => {
                const { favoritos } = get(); //Extraemos solo "favoritos" destructurando
                const exists = favoritos.some(p => p.id === pelicula.id); //Verificamos si ya esta en favoritos

                if(exists){
                    set({favoritos: favoritos.filter(p => p.id !== pelicula.id ) }); // Guardamos todos los "favoritos"
                } else {
                    set({ favoritos: [...favoritos, pelicula]}) // Crea un nuevo array con los favoritos y agrega la nueva pelicula
                }
            },

            esFavorito: (id) => {
                return get().favoritos.some(p => p.id === id); // Acción que verifica si una pelicula es favorita
            },
        }),
        {
            name: "favoritos-storage",
            skipHydration: true, 
        }
    )
    )
