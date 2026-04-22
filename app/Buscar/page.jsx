import BarraBusqueda from "@/components/buscar-ficha/BarraBusqueda";
import Pelicula from "@/components/populares/Pelicula";
import { fetchBusqueda } from "@/lib/apipeli";

export const metadata = {
    title: "Windows Media Center | Buscar",
    description: "Streaming de películas",
};

export default async function buscar({ searchParams }) {
    
    const { q } = await searchParams;
    const data = q ? await fetchBusqueda(q) : null;

    return (
        <div className="container mx-auto px-4 py-8">
            <BarraBusqueda />

            {/* Mensaje cuando no hay búsqueda */}
            {!q && (
                <div className="text-center text-zinc-400 mt-20">
                    <p>🔍 Busca una película para comenzar</p>
                </div>
            )}

            {/* Resultados de búsqueda */}
            {q && (
                <div className="mt-8">
                    {/* Título con cantidad de resultados */}
                    <h2 className="text-2xl font-bold text-white mb-6">
                        Resultados para: <span className="text-cyan-400">"{q}"</span>
                        {data?.results && (
                            <span className="text-sm text-zinc-400 ml-2">
                                ({data.results.length} películas encontradas)
                            </span>
                        )}
                    </h2>

                    {/* Grid de películas */}
                    {data?.results?.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                            {data.results.map((pelicula) => (
                                <Pelicula key={pelicula.id} peliData={pelicula} />
                            ))}
                        </div>
                    ) : (
                        // Mensaje cuando no hay resultados
                        <div className="text-center text-zinc-400 mt-10">
                            <p>😕 No se encontraron películas para "{q}"</p>
                            <p className="text-sm mt-2">Prueba con otro término de búsqueda</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}