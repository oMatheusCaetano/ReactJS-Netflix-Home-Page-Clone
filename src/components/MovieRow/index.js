import React, { useState } from 'react';
import './styles.css';

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default function MovieRow({ title, items }) {
  const [scrollX, setScrollX] = useState(0);

  function handleLeftArrow() {
    const scrollCalc = scrollX + Math.round(window.innerWidth / 2);
    const scrollValue = scrollCalc > 0 ? 0 : scrollCalc;
    setScrollX(scrollValue);
  }

  function handleRightArrow() {
    const scrollCalc = scrollX - Math.round(window.innerWidth / 2);
    const moviesListWidth = items.results.length * 150;
    const scrollLimit = window.innerWidth - moviesListWidth;
    const scrollValue = scrollLimit > scrollCalc ? scrollLimit - 90 : scrollCalc;
    setScrollX(scrollValue);
  }

  return (
    <div className="movie-row-component">
      <h2>{title}</h2>
  
      <div className="movieRow--left" onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{fontSize: 50}} />
      </div>
      <div className="movieRow--right" onClick={handleRightArrow}>
        <NavigateNextIcon style={{fontSize: 50}} />
      </div>

      <div className="movieRow--listarea">
        <div
          className="movieRow--list"
          style={{
            marginLeft: scrollX,
            width: items.results.length * 150,
          }}
        >
          {items.results.length > 0  && items.results.map((item, key) => (
            <div className="movieRow--item" key={key}>
              <img
                src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                alt={item.original_title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
