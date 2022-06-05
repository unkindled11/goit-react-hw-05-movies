import { useState, useEffect } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';

import Info from './Info';
import BackButton from '../../shared/component/BackButton/';

import { getMovieById } from '../../shared/services/API';
import styles from './aboutMoviePage.module.css';

const AboutMoviePage = () => {
  const [movie, setMovie] = useState({
    details: null,
    loading: false,
    error: null,
  });
  const { id } = useParams();

  const location = useLocation();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setMovie(prevState => ({ ...prevState, loading: true }));
        const result = await getMovieById(id);
        setMovie(prevState => ({
          ...prevState,
          details: result,
          loading: false,
        }));
      } catch (error) {
        setMovie(prevState => ({
          ...prevState,
          error: error.message,
          loading: false,
        }));
      }
    };
    fetchMovie();
  }, [id]);

  const { details, loading, error } = movie;

  return (
    <>
      <BackButton />
      {loading && <p>...loading</p>}
      {error && (
        <p>
          Sorry, we don't have info about this film. Please, try again later 🖤
        </p>
      )}
      {details && <Info movie={details} />}
      <Link state={location.state} to="cast" className={styles.link}>
        Cast
      </Link>
      <Link state={location.state} to="reviews" className={styles.link}>
        Reviews
      </Link>
      <Outlet />
    </>
  );
};

export default AboutMoviePage;
