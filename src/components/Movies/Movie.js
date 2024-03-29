import { useState, useEffect } from 'react';
import { fetchMovieById } from '../../services';
import { useParams, NavLink, Outlet, Link } from 'react-router-dom';
import { MovieStyled } from './Movie.styled';

export default function Movie({ path }) {
  const [film, setFilm] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    try {
      fetchMovieById(filmId).then(res => {
        setFilm(res);
        setGenres(res.genres);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  let filmId = useParams().filmId;

  return (
    <>
      <Link to={path} className="back">
        Back
      </Link>
      <article className="movie">
        <MovieStyled>
          <img
            src={`https://image.tmdb.org/t/p/original/${film.poster_path}`}
            alt={film.original_title}
            width={320}
          />
          <div>
            <h2>{film.original_title}</h2>
            <p>User score: {film.vote_average}</p>
            <h3>overview</h3>
            <p>{film.overview}</p>

            <ul>
              <h3>genres</h3>
              {genres.map(genre => {
                return <li key={genre.id}>{genre.name}</li>;
              })}
            </ul>
          </div>
        </MovieStyled>
      </article>
      <hr />
      <h4>Additional information</h4>

      <NavLink to={`/movies/${filmId}/cast`} className="additional">
        Cast
      </NavLink>
      <NavLink to={`/movies/${filmId}/reviews`} className="additional">
        Reviews
      </NavLink>

      <hr />
      <Outlet />
    </>
  );
}
