import React from 'react';
import '../Styles/styles.css';

const Services = () => {
  return (
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Services</h2>
          <p>
            Welcome to Soft Dev Technologies, your trusted partner for comprehensive software
            solutions. We take pride in offering a diverse range of services designed
            to meet the evolving needs of businesses in the digital age. Our team of
            experts is dedicated to delivering excellence in every aspect of our services.
          </p>
        </div>

        <div className="row">
          <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box">
              <div className="icon"><i className="bx bxl-dribbble"></i></div>
              <h4><a>Custom Software Development</a></h4>
              <p>
                Tailored to your unique requirements, our custom software development
                services are designed to address your specific business challenges.
              </p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-file"></i></div>
              <h4><a>Web and Mobile App Development</a></h4>
              <p>
                Stay ahead in the digital landscape with our web and mobile app development
                services.
              </p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-tachometer"></i></div>
              <h4><a>Data Analytics and Business Intelligence</a></h4>
              <p>
                Unlock the power of your data with our advanced analytics and business
                intelligence services.
              </p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-layer"></i></div>
              <h4><a>Cloud Solutions</a></h4>
              <p>
                Embrace the scalability, flexibility, and security of the cloud with our cloud solutions.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Services