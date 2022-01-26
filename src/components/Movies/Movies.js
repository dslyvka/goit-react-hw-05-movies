import { onBtnClick } from '../../services';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Form from '../Form/Form';

export default function Movies({ setPath }) {
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);

  useEffect(() => {
    setPath(location.pathname + location.search);
  }, [location]);

  if (location.search !== '' && movies === null) {
    // console.log(location.search.slice(7));
    onBtnClick(location.search.slice(7)).then(res => setMovies(res.results));
  }

  if (movies === null)
    return (
      <>
        <Form
          onBtnClick={onBtnClick}
          setMovies={setMovies}
          navigate={navigate}
          location={location}
          value={value}
          setValue={setValue}
        />
        <h2>Enter the movie title</h2>
      </>
    );

  if (movies.length === 0) {
    return (
      <>
        <Form
          onBtnClick={onBtnClick}
          setMovies={setMovies}
          navigate={navigate}
          location={location}
          value={value}
          setValue={setValue}
        />
        <h2>Enter correct movie title</h2>
      </>
    );
  }
  return (
    <>
      <Form
        onBtnClick={onBtnClick}
        setMovies={setMovies}
        navigate={navigate}
        location={location}
        value={value}
        setValue={setValue}
      />

      {movies.length > 0 &&
        movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
            </li>
          );
        })}
    </>
  );
}
