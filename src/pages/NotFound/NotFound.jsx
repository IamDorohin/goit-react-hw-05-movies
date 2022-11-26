import {
  NotFoundSection,
  NotFoundTitle,
  NotFoundDescription,
  NotFoundDiv,
  NotFoundLink,
} from 'pages/NotFound/NotFound.styled';

const NotFound = () => {
  return (
    <main>
      <NotFoundSection>
        <NotFoundTitle>
          It seems that the page you selected does not exist
        </NotFoundTitle>
        <NotFoundDescription>
          But you can watch trending movies on the main page or search for a
          specific movie
        </NotFoundDescription>
        <NotFoundDiv>
          <NotFoundLink to="/">Home</NotFoundLink>
          <NotFoundLink to="/movies">Movies</NotFoundLink>
        </NotFoundDiv>
      </NotFoundSection>
    </main>
  );
};

export default NotFound;
