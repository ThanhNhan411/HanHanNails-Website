import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


function Slider() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-50"
          src='https://hips.hearstapps.com/hmg-prod/images/chrome-nails-1676043152.jpg'
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src="https://images.squarespace-cdn.com/content/v1/58a7d9173e00be9b7ebda63e/1558730852480-58WIIO7U5C9DS2P8Y44X/PinkArrowsLong.jpg?format=2500w"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6alMrFCWJFgOZy5XIQgrwGdmFC2eJA7qDSQ&usqp=CAU"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;