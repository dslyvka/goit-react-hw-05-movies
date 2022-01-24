import { onBtnClick } from '../../services';
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Movies() {
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  if (location.search !== '' && movies === null) {
    console.log(location.search.slice(7));
    onBtnClick(location.search.slice(7)).then(res => setMovies(res.results));
  }

  if (movies === null)
    return (
      <>
        <hr />
        <form
          onSubmit={e => {
            e.preventDefault();
            onBtnClick(value).then(res => setMovies(res.results));
            navigate(`${location.pathname}?query=${value}`, {
              replace: true,
            });
          }}
        >
          <input
            type="text"
            onChange={e => {
              setValue(e.currentTarget.value);
              console.log(e.currentTarget.value);
            }}
          />
          <button type="submit">Search</button>
        </form>
        <hr />
        <h2>Enter the movie title</h2>
      </>
    );

  if (movies.length === 0) {
    return (
      <>
        <hr />
        <form
          onSubmit={e => {
            e.preventDefault();
            onBtnClick(value).then(res => setMovies(res.results));
            navigate(`${location.pathname}?query=${value}`, {
              replace: true,
            });
          }}
        >
          <input
            type="text"
            onChange={e => {
              setValue(e.currentTarget.value);
              console.log(e.currentTarget.value);
            }}
          />
          <button type="submit">Search</button>
        </form>

        <hr />
        <h2>Enter correct movie title</h2>
      </>
    );
  }
  return (
    <>
      <hr />
      <form
        onSubmit={e => {
          e.preventDefault();
          onBtnClick(value).then(res => setMovies(res.results));
          navigate(`${location.pathname}?query=${value}`, {
            replace: true,
          });
        }}
      >
        <input
          type="text"
          onChange={e => {
            setValue(e.currentTarget.value);
            console.log(e.currentTarget.value);
          }}
        />
        <button type="submit">Search</button>
      </form>

      <hr />

      {movies.length > 0 ? (
        movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
            </li>
          );
        })
      ) : (
        <h2>Enter the correct movie title</h2>
      )}
    </>
  );
}
