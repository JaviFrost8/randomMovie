export async function getFilms(){
  

  try{

    const randomPage = Math.floor(Math.random() * 500)
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&include_adult=false&with_poster=true&language=es-ES&page=${randomPage}&sort_by=popularity.desc`, {
      method: 'GET',
      headers: {
       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjE0YzFhZDk1NzM1N2E5NzU5NmYzNDRmNzg0OTJhMCIsIm5iZiI6MTczMzMwNTQ4Mi44MDMsInN1YiI6IjY3NTAyNDhhYTkzYmRlYThjMjUwOTgzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.41oQjmoK08Oisql8JHoHwoyjV9g1r0Vfx4raVSWgnrc',
       accept: 'application/json'
      }
    })

    const data = await res.json()
    const index = Math.floor(Math.random() * data.results.length)
    
    return data.results[index]

  }catch(err){
    console.log(err)
  }
}