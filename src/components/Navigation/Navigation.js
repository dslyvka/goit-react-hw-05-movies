import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <>
      <NavLink to="/" className="link" activeclassname="active-link">
        Home
      </NavLink>
      <NavLink to="/movies" className="link" activeclassname="active-link">
        Movies
      </NavLink>
      <hr />
    </>
  );
}
