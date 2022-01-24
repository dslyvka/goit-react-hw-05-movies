import { useState, useEffect } from 'react';
import { fetchCast } from '../../services';
import { useParams } from 'react-router-dom';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const filmId = useParams().filmId;

  useEffect(() => {
    fetchCast(filmId).then(res => setCast(res.cast));
  }, []);

  console.log(filmId);
  console.log(cast);
  return (
    <>
      <ul>
        {cast.map(human => {
          return (
            <li key={human.credit_id}>
              <article>
                <img
                  src={`https://image.tmdb.org/t/p/original/${human.profile_path} `}
                  alt={human.name}
                  width="120"
                />
                <h5>{human.name}</h5>
                <p>Character: {human.character}</p>
              </article>
            </li>
          );
        })}
      </ul>
    </>
  );
}
