import { useLocation, useNavigate } from 'react-router-dom';

import styles from './backButton.module.css';

const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from || '/';
  const goBack = () => navigate(from);

  return (
    <button type="button" onClick={goBack} className={styles.btn}>
      {' '}
      Go Back{' '}
    </button>
  );
};

export default BackButton;
