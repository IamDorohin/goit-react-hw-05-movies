import {
  MovieInfoSection,
  MovieInfoImage,
  MovieDescription,
  MovieInfoTitle,
  MovieInfoVotes,
  MovieInfoOverview,
  MovieInfoList,
  MovieInfoItem,
} from 'components/MovieCard/MovieInfo/MovieInfo.styled';

const MovieInfo = ({ currentMovieInfo }) => {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    currentMovieInfo;

  if (!genres) {
    return null;
  }

  return (
    <MovieInfoSection>
      <MovieInfoImage
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        wigth="350"
        height="500"
        alt={title}
      />
      <MovieDescription>
        <MovieInfoTitle>
          {title} ({release_date.slice(0, 4)})
        </MovieInfoTitle>
        <MovieInfoVotes>User score: {vote_average} </MovieInfoVotes>
        <h2>Overview:</h2>
        <MovieInfoOverview>{overview}</MovieInfoOverview>
        <h3> Genres:</h3>
        <MovieInfoList>
          {genres.map(genre => (
            <MovieInfoItem key={genre.id}>{genre.name}</MovieInfoItem>
          ))}
        </MovieInfoList>
      </MovieDescription>
    </MovieInfoSection>
  );
};

export default MovieInfo;
