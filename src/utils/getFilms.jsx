export async function getFilms(){

  const API_KEY = 'a214c1ad957357a97596f344f78492a0'
  const MAX_PAGES = 500;
  
  try{

    const initialRes = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=1`);

    const initialData = await initialRes.json();
    const totalPages = initialData.total_pages;

    if(!initialData.total_pages) return {error: 'No se puede obtener el número total de páginas'}

    const randomPage = Math.floor(Math.random() * Math.min(totalPages, MAX_PAGES)) + 1;

    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${randomPage}&language=es-ES`);

    const data = await res.json();

    if(!data.results?.length) return {error: "No hay películas en esta página"}

    const index = Math.floor(Math.random() * data.results.length);

    return data.results[index]
    
  }catch(err){
    return {err: 'Error al buscar la película'}
  }
}
 