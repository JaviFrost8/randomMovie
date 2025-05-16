export async function getFilms(year = '', genre = ''){

  const API_KEY = 'a214c1ad957357a97596f344f78492a0'
  const MAX_PAGES = 500;
  let url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=es-ES`

  if(genre) url +=  `&with_genres=${genre}`

  if(year === '1950'){
    url += `&primary_release_date.lte=1950-12-31`

  }else if(year === '1960'){
    url += `&primary_release_date.gte=1960-01-01&primary_release_date.lte=1969-12-31`

  }else if(year === '1970'){
    url += `&primary_release_date.gte=1970-01-01&primary_release_date.lte=1979-12-31`

  }else if(year === '1980'){
    url += `&primary_release_date.gte=1980-01-01&primary_release_date.lte=1989-12-31`

  }else if(year === '1990'){
    url += `&primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31`

  }else if(year === '2000'){
    url += `&primary_release_date.gte=2000-01-01&primary_release_date.lte=2009-12-31`

  }else if(year === '2010'){
    url += `&primary_release_date.gte=2010-01-01&primary_release_date.lte=2019-12-31`

  }else if(year === '2020'){
    url += `&primary_release_date.gte=2020-01-01`
  }
    


  try{

    const initialRes = await fetch(`${url}&page=1`);

    const initialData = await initialRes.json();
    const totalPages = initialData.total_pages;

    if(!initialData.total_pages) return {error: 'No se puede obtener el número total de páginas'}

    const randomPage = Math.floor(Math.random() * Math.min(totalPages, MAX_PAGES)) + 1;

    const res = await fetch(`${url}&page=${randomPage}`);

    const data = await res.json();

    if(!data.results?.length) return {error: "No hay películas en esta página"}

    const index = Math.floor(Math.random() * data.results.length);

    return data.results[index]
    
  }catch(err){
    return {err: 'Error al buscar la película'}
  }
}
 