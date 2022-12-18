import CarouselComponent from "../Components/CarouselComponent";
import MovieComponent from "../Components/MovieComponent";

function Home() {
  return (
    <div>
      <CarouselComponent />
      <MovieComponent pagesize={20} />
    </div>
  );
};

export default Home;
