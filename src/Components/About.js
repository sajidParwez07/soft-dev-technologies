import React from 'react';
import '../Styles/styles.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>About Us</h2>
        </div>

        <div className="row content">
          <div className="col-lg-6">
            <h3>Welcome to SDT</h3>
            <p>
              At Soft Dev Technology we are passionate about creating innovative
              software solutions that empower businesses and individuals to thrive in the digital era.
              Founded in [Year], we have been at the forefront of technology, driving positive change
              through our cutting-edge software products.
            </p>
            <h3>Our Mission</h3>
            <p>
              Our mission is to simplify and enhance the way people and businesses
              interact with technology. We believe that well-designed software has the
              power to streamline processes, boost efficiency, and transform the way
              organizations operate. Through our commitment to excellence, we aim to be
              a driving force behind digital evolution.
            </p>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <h3>Expertise in Action</h3>
            <p>
              Backed by a team of highly skilled and dedicated professionals,
              we specialize in Software developing, FrontEnd, Backend and more, enabling us to
              deliver robust and scalable solutions tailored to the unique needs
              of our clients. Whether it's developing custom software, implementing
              advanced data analytics, or creating user-friendly applications, we
              leverage our expertise to turn ideas into reality.
            </p>
            <h3>Client-Centric Approach</h3>
            <p>
              At the heart of our success is our client-centric philosophy.
              We believe in forging strong partnerships with our clients,
              understanding their goals, and collaborating closely to achieve
              success together. Our commitment to delivering value goes beyond
              the initial project, as we strive to build long-lasting relationships
              based on trust, reliability, and exceptional service.
            </p>
            <a className="btn-learn-more">Learn More</a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About