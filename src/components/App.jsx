import Home from 'pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { lazy } from 'react';

const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieCard = lazy(() => import('../pages/MovieCard/MovieCard'));
const Cast = lazy(() => import('../components/MovieCard/Cast/Cast'));
const Reviews = lazy(() => import('../components/MovieCard/Reviews/Reviews'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieCard />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
