import { Link } from 'react-router-dom';

export default function HomeItem({ title, path }) {
  return title ? (
    <>
      <li>
        <Link to={`movies/${path}`}>{title}</Link>
      </li>
      <hr />
    </>
  ) : (
    <></>
  );
}
