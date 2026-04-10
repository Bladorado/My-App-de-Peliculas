export default function buscar() {
    return (
        <div className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                {/* Título de página */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-white mb-2">Buscar películas</h1>
                    <p className="text-gray-400">Encuentra tus películas favoritas</p>
                </div>

                {/* Input de búsqueda grande */}
                <div className="mb-8">
                    <div className="relative">
                        {/* Icono de lupa */}
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>

                        <input
                            type="text"
                            placeholder="Título, actor, género..."
                            className="w-full bg-gray-800/80 border border-white/20 rounded-2xl py-4 pl-12 pr-24 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-lg transition"
                        />

                        {/* Botón de búsqueda */}
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-xl font-medium transition">
                                Buscar
                            </button>
                        </div>
                    </div>
                </div>

                {/* Filtros rápidos (opcionales) */}
                <div className="mb-8 flex flex-wrap gap-2">
                    <button className="px-4 py-2 bg-gray-800/50 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition">
                        Todos
                    </button>
                    <button className="px-4 py-2 bg-gray-800/50 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition">
                        Acción
                    </button>
                    <button className="px-4 py-2 bg-gray-800/50 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition">
                        Comedia
                    </button>
                    <button className="px-4 py-2 bg-gray-800/50 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition">
                        Drama
                    </button>
                    <button className="px-4 py-2 bg-gray-800/50 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition">
                        Terror
                    </button>
                    <button className="px-4 py-2 bg-gray-800/50 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition">
                        Ciencia ficción
                    </button>
                </div>

                {/* Resultados de búsqueda */}
                <div>
                    {/* Encabezado de resultados */}
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold text-white">Resultados encontrados: 24</h2>
                    </div>

                    {/* Grid de películas - usando el mismo diseño que populares */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
                        {/* Tarjeta de película 1 */}
                        <div className="group relative bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="relative aspect-[2/3] overflow-hidden">
                                <img
                                    src="https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg"
                                    alt="Película"
                                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                                    <h3 className="text-white font-bold text-sm line-clamp-2">Deadpool & Wolverine</h3>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-yellow-400 text-xs">⭐ 8.5</span>
                                        <span className="text-gray-300 text-xs">2024</span>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-2 right-2 z-10">
                                <div className="bg-black/60 backdrop-blur-sm p-2 rounded-full cursor-pointer">
                                    <svg className="w-5 h-5 text-white fill-none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="p-2 block md:hidden">
                                <h3 className="text-white text-xs font-medium truncate">Deadpool & Wolverine</h3>
                            </div>
                        </div>

                        {/* Tarjeta 2 */}
                        <div className="group relative bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="relative aspect-[2/3] overflow-hidden">
                                <img
                                    src="https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
                                    alt="Película"
                                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                                    <h3 className="text-white font-bold text-sm line-clamp-2">Inside Out 2</h3>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-yellow-400 text-xs">⭐ 8.2</span>
                                        <span className="text-gray-300 text-xs">2024</span>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-2 right-2 z-10">
                                <div className="bg-black/60 backdrop-blur-sm p-2 rounded-full cursor-pointer">
                                    <svg className="w-5 h-5 text-white fill-none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="p-2 block md:hidden">
                                <h3 className="text-white text-xs font-medium truncate">Inside Out 2</h3>
                            </div>
                        </div>

                        {/* Puedes agregar más tarjetas aquí */}
                    </div>

                    {/* Mensaje cuando no hay resultados */}
                    <div className="text-center py-16 hidden">
                        <svg className="w-20 h-20 mx-auto text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-gray-400 text-lg">No se encontraron películas</p>
                        <p className="text-gray-500">Intenta con otro término de búsqueda</p>
                    </div>
                </div>
            </div>
        </div>
    )
}