//Función de llamado a Api para populares
export async function consumirApi() {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
        if (!res.ok) {
            throw new Error(`Error: ${res.status}`);
        }
        const data = await res.json()
        console.log(data)
        return data;
    } catch (error) {
        console.error("Error de petición:", error)
    }
}

//Función de llamado a Api para la ficha de la Pelicula
export async function fetchPeli(idPeli) {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${idPeli}?api_key=${process.env.API_KEY}`)
        if (!res.ok) {
            throw new Error(`Error: ${res.status}`);
        }
        const data = await res.json()
        console.log(data)
        return data;
    } catch (error) {
        console.error("Error de petición:", error)
    }
}

//Función de llamado a Api para el trailer de la Pelicula
export async function fetchPeliTrailer(idPeli) {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${idPeli}?api_key=${process.env.API_KEY}&append_to_response=videos`)
        if (!res.ok) {
            throw new Error(`Error: ${res.status}`);
        }
        const data = await res.json()
        console.log(data)
        const allTrailer = data.videos.results //Array
        //Pilla el priumer trailer que encuentres
        const trailer = allTrailer.find(
            (video) => video.type === "Trailer" && video.site === "YouTube",
        );
        return trailer;
    } catch (error) {
        console.error("Error de petición:", error)
    }
}

//Función de llamado a Api para la barra de búsqueda
export async function fetchBusqueda(query) {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${encodeURIComponent(query)}&languaje=es-ES`);
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        const data = await res.json()
        console.log(data)
        return data;
    } catch (error) {
        console.error("Error de petición:", error)
    }
}