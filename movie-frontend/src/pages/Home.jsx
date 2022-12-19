import CarouselComponent from "../Components/CarouselComponent";
import MovieComponent from "../Components/MovieComponent";


function Home() {
  return (
    <div>
      <CarouselComponent />
      <h2 className="Home-movie-header">New movies to explore</h2>
      <MovieComponent pagesize={10} page={7} />
    </div>
  );
};

export default Home;
