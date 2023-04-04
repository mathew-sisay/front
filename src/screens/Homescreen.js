import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Row, Col, Carousel,Image, Button}from 'react-bootstrap';
import carouselll from '../carouselll'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'


function Homescreen() {
  return (
    <div>
      
      
      {/*<!-- ======= Hero Section ======= -->*/}
  <section id="hero" class="d-flex align-items-center">

    <div class="container">
      <div class="row">
        <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
          <h1>Fisher Digital  </h1>
          <h1> Digitally Yours </h1>
          <h2>Fisher digital is at the forefront of innovation, developing cutting-edge solutions and products to meet the demands of today's digital age.</h2>
          <div class="d-flex justify-content-center justify-content-lg-start">
            <a href="#about" class="btn-get-started scrollto" >Get Started</a>
            
          </div>
        </div>
        <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
          <img src="/images/hero-img.png" class="img-fluid animated" alt="img" />
        </div>
      </div>
    </div>

  </section>      {/*<!-- End Hero -->*/} 


<br />
  {/* <!-- ======= About Us Section ======= --> */}
    <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>About Us</h2>
        </div>

        <div class="row content">
          <div class="col-lg-6">
            <p>
            Fisher digital is a technology company based in Addis Ababa, Ethiopia and it was founded in 2022.
            </p>
            <ul>
              <li><i class="ri-check-double-line"></i> Fisher digital is known for it's innovative products and services, which are designed to meet the needs of modern consumers and businesses.</li>
              <li><i class="ri-check-double-line"></i> Fisher digital tend to be highly competitive, with a focus on staying ahead of the curve and developing new solutions</li>
              <li><i class="ri-check-double-line"></i> Fisher digital is also known for it's strong culture of collaboration and creativity, which often involve teams of talented engineers, designers, and other professionals working together to solve complex problems and create new products and services that can change the world.</li>
            </ul>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0">
            <p>
            The company has revolutionized the technology industry with its innovative startup such as the Ahoon and Fisherpay. Ahoon is known for its sleek and user-friendly designs, as well as its commitment to solve frieght transport problem. The company's service Fisherpay have also made it a major player in the fintech industry.
            </p>
            <a href="#" class="btn-learn-more">Learn More</a>
          </div>
        </div>

      </div>
    </section>
    {/* <!-- End About Us Section --> */}

    {/* <!-- ======= Why Us Section ======= --> */}
    <section id="why-us" class="why-us section-bg">
      <div class="container-fluid" data-aos="fade-up">

        <div class="row">

          <div class="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">

            <div class="content">
              <h3>Fisher digital tend to be highly competitive,  <strong>with a focus on staying ahead of the curve and developing new solutions</strong></h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
              </p>
            </div>

            
          </div>

          <div class="col-lg-5 align-items-stretch order-1 order-lg-2 img"    data-aos="zoom-in" data-aos-delay="150">&nbsp;</div>
          <img src="/images/why-us.png" class="col-lg-5" alt=""/>
        </div>

      </div>
    </section>
    {/* <!-- End Why Us Section --> */}

    {/* <!-- ======= Skills Section ======= --> */}
    <section id="skills" class="skills">
      <div class="container" data-aos="fade-up">

        <div class="row">
          <div class="col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">
            <img src="/images/skills.png" class="img-fluid" alt=""/>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
            <h3> Fisher digital is also known for it's strong culture of collaboration and creativity. </h3>
            <p class="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>

          </div>
        </div>

      </div>
    </section>
    <br />
    <br />
    
   
    {/* <!-- End Skills Section --> */}

    {/* <!-- ======= Services Section ======= --> */}
    <section id="services" class="services section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Services</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row">
          <div class="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box">
              <div class="icon"><i class="bx bxl-dribbble"></i></div>
              <h4><a href="">Website Development</a></h4>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
            <div class="icon-box">
              <div class="icon"><i class="bx bx-file"></i></div>
              <h4><a href="">UI/UX Design</a></h4>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
            <div class="icon-box">
              <div class="icon"><i class="bx bx-tachometer"></i></div>
              <h4><a href="">Digital Marketing</a></h4>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
            <div class="icon-box">
              <div class="icon"><i class="bx bxl-dribbble"></i></div>
              <h4><a href="">Graphics Design</a></h4>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    {/* <!-- End Services Section --> */}

    {/* <!-- ======= Cta Section ======= --> */}
    <section id="cta" class="cta">
      <div class="container" data-aos="zoom-in">

        <div class="row">
          <div class="col-lg-9 text-center text-lg-start">
            <h3>Call To Action</h3>
            <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div class="col-lg-3 cta-btn-container text-center">
            <a class="cta-btn align-middle" href="#">Call To Action</a>
          </div>
        </div>

      </div>
    </section>
    {/* <!-- End Cta Section --> */}
    <br></br>
    <br></br>
    <br></br>
    <br></br>
<Row  >
<div class="section-title">
          <h2>fisher Digital Products</h2>
          <br></br>
<br></br>
<br></br>


        </div>

  <Col >
      <Card className='mx-3' class="cardhome">
        <Card.Img  variant="top"  src="/images/ahoon.png" />
        <Card.Body>
        <div >
          <a href='http://ahoondrop.com/' className='cardtitle'><h4 class="cardtext">Ahoon Frieght and Delivery </h4></a>
          <Card.Text>
          <p>This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.</p>
          </Card.Text>
          </div>
        </Card.Body>
        <Card.Link href="#" className='px-5 '></Card.Link>
       
      </Card>
      </Col>
      <Col>
      <Card bg="white" className='mx-3'  class="cardhome">
        <Card.Img variant="top" src="/images/pharma.png" />
        <Card.Body>
        
        <div >
          <a href='http://ahoondrop.com/' className='cardtitle'> <h4 class="cardtext">Fisher pharma healing</h4> </a>
          
         <p> This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.</p>
          
          </div>
        </Card.Body>
        <Card.Link href="#" className='px-5 '></Card.Link>
        
      </Card>
      </Col>
      <Col>
      <Card bg="white" className='mx-3'  class="cardhome">
        <Card.Img variant="top" src="images/yoda.png" />
        <Card.Body>
        <div >
           <a href='http://ahoondrop.com/' className='cardtitle' > <h4 class="cardtext">Yoda Coffee  </h4></a>
          <Card.Text>
            <p>This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.</p>
          </Card.Text>
          </div>
        </Card.Body>
        <Card.Link href="#" className='px-5 '></Card.Link>
        
      </Card>
      </Col>
      </Row>
      <br></br>
    <br></br>
    <br></br>
    <br></br>
      <div class="section-title">
          <h2>Values</h2>
          <p className='mx-5 px-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida mi luctus dui condimentum, sed placerat ex pellentesque. Etiam ut orci mi. Sed ut enim urna. Nullam condimentum tincidunt metus, vel tempor nibh egestas in. Curabitur convallis sollicitudin viverra. Sed sit amet nisi at magna molestie dictum. Quisque ultrices et ex sed accumsan.</p>
        </div>
    
<br></br>
<br></br>
<br></br>
<br></br>
    <br />
    
    <Carousel variant="dark" >
      <Carousel.Item>
        <img
          className="d-block w-50"
          src="images/1.jpg"
          alt="First slide"
          class="carousel img"
        
        />
        <Carousel.Caption class="carousel-caption">
        
          <h2 class="cardtext">First </h2>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src="images/2.jpg"
          alt="Second slide"
          class="carousel img"
        />
        <Carousel.Caption class="carousel-caption">
        
          <h2 class="cardtext">Second </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 "
          src="images/3.jpg"
          alt="Third slide"
          class="carousel img"
        />
        <Carousel.Caption class="carousel-caption">
        
          <h2 class="cardtext">Third</h2>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
       
    <br></br>
    <br></br>
    <br></br>
    {/* <!-- ======= Contact Section ======= --> */}
    <section id="contact" class="contact">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Contact</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
<br></br>
<br></br>
        <div class="row">

          <div class="col-lg-5 d-flex align-items-stretch">
            <div class="info">
              <div class="address">
                <i class="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p> Bole Rwanda Unicon BLDG, Addis Ababa</p>
              </div>

              <div class="email">
                <i class="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>Sales@fisherdigital.com</p>
              </div>

              <div class="phone">
                <i class="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+251911755430</p>
              </div>

              
            </div>

          </div>
          <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form action="mailto:Sales@fisherdigital.com"  enctype="text/plain" method="post" name="messages from fisher web"  id="myform" role="form" class="php-email-form">
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="name">Your Name</label>
                  <input type="text" name="name" class="form-control" id="name" required />
                </div>
                <div class="form-group col-md-6">
                  <label for="name">Your Email</label>
                  <input type="email" class="form-control" name="email" id="email" required />
                </div>
              </div>
              <div class="form-group">
                <label for="name">Subject</label>
                <input type="text" class="form-control" name="subject" id="subject" required />
              </div>
              <div class="form-group">
                <label for="name">Message</label>
                <textarea class="form-control" name="message" rows="10" required></textarea>
              </div>
              
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center"><button  type="submit">Send Message</button></div>
              {/* <a target='_blank' rel='noopener noreferrer' href='https://localhost:44227'  class="nav-button">Login</a> */}
            </form>
          </div>

        </div>

        </div>

      
    </section>
    {/* <!-- End Contact Section --> */}

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    </div>
  )
}

export default Homescreen