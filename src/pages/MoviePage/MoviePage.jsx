import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import MovieList from '../../components/MovieList';
import SearchForm from '../../components/SearchForm/';
import { getMovieBySearch } from '../../shared/services/API';

const MoviePage = () => {
  const [movies, setMovies] = useState({
    items: [],
    loading: false,
    error: null,
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    const fetchMovies = async () => {
      setMovies(prevState => ({ ...prevState, loading: true }));
      try {
        const result = await getMovieBySearch(query);
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
    if (query) {
      fetchMovies();
    }
  }, [query]);

  const onSubmit = ({ query }) => setSearchParams({ query });

  return (
    <>
      <SearchForm onSubmit={onSubmit} />
      <MovieList items={movies.items} />
    </>
  );
};

export default MoviePage;
