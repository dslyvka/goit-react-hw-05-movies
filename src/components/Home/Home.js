import { fetchTrending } from '../../services';
import { useState, useEffect } from 'react';
import HomeItem from './HomeItem';

// console.log(trendingFilms);

export default function Home() {
  const [trendingFilms, setTrendingFilms] = useState([]);
  useEffect(() => {
    fetchTrending().then(res => setTrendingFilms([...res.results]));
  }, []);

  // console.log(trendingFilxms);

  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {trendingFilms.map(film => {
          const { title, id } = film;
          return <HomeItem key={id} title={title} path={id} />;
        })}
      </ul>
    </>
  );
}
