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
      try {
        setReviews(prevState => ({ ...prevState, loading: true }));
        const result = await getMovieReviews(id);
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

  const elements = reviews.items.map(item => (
    <li key={item.id}>
      <p className={styles.author}>Author: {item.author}</p>
      <p>{item.content}</p>
    </li>
  ));

  const { loading, error, items } = reviews;

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Reviews</h3>
      {loading && <p>...loading</p>}
      {error && <p>Sorry, we didn't find info about this film.</p>}
      {items && <ul className={styles.list}>{elements}</ul>}
    </div>
  );
};

export default Reviews;
