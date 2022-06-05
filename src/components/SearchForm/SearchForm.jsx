import PropTypes from 'prop-types';
import { useState } from 'react';

import styles from './searchForm.module.css';

const SearchForm = ({ onSubmit }) => {
  const [state, setState] = useState({
    query: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ query: '' });
  };

  return (
    <form action="" onSubmit={handleSubmit} className={styles.form}>
      <input
        value={state.query}
        name="query"
        onChange={handleChange}
        type="text"
        className={styles.input}
      />
      <button type="button" onClick={handleSubmit} className={styles.btn}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
};
