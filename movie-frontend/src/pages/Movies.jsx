import MovieComponent from "../Components/MovieComponent";

function Movies() {
  return (
    <div>
      <h1 className="Movies-header">New movies to check out</h1>
      <MovieComponent pagesize={100} page={0} />
    </div>
  );
};

export default Movies;