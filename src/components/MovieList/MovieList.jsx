import { Link, useLocation } from 'react-router-dom';

import styles from './movieList.module.css';

const MoviesList = ({ items }) => {
  const location = useLocation();

  const elements = items.map(({ id, title, name }) => (
    <li key={id} className={styles.item}>
      <Link
        state={{ from: location }}
        to={`/movies/${id}`}
        className={styles.link}
      >
        {title ?? name}
      </Link>
    </li>
  ));

  return <ul className={styles.list}>{elements}</ul>;
};

export default MoviesList;

MoviesList.defaultProps = {
  items: [],
};
