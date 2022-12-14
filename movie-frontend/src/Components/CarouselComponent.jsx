import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import americanPsychoImage from '../images/americanPsycho.png';
import avatarImage from '../images/avatar.png';
import godfatherImage from '../images/godfather.png';
import wakandaForeverImage from '../images/wakandaForever.png';

function CarouselComponent() {
  return (
    <Carousel className="main-carousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={americanPsychoImage}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>American Psycho</h3>
          <p>
            A wealthy New York City investment banking executive, Patrick Bateman, 
            hides his alternate psychopathic ego from his co-workers and friends as 
            he delves deeper into his violent, hedonistic fantasies..
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={avatarImage}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Avatar</h3>
          <p>
            A paraplegic Marine dispatched to the moon Pandora on a unique mission 
            becomes torn between following his orders and protecting the world he feels
            is his home.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={godfatherImage}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Godfather</h3>
          <p>
          The aging patriarch of an organized crime dynasty in postwar New York City 
          transfers control of his clandestine empire to his reluctant youngest son.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={wakandaForeverImage}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Black Panther: Wakanda Forever</h3>
          <p>
            The people of Wakanda fight to protect their home from intervening 
            world powers as they mourn the death of King T'Challa.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;