const key = '6a2ef13a57616b6abb93fc4394172b01';
const trendingQuery = `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`;

const fetchTrending = async () => {
  return await fetch(trendingQuery).then(res => res.json());
};

const fetchMovieById = async id => {
  return await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=6a2ef13a57616b6abb93fc4394172b01&language=en-US`,
  ).then(res => res.json());
};

const fetchCast = async id => {
  return await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=6a2ef13a57616b6abb93fc4394172b01&language=en-US`,
  ).then(res => res.json());
};

const fetchReviews = async id => {
  return await fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=6a2ef13a57616b6abb93fc4394172b01&language=en-US&page=1`,
  ).then(res => res.json());
};

const onBtnClick = async value => {
  return await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=6a2ef13a57616b6abb93fc4394172b01&language=en-US&query=${value}&page=1&include_adult=false`,
  ).then(res => res.json());
};

export { fetchTrending, fetchMovieById, fetchCast, fetchReviews, onBtnClick };
