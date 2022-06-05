import { useState, useEffect } from 'react';
import MovieList from '../../components/MovieList';
import { getMovies } from '../../shared/services/API';

import styles from './homePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState({
    items: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    const fetchMovies = async () => {
      setMovies(prevState => ({ ...prevState, loading: true }));
      try {
        const result = await getMovies();
        setMovies(prevState => ({
          ...prevState,
          loading: false,
          items: result,
        }));
      } catch (error) {
        setMovies(prevState => ({
          ...prevState,
          loading: false,
          error: error.message,
        }));
      }
    };
    fetchMovies();
  }, []);

  const { items, loading, error } = movies;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Trending today</h2>
      {loading && <p>...loading</p>}
      {error && <p>{error}</p>}
      <MovieList items={items} />
    </div>
  );
};

export default HomePage;
