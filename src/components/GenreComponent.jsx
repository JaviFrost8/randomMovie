import React from 'react'

export const GenreComponent = ({ genresNames }) => {
  return (
    <>
      {genresNames.map((genre, index) => (
        <ul key={index} className='ul-genre'>
          <li className='li-genre'>{genre}</li>
        </ul>
      ))}
    </>
  )
}
