import { useState } from 'react'
import './App.css'
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

  function getVoteByColor(vote){
    if(vote >= 8){
      return 'green'

    }else if(vote >= 5){
      return 'orange'

    }else{
      return 'red'
    }
  }

  console.log(film)

  return (
    <div className='container'>
      <div className='btn-container'>
        <h2>¿Que vemos hoy?</h2>
        <button onClick={() => recommend()}>Recomendar</button>
      </div>
      {film !== null ? (
        <>
          <div>
            <div className='film'>
              <div className='title-container'>
                <p className='title'>{film.title}</p>
                <p className='vote' style={{color: getVoteByColor(film.vote_average)}}>{film.vote_average.toFixed(1)}</p>
              </div>
              <div className='poster-container'>
                <img src={baseUrl + film.poster_path} alt={film.title} width='400' />
                <div className='description'>
                  <p className='title-overview'>{film.title}</p>
                  <p>{film.overview}</p>
                </div>
              </div>
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
