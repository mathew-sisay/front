import Carousel from 'react-bootstrap/Carousel';

function Carouselfade() {
  return (
    <Carousel variant="white" >
      <Carousel.Item>
        <img
          className="d-block w-100 "
          height="600"
          src="/images/2.jpg"
          alt="First slide"
        />
        <Carousel.Caption >
         
          <h1 class='car' >Fisher Digital</h1>
          <p className='par'>Nulla vitae elit libero, a pharetra vitae elit libero, a pharetra</p>
          <p className='par'>Nulla vitae elit libero, a pharetra vitae elit libero, a pharetra</p>
          <p className='par'>Nulla vitae elit libero, a pharetra vitae elit libero, a pharetra</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height="600"
          src="/images/1.jpg"
          alt="Second slide"
        />
        <Carousel.Caption >
      
        <h1 class='car' >Fisher Digital</h1>
          <p className='par'>Nulla vitae elit libero, a pharetra vitae elit libero, a pharetra</p>
          <p className='par'>Nulla vitae elit libero, a pharetra vitae elit libero, a pharetra</p>
          <p className='par'>Nulla vitae elit libero, a pharetra vitae elit libero, a pharetra</p>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height="600"
          src="/images/2.jpg"
          alt="Third slide"
        />
         <Carousel.Caption >
         <h1 class='car' >Fisher Digital</h1>
          <p className='par'>Nulla vitae elit libero, a pharetra vitae elit libero, a pharetra</p>
          <p className='par'>Nulla vitae elit libero, a pharetra vitae elit libero, a pharetra</p>
          <p className='par'>Nulla vitae elit libero, a pharetra vitae elit libero, a pharetra</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carouselfade;