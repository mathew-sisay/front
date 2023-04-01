import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Row, Col, Carousel,Figure, Button}from 'react-bootstrap';
import Carouselfade from '../components/Carouselfade'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'

function Homescreen() {
  return (
    <div>
      
 <Carouselfade />
< br />
<h1 className='px-3'>Fisher digital resources</h1>
<br />
<CardGroup className='mx-3' >
      <Card bg="white" className='mx-3'>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
        <Card.Body>
          <Card.Title >Nova pharma healing to the masses</Card.Title>
          <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Link href="#" className='px-5 '>Ahoon</Card.Link>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      
      <Card bg="white" className='mx-3'>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
        <Card.Body>
          <Card.Title>Ahoon Frieght and Delivery</Card.Title>
          <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Link href="#" className='px-5 '>Card Link</Card.Link>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card bg="white" className='mx-3'>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
        <Card.Body>
          <Card.Title>Sweet Aroma Coffee export and spot</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Link href="#" className='px-5 '>Card Link</Card.Link>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    < br />
    <h1 className='px-5'>Helping solutions</h1>
<p className='px-5 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida mi luctus dui condimentum, sed placerat ex pellentesque. Etiam ut orci mi. Sed ut enim urna. Nullam condimentum tincidunt metus, vel tempor nibh egestas in. Curabitur convallis sollicitudin viverra. Sed sit amet nisi at magna molestie dictum. Quisque ultrices et ex sed accumsan.</p>
    <br />
    <Row className='mx-5'>
      <Col>
    <Card bg="white">
      <Card.Header>Quote</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.{' '}
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
    </Col>

    <Col>
    <Card bg="white">
      <Card.Header>Quote</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.{' '}
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    < br />
    <Carousel variant="white" >
      <Carousel.Item>
        <img
          className="d-block w-50"
          height="250"
          src="/images/2.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 class='hc'>First slide label</h5>
          <p class='pc'>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          height="250"
          src="/images/1.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 class='hc'>Second slide label</h5>
          <p class='pc'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          height="250"
          src="/images/2.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 class='hc'>Third slide label</h5>
          <p calss='pc'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    < br />
    <Row className='mx-5'>
      <Col>
      <Card bg="white" className="text-center ">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary"  >Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    </Col>
    <Col><Card bg="white" className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary" >Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    </Col>
    </Row>
    <br/>
    <section class="testimonials" className='py-3'>
                <div class="inner">
                <h1><span>Testimonials</span></h1>
                <div class="border"></div>
                <div class="test-row">
            <div class="test-column">
                <div class="testmonial">
                    <div class="name">Adugna chombe</div>
                    <div class="stars"> Rating<br></br>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus sequi id ipsa, corrupti minima eveniet accusamus numquam reprehenderit perspiciatis doloribus mollitia quisquam autem aliquam provident asperiores vel, commodi ab aliquid! Laudantium nulla est minima error sed libero commodi? Eveniet sapiente aliquid, quaerat natus voluptatibus inventore nisi perspiciatis cum velit rem?
                    </p>
                </div>
            </div>

            <div class="test-column">
                <div class="testmonial">
                    <div class="name">Eyoul Seifu</div>
                    <div class="stars"> Rating<br></br>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus sequi id ipsa, corrupti minima eveniet accusamus numquam reprehenderit perspiciatis doloribus mollitia quisquam autem aliquam provident asperiores vel, commodi ab aliquid! Laudantium nulla est minima error sed libero commodi? Eveniet sapiente aliquid, quaerat natus voluptatibus inventore nisi perspiciatis cum velit rem?
                    </p>
                </div>
            </div>


            <div class="test-column">
                <div class="testmonial">
                    <div class="name">Alazar Fisseha</div>
                    <div class="stars"> Rating<br></br>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                    
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus sequi id ipsa, corrupti minima eveniet accusamus numquam reprehenderit perspiciatis doloribus mollitia quisquam autem aliquam provident asperiores vel, commodi ab aliquid! Laudantium nulla est minima error sed libero commodi? Eveniet sapiente aliquid, quaerat natus voluptatibus inventore nisi perspiciatis cum velit rem?
                    </p>
                </div>
            </div>

        </div>      
    </div>
    </section>
    <br />
    <AvatarGroup max={4} classname='mx-5'>
  <Avatar alt="Remy Sharp" src="images/1.jpg" />
  <Avatar alt="Travis Howard" src="images/2.jpg" />
  <Avatar alt="Cindy Baker" src="images/1.jpg" />
  <Avatar alt="Agnes Walker" src="images/2.jpg" />
  <Avatar alt="Trevor Henderson" src="images/1.jpg" />
</AvatarGroup>
            
    </div>
  )
}

export default Homescreen