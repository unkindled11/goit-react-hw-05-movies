import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCredits } from '../../shared/services/API';
import notFound from '../../shared/services/img/notFound.jpg';
import styles from './cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState({
    items: [],
    loading: false,
    error: null,
  });

  const { id } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setCast(prevState => ({ ...prevState, loading: true }));
        const result = await getMovieCredits(id);
        setCast(prevState => ({
          ...prevState,
          items: result.cast,
          loading: false,
        }));
      } catch (error) {
        setCast(prevState => ({
          ...prevState,
          error: error.message,
          loading: false,
        }));
      }
    };
    fetchCast();
  }, [id]);

  const elements = cast.items.map(item => (
    <li key={item.id} className={styles.item}>
      <img
        src={
          item.profile_path
            ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
            : notFound
        }
        alt={item.name}
        width="100"
        height="150"
      />
      <p>{item.name}</p>
      <p>Character: {item.character}</p>
    </li>
  ));

  const { loading, error } = cast;

  return (
    <div className={styles.container}>
      {loading && <p>...loading</p>}
      {error && <p>Sorry, we didn't find info about this film.</p>}

      <h3 className={styles.title}>Cast</h3>
      <ul className={styles.list}>{elements}</ul>
    </div>
  );
};

export default Cast;
