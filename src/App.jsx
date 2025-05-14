import { useState } from 'react'
import './App.css'
import { getFilms } from './utils/getFilms'
import { genres, genresNamesFind } from './utils/genres'
import { GenreComponent } from './components/GenreComponent'

function App() {

  const [film, setFilm] = useState(null)
  const [genresId, setGenresId] = useState([])
  const [genresNames, setGenresNames] = useState([])

  const baseUrl = "https://image.tmdb.org/t/p/w500"

  async function recommend() {
    try {

      const filmData = await getFilms()
      setFilm(filmData)
      setGenresId(filmData.genre_ids)
      const newNamesGenres = genresNamesFind(filmData.genre_ids);
      setGenresNames(newNamesGenres)

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
                <h2 className='title'>{film.title}</h2>
                <h2 className='vote' style={{color: getVoteByColor(film.vote_average)}}>{film.vote_average.toFixed(1)}</h2>
              </div>
              {film.release_date.slice(0, 4)}
              <div className='genre-container'>
                <GenreComponent key={genres.id} genresNames={genresNames} />
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
