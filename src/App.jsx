import { useState } from 'react'
import './App.css'
import { peliculas } from './peliculas'
import { getFilms } from './utils/getFilms'

function App() {

  const [films, setFilms] = useState([])
  const baseUrl = "https://image.tmdb.org/t/p/w500"

  async function recommend() {
    try {
      setFilms(await getFilms())
    } catch (err) {
      console.error(err)
    }
  }

  console.log(films)

  return (
    <div className='container'>
      <div>
        <h2>¿Que vemos hoy?</h2>
        <button onClick={() => recommend()}>Recomendar</button>
      </div>
      <div>
        <div className='film'>
          {films.title}
          <img src={baseUrl+films.poster_path} alt={films.title} width='400'/>
        </div>
      </div>
    </div>
  )
}

export default App
