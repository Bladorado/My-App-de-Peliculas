import Deshobard from "@/components/Deshobard";
import Pelicula from "@/components/Pelicula";
import Image from "next/image";

export default function HomePopulares() {
  return (
    <div className="w-full">
      <div className=" bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        Banner Hero
        <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent z-10"></div>
          <img
            src="https://image.tmdb.org/t/p/original/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg"
            alt="Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-10 left-0 right-0 text-center z-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              Películas Populares
            </h2>
            <p className="text-gray-200 text-lg max-w-2xl mx-auto px-4">
              Descubre las películas más vistas y mejor valoradas del momento
            </p>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-400  border-l-4 border-red-500 p-4">
          Todas las populares
        </h2>
      </div>
      <main className="w-[1200px]  p-5 bg-gray-300">
        <div className=" ">
          {/* Tarjeta 1 */}
          <Deshobard />

        </div>
      </main>
    </div>


  );
}
