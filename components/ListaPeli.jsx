import Pelicula from "./Pelicula";



async function consumirApi() {



    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)

    if (!res.ok) return null;

    const data = await res.json()
    console.log(data)

    return data

}

export default async function ListaPeli() {

    const { results } = await consumirApi();

    return (
        <div>


            <div className="grid grid-cols-3 items-center gap-2 justify-items-center ">
                {
                    results.map(p => <Pelicula key={p.id} peliData={p} />)
                }
            </div>
        </div>
    )
}