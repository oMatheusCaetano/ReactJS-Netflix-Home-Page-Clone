import React, { useEffect, useState } from 'react';
import TMDB from './tmdb';

import './App.css';

import Header from './components/Header'
import MovieRow from './components/MovieRow'
import FeaturedMovie from './components/FeaturedMovie'

export default function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackedHeader, setBlakedHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      const list = await TMDB.getHomeList();
      await setMovieList(list);

      const originals = list.filter(i => i.slug === 'originals')[0].items.results;
      const randomChosen = Math.floor(Math.random() * originals.length - 1);
      const chosen = originals[randomChosen];
      const chosenInfo = await TMDB.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo)
    }


    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      setBlakedHeader(window.scrollY > 150)
    }

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, []);

  return (
    <div className="home-page">
      <Header blacked={blackedHeader} />

      {featuredData && <FeaturedMovie movie={featuredData} />}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}