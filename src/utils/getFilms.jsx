export async function getFilms(year = '', genre = '') {

  const API_KEY = 'a214c1ad957357a97596f344f78492a0'
  const MAX_PAGES = 500;
  let url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=es-ES&with_overview=true&include_adult=false`

  if (genre) url += `&with_genres=${genre}`

  const yearRanges = {
    '1950': { lte: '1950-12-31' }, // 1950 o anteriores
    '1960': { gte: '1960-01-01', lte: '1969-12-31' }, // 60's
    '1970': { gte: '1970-01-01', lte: '1979-12-31' }, // 70's
    '1980': { gte: '1980-01-01', lte: '1989-12-31' }, // 80's
    '1990': { gte: '1990-01-01', lte: '1999-12-31' }, // 90's
    '2000': { gte: '2000-01-01', lte: '2009-12-31' }, // 2000's
    '2010': { gte: '2010-01-01', lte: '2019-12-31' }, // 2010's
    '2020': { gte: '2020-01-01', lte: `${new Date().getFullYear()}-12-31` } // 2020's hasta el año actual
  };

  if (yearRanges[year]) {
    const range = yearRanges[year];
    if (range.gte) url += `&primary_release_date.gte=${range.gte}`;
    if (range.lte) url += `&primary_release_date.lte=${range.lte}`;
  }

  try {

    const initialRes = await fetch(`${url}&page=1`);

    const initialData = await initialRes.json();
    const totalPages = initialData.total_pages;

    if (!initialData.total_pages) return { error: 'No se puede obtener el número total de páginas' }

    const randomPage = Math.floor(Math.random() * Math.min(totalPages, MAX_PAGES)) + 1;

    const res = await fetch(`${url}&page=${randomPage}`);

    const data = await res.json();

    if (!data.results?.length) return { error: "No hay películas en esta página" }

    const index = Math.floor(Math.random() * data.results.length);

    return data.results[index]

  } catch (err) {
    return { err: 'Error al buscar la película' }
  }
}
