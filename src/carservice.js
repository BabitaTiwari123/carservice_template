import React from 'react';
import './style12.css';

function Carservice() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id="home">
          <a className="navbar-brand" href="#">Car Services</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#test">Testimonials</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#booking">Online Booking</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#faq">FAQ</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#blog">Blog</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="jumbotron jumbotron-fluid" id="services">
          <div className="container">
            <h1 className="display-4">Car Services</h1>
            <p className="lead">We provide routine car maintenance services such as oil changes, tire rotations, and more.. Ut enim ad minim veniam, quis nostrud exercitation 
              ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img className="card-img-top" src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwc2VydmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Oil Change</h5>
                  <p className="card-text">Draining the old oil: The technician will locate the oil drain plug on the bottom of the engine and remove it, allowing the old oil to drain into a container.

Changing the oil filter: While the old oil is draining, the technician will remove the old oil filter and replace it with a new one.




</p>
                  <a href="#contact" className="btn btn-primary">Contact us</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img className="card-img-top" src="https://plus.unsplash.com/premium_photo-1661371847464-0dfa16cb2d8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNhciUyMHNlcnZpY2UlMjBvaWwlMjBjaGFuZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Tire Rotation</h5>
                  <p className="card-text">Tire rotation is another common service provided by car service providers. During tire rotation, the tires are moved from one position on the vehicle to another in order to promote even wear and extend their lifespan. </p>
                  <a href="#contact" className="btn btn-primary">Contact us</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img className="card-img-top" src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyJTIwc2VydmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Brake Service</h5>
                  <p className="card-text">Brake service is another essential service provided by car service providers. The brakes are a critical safety component of a vehicle, and regular maintenance and inspection are necessary to ensure that they are functioning properly.</p>
                  <a href="#contact" className="btn btn-primary">Contact us</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img className="card-img-top" src="https://images.unsplash.com/photo-1632733711679-529326f6db12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhciUyMHNlcnZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Battery Replacement</h5>
                  <p className="card-text">Battery replacement is a common service provided by car service providers. The battery is a critical component of a vehicle's electrical system, and it provides the power necessary to start the engine and operate other electrical components.</p>
                  <a href="#contact" className="btn btn-primary">Contact us</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img className="card-img-top" src="https://plus.unsplash.com/premium_photo-1676998430913-12457cc6c6f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyJTIwc2VydmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Engine Diagnostics</h5>
                  <p className="card-text">Engine diagnostics is a service provided by car service providers to identify and diagnose problems with a vehicle's engine. The engine is a complex system with many different components, and issues can arise for a variety of reasons, including wear and tear, faulty parts, and electrical or computer problems.

</p>
                  <a href="#contact" className="btn btn-primary">Contact us</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img className="card-img-top" src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhciUyMHNlcnZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">car wash</h5>
                  <p className="card-text">Car wash service is another service provided by many car service providers. Car washing involves cleaning the exterior of the vehicle, including the body, wheels, tires, and windows.

</p>
                  <a href="#contact" className="btn btn-primary">Contact us</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img className="card-img-top" src="https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fFN1c3BlbnNpb24lMjBSZXBhaXIlMjBvZiUyMGNhciUyMHNlcnZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Suspension Repair</h5>
                  <p className="card-text">Suspension repair service is a type of car service provided by mechanics that involves repairing or replacing components of a vehicle's suspension system. The suspension system is responsible for ensuring a smooth ride, improving handling, and maintaining stability on the road.

</p>
                  <a href="#contact" className="btn btn-primary">Contact us</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img className="card-img-top" src="https://plus.unsplash.com/premium_photo-1661274058153-809473af2bdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8VmVoaWNsZSUyMEluc3BlY3Rpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Vehicle Inspection</h5>
                  <p className="card-text">Vehicle inspection service is a comprehensive service provided by car service providers to evaluate the overall condition of a vehicle. This service is typically recommended when purchasing a used car, but it can also be beneficial for regular maintenance and upkeep.</p>
                  <a href="#contact" className="btn btn-primary">Contact us</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img className="card-img-top" src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWlyJTIwQ29uZGl0aW9uaW5nJTIwUmVwYWlyJTIwY2FyJTIwc2VydmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Air Conditioning Repair</h5>
                  <p className="card-text">Air conditioning repair service is a type of car service provided by mechanics to diagnose and fix issues with a vehicle's air conditioning system. The air conditioning system is responsible for cooling the cabin of the vehicle and removing humidity from the air.

</p>
                  <a href="#contact" className="btn btn-primary">Contact us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="about" className="about" id="about">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2>About Us</h2>
                <p>At XYZ Car Service, we're committed to providing high-quality auto repair services to our customers. We have a team of experienced mechanics who are passionate about cars and dedicated to delivering exceptional service.</p>
                <p>Our mission is to ensure that our customers have a safe and reliable vehicle that they can rely on for their daily needs. We believe in honesty, transparency, and fair pricing, and we always go the extra mile to exceed our customers' expectations.</p>
              </div>
              <div className="col-md-6">
                <img src="https://images.unsplash.com/photo-1625047509168-a7026f36de04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyJTIwc2VydmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="About Us" />
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="testimonials" id="test">
          <div className="container">
            <h2>Testimonials</h2>
            <div className="row">
              <div className="col-md-4">
                <div className="testimonial">
                  <img src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Client 1" />
                  <blockquote>
                    "I've been taking my car to XYZ Car Service for years, and they always do a great job. The mechanics are knowledgeable and friendly, and the prices are very reasonable. I highly recommend them."
                  </blockquote>
                  <cite>John Smith</cite>
                </div>
              </div>
              <div className="col-md-4">
                <div className="testimonial">
                  <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Client 2" />
                  <blockquote>
                    "I had a problem with my brakes and brought my car to XYZ Car Service. They fixed it quickly and at a fair price. I was impressed by their professionalism and attention to detail. I will definitely be coming back!"
                  </blockquote>
                  <cite>Jane Doe</cite>
                </div>
              </div>
              <div className="col-md-4">
                <div className="testimonial">
                  <img src="https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Client 3" />
                  <blockquote>
                    "I recently got my car detailed at XYZ Car Wash, and it looks like new! The staff were friendly and did an excellent job. I will definitely be bringing my car back for regular washes and maintenance."
                  </blockquote>
                  <cite>Bob Johnson</cite>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="contact" id="contact">
          <div className="container">
            <h2>Contact Us</h2>
            <div className="row">
              <div className="col-md-6">
                <form id="contact-form" method="post" action="contact-form-handler.php">
                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" className="form-control" id="phone" name="phone" placeholder="Enter your phone number" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea className="form-control" id="message" name="message" rows={5} placeholder="Enter your message" required defaultValue={""} />
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
              <div className="col-md-6">
                <h3>Visit Us</h3>
                <p>123 Main St, Anytown USA</p>
                <h3>Call Us</h3>
                <p>(555) 555-5555</p>
                <h3>Email Us</h3>
                <p>info@car-service.com</p>
              </div>
            </div>
          </div>
        </section>
        <section id="booking" className="booking" id="booking">
          <div className="container">
            <h2>Online Booking</h2>
            <form id="booking-form" method="post" action="booking-form-handler.php">
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="date">Select Date:</label>
                    <input type="date" className="form-control" id="date" name="date" required />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="time">Select Time:</label>
                    <input type="time" className="form-control" id="time" name="time" required />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="service">Select Service:</label>
                    <select className="form-control" id="service" name="service" required>
                      <option value>Select a Service</option>
                      <option value="oil-change">Oil Change</option>
                      <option value="brakes-replacement">Brakes Replacement</option>
                      <option value="tire-rotation">Tire Rotation</option>
                      <option value="battery-replacement">Battery Replacement</option>
                      <option value="air-conditioning-service">Air Conditioning Service</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" required />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" required />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" className="form-control" id="phone" name="phone" placeholder="Enter your phone number" required />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="vehicle">Vehicle Make &amp; Model:</label>
                    <input type="text" className="form-control" id="vehicle" name="vehicle" placeholder="Enter your vehicle make & model" required />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">Book Now</button>
            </form>
          </div>
        </section>
        <section id="faq" className="faq" id="faq">
          <div className="container">
            <h2>Frequently Asked Questions</h2>
            <div className="accordion" id="accordionExample">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      What services do you offer?
                    </button>
                  </h5>
                </div>
                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                  <div className="card-body">
                    We offer a range of car services including oil changes, brakes replacement, tire rotation, battery replacement, and air conditioning service. Check our Services page for more information.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwo">
                  <h5 className="mb-0">
                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                     <a href="https://www.youtube.com/watch?v=O1hF25Cowv8"> How long does an oil change take?</a>
                    </button>
                  </h5>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                  <div className="card-body">
                    An oil change typically takes around 30-45 minutes to complete. However, it may take longer depending on the type of vehicle and the amount of oil needed.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  <h5 className="mb-0">
                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                     <a href='https://www.carandbike.com/news/benefits-and-weaknesses-of-car-warranties-2812849#:~:text=A%20car%20warranty%20is%20a,the%20expenses%20and%20service%20costs.&text=Difference%20between%20car%20insurance%20and%20warranty.'> Do you offer a warranty on your services?
                     </a> </button>
                  </h5>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                  <div className="card-body">
                    Yes, we offer a warranty on all our services. Please contact us for more information on our warranty policy.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="blog" className="blog" id="blog">
          <div className="container">
            <h2>Blog</h2>
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <img className="card-img-top" src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2clMjBmb3IlMjBjYXIlMjBzZXJ2aWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Blog 1" />
                  <div className="card-body">
                    <h5 className="card-title">The Importance of Regular Car Maintenance</h5>
                    <p className="card-text">Learn about the benefits of regular car maintenance and how it can save you money in the long run.</p>
                    <a href="#" className="btn btn-primary">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img className="card-img-top" src="https://plus.unsplash.com/premium_photo-1661379279314-191449a4556a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmxhdCUyMHRpcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Blog 2" />
                  <div className="card-body">
                    <h5 className="card-title">How to Change a Flat Tire</h5>
                    <p className="card-text">Learn the step-by-step process of changing a flat tire on your car.</p>
                    <a href="#" className="btn btn-primary">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img className="card-img-top" src="https://images.unsplash.com/photo-1477601263568-180e2c6d046e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2ludGVyJTIwY29uZHRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Blog 3" />
                  <div className="card-body">
                    <h5 className="card-title">Tips for Driving in Winter Conditions</h5>
                    <p className="card-text">Learn how to drive safely and efficiently in snow and ice.</p>
                    <a href="#" className="btn btn-primary">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="social-media" className="social-media">
          <div className="container">
            <h2>Follow Us on Social Media</h2>
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <a href="#"><img className="card-img-top" src="data:image/jpeg;base64,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" alt="Facebook" /></a>
                  <div className="card-body">
                    <h5 className="card-title">Facebook</h5>
                    <a href="#" className="btn btn-primary">Follow Us</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <a href="#"><img className="card-img-top" src="data:image/png;base64,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" alt="Twitter" /></a>
                  <div className="card-body">
                    <h5 className="card-title">Twitter</h5>
                    <a href="#" className="btn btn-primary">Follow Us</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <a href="#"><img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs6GwM3phZ5uPWKijlHVND3v0nkpOkp_vXtw&usqp=CAU" alt="Instagram" /></a>
                  <div className="card-body">
                    <h5 className="card-title">Instagram</h5>
                    <a href="#" className="btn btn-primary">Follow Us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer bg-light">
          <div className="container">
            <span className="text-muted">© 2023 Car Services. All rights reserved.</span>
          </div>
        </footer>
      </div>
  );
}
export default Carservice;