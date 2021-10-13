import { NavLink } from 'react-router-dom';
import './NavBar.scss';

export default function NavBar() {
  return (
    <nav>
      <NavLink
        exact
        to="/"
        className="nav-link"
        activeClassName="nav-link--active"
      >
        Home
      </NavLink>
      <NavLink
        to="/delete"
        className="nav-link"
        activeClassName="nav-link--active"
      >
        Delete
      </NavLink>
      <NavLink
        to="/get"
        className="nav-link"
        activeClassName="nav-link--active"
      >
        Get
      </NavLink>
      <NavLink
        to="/patch"
        className="nav-link"
        activeClassName="nav-link--active"
      >
        Patch
      </NavLink>
      <NavLink
        to="/post"
        className="nav-link"
        activeClassName="nav-link--active"
      >
        Post
      </NavLink>
      <NavLink
        to="/put"
        className="nav-link"
        activeClassName="nav-link--active"
      >
        Put
      </NavLink>
    </nav>
  );
}
