import Favorito from "./Favorito";

export default function Pelicula({ peliData }) {
    return (
        <div className="w-[300px]  group relative bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="relative aspect-[2/3] overflow-hidden">
                <img
                    src={`https://image.tmdb.org/t/p/w500/${peliData.poster_path}`}
                    alt="Película"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                    <h3 className="text-white font-bold text-sm line-clamp-2">{peliData.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                        <span className="text-yellow-400 text-xs"> {peliData.vote_average} ⭐</span>
                        <span className="text-gray-300 text-xs">Estreno: {peliData.release_date}</span>
                    </div>
                </div>
            </div>

            <div className="absolute top-2 right-2 z-10">
                <Favorito />
            </div>

            <div className="p-2 block md:hidden">
                <h3 className="text-white text-xs font-medium truncate">Título de la película</h3>
            </div>
        </div>
    )
}