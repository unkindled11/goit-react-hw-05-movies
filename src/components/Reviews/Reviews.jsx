import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../shared/services/API';
import styles from './reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState({
    items: [],
    loading: false,
    error: null,
  });

  const { id } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      setReviews(prevState => ({ ...prevState, loading: true }));
      const result = await getMovieReviews(id);
      try {
        setReviews(prevState => ({
          ...prevState,
          items: result.results,
          loading: false,
        }));
      } catch (error) {
        setReviews(prevState => ({
          ...prevState,
          error: error.message,
          loading: false,
        }));
      }
    };
    fetchCast();
  }, [id]);

  const { loading, error, items } = reviews;

  const elements = items.map(({ author, content, id }) => {
    return (
      <li className={styles.item} key={id}>
        <p className={styles.title}>Author: {author}</p>

        <p className={styles.text}>{content}</p>
      </li>
    );
  });

  return (
    <div className={styles.container}>
      {items.length > 0 ? (
        <ul className={styles.list}>{elements}</ul>
      ) : (
        <p>Sorry, we didn't find info about this film.</p>
      )}
      {loading && <p>...loading</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Reviews;
