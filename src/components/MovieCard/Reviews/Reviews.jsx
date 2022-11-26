import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../../services/FetchAPI';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId)
      .then(response => setReviews(response.results))
      .catch(error => console.log(error));
  }, [movieId]);

  if (!reviews) {
    return null;
  }

  return (
    <section>
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <p>Author: {author}</p>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Reviews;
