/* eslint-disable import/no-anonymous-default-export */
const API_KEY = '68cc3b038be5b9a9bb3752cde0aea58d';
const BASE_URL = 'https://api.themoviedb.org/3/';
const PARAMS = 'language=pt-BR&api_key=' + API_KEY;

const apiFetch = async endpoint => {
  const request = await fetch(BASE_URL + endpoint)
  const json = await request.json();
  return json;
}

export default {
  getHomeList: async () => ([
    {
      slug: 'originals',
      title: 'Originais Netflix',
      items: await apiFetch(`discover/tv?with_network=213&${PARAMS}`)
    },
    {
      slug: 'toprated',
      title: 'Recomandados para Você',
      items: await apiFetch(`trending/all/week?${PARAMS}`)
    },
    {
      slug: 'trending',
      title: 'Em Alta',
      items: await apiFetch(`movie/top_rated?${PARAMS}`)
    },
    {
      slug: 'comedy',
      title: 'Comédia',
      items: await apiFetch(`discover/movie?with_genres=35&${PARAMS}`)
    },
    {
      slug: 'horror',
      title: 'Terror',
      items: await apiFetch(`discover/movie?with_genres=27&${PARAMS}`)
    },
    {
      slug: 'romance',
      title: 'Romance',
      items: await apiFetch(`discover/movie?with_genres=10749&${PARAMS}`)
    },
    {
      slug: 'documentary',
      title: 'Documentários',
      items: await apiFetch(`discover/movie?with_genres=99&${PARAMS}`)
    },
  ]),

  getMovieInfo: async (id, type) => {
    if (!id) return null;
    const requestData = `${id}?${PARAMS}`;
    return type === 'movie'
      ? await apiFetch(`movie/${requestData}`)
      : await apiFetch(`tv/${requestData}`);
  }
}
