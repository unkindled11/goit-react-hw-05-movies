import { NavLink } from 'react-router-dom';
import './header.css';

const getActiveLink = ({ isActive }) => {
  return isActive ? 'header-link link-active' : 'header-link';
};

const Header = () => {
  return (
    <ul className="header">
      <li>
        <NavLink to="/" className={getActiveLink}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/movies" className={getActiveLink}>
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default Header;
