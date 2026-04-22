import Pelicula from "./Pelicula";


export default function ListaPeli({peliculas}) {

    if (!peliculas || peliculas.length === 0) {
        return (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No hay películas disponibles</p>
          </div>
        );
      }
    
    

    return (
        <div>


            <div className="grid grid-cols-3 items-center gap-2 justify-items-center ">
                {
                    peliculas.map(pelicula => <Pelicula key={pelicula.id} peliData={pelicula} />)
                }
            </div>
        </div>
    )
}