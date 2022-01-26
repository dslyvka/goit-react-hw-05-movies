import './App.css';
import { lazy, Suspense, useState } from 'react';
// const MyComponent = lazy(() => import('./MyComponent'));

import { Routes, Route } from 'react-router-dom';
const Home = lazy(() => import('./components/Home/Home'));
const Navigation = lazy(() => import('./components/Navigation/Navigation'));
const Movies = lazy(() => import('./components/Movies/Movies'));
const Movie = lazy(() => import('./components/Movies/Movie'));
const Cast = lazy(() => import('./components/Cast/Cast'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));

function App() {
  const [path, setPath] = useState('');
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Navigation />
        <Routes>
          <Route path="/" exact element={<Home setPath={setPath} />}></Route>

          <Route path="/movies" exact element={<Movies setPath={setPath} />} />
          <Route path="/movies/:filmId" element={<Movie path={path} />}>
            <Route path="/movies/:filmId/cast" element={<Cast />} />
            <Route path="/movies/:filmId/reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
