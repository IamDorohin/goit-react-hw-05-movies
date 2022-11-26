const MovieInfo = ({ currentMovieInfo }) => {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    currentMovieInfo;

  if (!genres) {
    return null;
  }

  return (
    <section>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
      <h1>{title}</h1>
      <p>{release_date}</p>
      <p>{vote_average}</p>
      <p>{overview}</p>
      <ul>
        {genres.map(genre => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </section>
  );
};

export default MovieInfo;
