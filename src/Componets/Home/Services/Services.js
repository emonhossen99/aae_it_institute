import React from 'react';
import WDesing from '../../../images/services/web-desing.jpg'
import WDevopment from '../../../images/services/web-devolpment.jpg'
import WDesingAD from '../../../images/services/desing and development.jpg'
import Graphic from '../../../images/services/graphic-desing.jpg'
import Photographi from '../../../images/services/photographi.jpg'
import Vedio from '../../../images/services/vedio editing.jpg'
import './Services.css'

const Services = () => {


  return (
    <div className='container'>

      <h1 className='text-primary text-3xl mt-8 mb-3 text-center'>SERVICES WE PROVIDE</h1>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10'>
        <div className="myCard px-2 py-2 card lg : max-w-lg bg-base-100 shadow-xl ">
          <figure className="px-5 pt-5">
            <img src={WDesing} alt="Web Design" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Course Name : <span>Web Design</span></h2>
            <p className="card-titlep">We Are Provide HTML5,CSS3,Javascript/ Ajax/Jquery,Bootstrap css framework and Tailwind css framework</p>
            <h5 className="card-titlePrice">Price : 10,000 tk</h5>
            <button className="bg-gradient-to-r from-secondary to-primary btn btn-primary text-white font-bold uppercase">See More</button>
          </div>
        </div>

        <div className="myCard px-2 py-2 card lg : max-w-lg bg-base-100 shadow-xl ">
          <figure className="px-5 pt-5">
            <img src={WDevopment} alt="Web Development" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Course Name : <span>Web Development</span></h2>
            <p className="card-titlep">We Are Provide HTML5,CSS3,Basic PHP Programming,PHP (OOP),MYSQL,Javascript/ Ajax/ Jquery</p>
            <h5 className="card-titlePrice">Price : 10,000 tk</h5>
            <button className="bg-gradient-to-r from-secondary to-primary btn btn-primary text-white font-bold uppercase">See More</button>
          </div>
        </div>

        <div className="myCard px-2 py-2 card lg : max-w-lg bg-base-100 shadow-xl ">
          <figure className="px-5 pt-5">
            <img src={WDesingAD} alt="Design & Development" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Course Name : <span>Design & Development</span></h2>
            <p className="card-titlep">We Are Provide HTML5,CSS3,PHP 7,PHP (OOP),MYSQL,WordPress ( Premium Theme Customization)</p>
            <h5 className="card-titlePrice">Price : 10,000 tk</h5>
            <button className="bg-gradient-to-r from-secondary to-primary btn btn-primary text-white font-bold uppercase">See More</button>
          </div>
        </div>

        <div className="myCard px-2 py-2 card lg : max-w-lg bg-base-100 shadow-xl ">
          <figure className="px-5 pt-5">
            <img src={Graphic} alt="Graphic Design" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Course Name : <span>Graphic Design</span></h2>
            <p className="card-titlep">Introduction to Motion Graphic,Basic Motion With,Effects and Preset,Motion Typography,Complete Motion Project</p>
            <h5 className="card-titlePrice">Price : 10,000 tk</h5>
            <button className="bg-gradient-to-r from-secondary to-primary btn btn-primary text-white font-bold uppercase">See More</button>
          </div>
        </div>

        <div className="myCard px-2 py-2 card lg : max-w-lg bg-base-100 shadow-xl ">
          <figure className="px-5 pt-5">
            <img src={Photographi} alt="PhotoGraphi" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Course Name : <span>PhotoGraphi</span></h2>
            <p className="card-titlep">Wedding Photographer,Wildlife Photographer,Fashion Photographer,Multimedia Artist and More…</p>
            <h5 className="card-titlePrice">Price : 10,000 tk</h5>
            <button className="bg-gradient-to-r from-secondary to-primary btn btn-primary text-white font-bold uppercase">See More</button>
          </div>
        </div>

        <div className="myCard px-2 py-2 card lg : max-w-lg bg-base-100 shadow-xl ">
          <figure className="px-5 pt-5">
            <img src={Vedio} alt="Video Editing" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Course Name : <span>Video Editing</span></h2>
            <p className="card-titlep">Promotional Video,Explainer Video,Magical VFX Project,Rotoscoping VFX,3D Camera and Tracking,Green Screen VFX</p>
            <h5 className="card-titlePrice">Price : 10,000 tk</h5>
            <button className="bg-gradient-to-r from-secondary to-primary btn btn-primary text-white font-bold uppercase">See More</button>
          </div>
        </div>
      </div>


    </div>

  );
};

export default Services;



// {/* <h1 className='servicesHeading'>OUR SERVICES</h1>
// <Row xs={1} md={2} className="g-4">




// <Col>
// <Card>
// <Card.Img variant="top" src={img2} />
// <Card.Body>
//   <Card.Title><span className='cardName'>Course Name : </span></Card.Title>
//   <Card.Text>
//   A web developer is a programmer responsible for turning user stories, mockups, and web designs into functional websites. They use web fundamentals such as HTML, CSS, and JavaScript to build, manage, and deploy web applications. Web developers might also use a variety of programming languages depending on your website's technology stack, including Python, PHP, and Ruby.
//   <h5>Price : 10,000 tk</h5>
//   </Card.Text>
//   <Button className='seeMore'>SEE MORE</Button>
// </Card.Body>
// </Card>
// </Col>


// <Col>
// <Card>
// <Card.Img variant="top" src={img3} />
// <Card.Body>
//   <Card.Title><span className='cardName'>Course Name : </span>Web Design and Development</Card.Title>
//   <Card.Text>
//   The difference between web designers and web developers is often misunderstood. They both make a living off the same type of business. They contribute to creating websites but their specializations and skill sets are different. Web designers and web developers often work together as well. Instead of being competitive, they are complementary.
//   <h5>Price : 10,000 tk</h5>
//   </Card.Text>
//   <Button className='seeMore'>SEE MORE</Button>
// </Card.Body>
// </Card>
// </Col>


// <Col>
// <Card>
// <Card.Img variant="top" src={img4} />
// <Card.Body>
//   <Card.Title><span className='cardName'>Course Name : </span>Graphic Design</Card.Title>
//   <Card.Text>
//   The Graphic Designer job description includes the entire process of defining requirements, visualizing and creating graphics including illustrations, logos, layouts and photos. You’ll be the one to shape the visual aspects of websites, books, magazines, product packaging, exhibitions and more.Your graphics should capture the attention of those who see them and communicate the right message.
//   <h5>Price : 10,000 tk</h5>
//   </Card.Text>
//   <Button className='seeMore'>SEE MORE</Button>
// </Card.Body>
// </Card>
// </Col>


// <Col>
// <Card>
// <Card.Img variant="top" src={img5} />
// <Card.Body>
//   <Card.Title><span className='cardName'>Course Name : </span>Video Editing</Card.Title>
//   <Card.Text>
//   A Video Editor is tasked with taking the raw footage shot by a film crew and director and turning it into the final product. This means following an outline, script or shot list and assembling the footage into one cohesive video or film. Often in video and film work, there are many camera angles and takes recorded.
//   <h5>Price : 10,000 tk</h5>
//   </Card.Text>
//   <Button className='seeMore'>SEE MORE</Button>
// </Card.Body>
// </Card>
// </Col>


// <Col>
// <Card>
// <Card.Img variant="top" src={img6} />
// <Card.Body>
//   <Card.Title><span className='cardName'>Course Name : </span>Digital Marketing</Card.Title>
//   <Card.Text>
//   Digital marketing, also called online marketing, is the promotion of brands to connect with potential customers using the internet and other forms of digital communication. This includes not only email, social media, and web-based advertising, but also text and multimedia messages as a marketing channel..
//     <h5>Price : 10,000 tk</h5>
//   </Card.Text>
//   <Button className='seeMore'>SEE MORE</Button>
// </Card.Body>
// </Card>
// </Col>

// </Row>
// <div className='servicesButton'>
// <Button className='servicesHeading'>SEE OUR ALL SERVICES</Button>
// </div>
// </div> 