import { fetchReviews } from '../../services';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const filmId = useParams().filmId;
  useEffect(() => {
    fetchReviews(filmId).then(res => setReviews(res.results));
  }, []);
  // console.log(reviews);

  return (
    <>
      {/* {if (reviews.length < 1) return <div></div>} */}
      <ul>
        {reviews.length > 0 ? (
          reviews.map(review => {
            // if
            return (
              <li key={review.id}>
                <h4>Author: {review.author}</h4>
                <p>{review.content}</p>
              </li>
            );
          })
        ) : (
          <h2>No reviews yet</h2>
        )}
      </ul>
    </>
  );
}
