import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import Movies from './components/Movies/Movies';
import Movie from './components/Movies/Movie';
import Cast from './components/Cast/Cast';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/movies" exact element={<Movies />} />
        <Route path="/movies/:filmId" element={<Movie />}>
          <Route path="/movies/:filmId/cast" element={<Cast />} />
          <Route path="/movies/:filmId/reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
