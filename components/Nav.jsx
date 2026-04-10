import Link from 'next/link'; 
import Image from 'next/image';


export default function Nav(){
    return(
        <nav className="w-64 bg-green-200 text-black p-6 flex flex-col gap-4 h-screen fixed">
        <h2 className="text-2xl font-bold mb-8 text-blue-950">My App de Peliculas</h2>

        {/* Usamos <Link> para navegación instantánea */}
        <Link href="/" className="hover:text-gray-500  transition font-bold">Populares</Link>
        <Link href="/Buscar" className="hover:text-gray-500  transition font-bold">Buscar</Link>
        <Link href="/Favoritas-pelis" className="hover:text-gray-500  transition font-bold">Mis Favoritos</Link>
      

        <div className="mt-auto text-xs text-slate-500">

          {/* <Image
            width="100"
            height={100}
            src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
            alt='Compuatador de Mesa'
            className="rounded-lg shadow-2xl w-sm"
          /> */}

          Peliculas Vitoria-Gasteiz v2.0
        </div>
      </nav>
    )
}