export default function Form({
  onBtnClick,
  setMovies,
  navigate,
  location,
  value,
  setValue,
}) {
  return (
    <>
      {/* <hr /> */}
      <form
        onSubmit={e => {
          e.preventDefault();
          onBtnClick(value).then(res => setMovies(res.results));
          navigate(`${location.pathname}?query=${value}`, {
            replace: true,
          });
        }}
      >
        <input
          type="text"
          onChange={e => {
            setValue(e.currentTarget.value);
          }}
        />
        <button type="submit">Search</button>
      </form>
      <hr />
    </>
  );
}
