import React, { useEffect, useState } from 'react'

export const OptionsComponents = ({ onAction }) => {

  const [selectYear, setSelectYear] = useState('')
  const [selectGenre, setSelectGenre] = useState('')

  useEffect(() => {
    onAction(selectYear, selectGenre)

  }, [selectGenre, selectYear])

  return (
    <div className='options'>
      <label htmlFor='year'>Selecciona el año: </label>

      <select
        value={selectYear}
        onChange={(e) => setSelectYear(e.target.value)}
        name='year' 
        id='year'
      >
        <option value='' disabled hidden>-- Elige un año --</option>
        <option value='1950'>50's o menos</option>
        <option value='1960'>60's</option>
        <option value='1970'>70's</option>
        <option value='1980'>80's</option>
        <option value='1990'>90's</option>
        <option value='2000'>2000's</option>
        <option value='2010'>2010's</option>
        <option value='2020'>2020's o más</option>
      </select>

      <label htmlFor='genre'>Selecciona el género: </label>
      
      <select 
        value={selectGenre}
        onChange={(e) => setSelectGenre(e.target.value)}
        name='genre' 
        id='genre'
      >
        <option value='' disabled hidden>-- Selecciona un género --</option>
        <option value='28'>Acción</option>
        <option value='12'>Aventura</option>
        <option value='16'>Animación</option>
        <option value='35'>Comedia</option>
        <option value='80'>Crimen</option>
        <option value='99'>Documental</option>
        <option value='18'>Drama</option>
        <option value='10751'>Familia</option>
        <option value='14'>Fantasía</option>
        <option value='36'>Historia</option>
        <option value='27'>Terror</option>
        <option value='10402'>Música</option>
        <option value='9648'>Misterio</option>
        <option value='10749'>Romance</option>
        <option value='878'>Ciencia Ficción</option>
        <option value='10770'>Película de TV</option>
        <option value='53'>Suspense</option>
        <option value='10752'>Bélica</option>
        <option value='37'>Wester</option>
      </select>
    </div>
  )
}
