import { useState } from 'react'
import './App.css'
import { peliculas } from './peliculas'
import { getFilms } from './utils/getFilms'

function App() {

  const [film, setFilm] = useState(null)
  const baseUrl = "https://image.tmdb.org/t/p/w500"

  async function recommend() {
    try {
      setFilm(await getFilms())
    } catch (err) {
      console.error(err)
    }
  }

  console.log(film)

  return (
    <div className='container'>
      <div>
        <h2>¿Que vemos hoy?</h2>
        <button onClick={() => recommend()}>Recomendar</button>
      </div>
      {film !== null ? (
        <>
      <div>
        <div className='film'>
          {film.title}
          <img src={baseUrl+film.poster_path} alt={film.title} width='400'/>
        </div>
      </div>
        </>
      ) : (
        <>No hay ninguna película recomendada</>
      )}
    </div>
  )
}

export default App
