import { fetchTrending } from '../../services';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HomeItem from './HomeItem';

export default function Home({ setPath }) {
  const location = useLocation();

  const [trendingFilms, setTrendingFilms] = useState([]);
  useEffect(() => {
    fetchTrending().then(res => setTrendingFilms([...res.results]));
  }, []);
  useEffect(() => {
    setPath(location.pathname + location.search);
  }, []);

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
