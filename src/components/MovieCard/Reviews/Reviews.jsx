import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../../services/FetchAPI';
import {
  ReviewsSection,
  ReviewsList,
  ReviewsItem,
  ReviewsAuthors,
  ReviewsDescription,
} from 'components/MovieCard/Reviews/Reviews.styled';

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
    <ReviewsSection>
      <ReviewsList>
        {reviews.map(({ id, author, content }) => (
          <ReviewsItem key={id}>
            <ReviewsAuthors>Author: {author}</ReviewsAuthors>
            <ReviewsDescription>{content}</ReviewsDescription>
          </ReviewsItem>
        ))}
      </ReviewsList>
    </ReviewsSection>
  );
};

export default Reviews;
