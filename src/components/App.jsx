import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Header from './Header';

const HomePage = lazy(() => import('../pages/HomePage'));
const MoviePage = lazy(() => import('../pages/MoviePage'));
const AboutMoviePage = lazy(() => import('../pages/AboutMoviePage'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<p>...loading</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/movies/:id" element={<AboutMoviePage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </div>
  );
};
