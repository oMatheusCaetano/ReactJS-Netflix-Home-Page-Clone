import React from 'react';
import './styles.css';

export default function FeaturedMovie({movie}) {
  const releaseDate = new Date(movie.first_air_date);
  const genres = movie.genres.map(genre => genre.name);


  return (
    <section
      className="featured"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{movie.original_name}</div>
          <div className="featured--info">
            <div className="featured--points">{movie.vote_average} pontos</div>
            <div className="featured--year">{releaseDate.getFullYear()}</div>
            <div className="featured--seasons">
              {movie.number_of_seasons} {movie.number_of_seasons < 2 ? 'temporada' : 'temporadas'}
            </div>
          </div>
          <div className="featured--description">{movie.overview}</div>
          <div className="featured--buttons">
            <a href="#">▶ Assistir</a>
            <a href="#">+ Minha Lista</a>
          </div>
          <div className="featured--genres">
            <strong>Gêneros: </strong>{genres.join(', ')}
          </div>
        </div>
      </div>
    </section>
  );
}
