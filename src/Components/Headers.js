import React, { useEffect, useState } from 'react';
import '../Styles/styles.css';

const Headers = () => {
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);

  const headerScrolled = () => {
    if (window.scrollY > 100) {
      setIsHeaderScrolled(true);
    } else {
      setIsHeaderScrolled(false);
    }
  };

  useEffect(() => {
    headerScrolled();

    window.addEventListener('load', headerScrolled);
    window.addEventListener('scroll', headerScrolled);

    return () => {
      window.removeEventListener('load', headerScrolled);
      window.removeEventListener('scroll', headerScrolled);
    };
  }, []); 


  useEffect(() => {
    const select = (el, all = false) => {
      el = el.trim();
      if (all) {
        return [...document.querySelectorAll(el)];
      } else {
        return document.querySelector(el);
      }
    };

    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all);
      if (selectEl) {
        if (all) {
          selectEl.forEach(e => e.addEventListener(type, listener));
        } else {
          selectEl.addEventListener(type, listener);
        }
      }
    };

    const handleMobileNavToggle = (e) => {
      const body = select('body');
      body.classList.toggle('mobile-nav-active');
      e.currentTarget.classList.toggle('bi-list');
      e.currentTarget.classList.toggle('bi-x');
    };

    on('click', '.mobile-nav-toggle', handleMobileNavToggle);

    return () => {
      const mobileNavToggle = select('.mobile-nav-toggle');
      if (mobileNavToggle) {
        mobileNavToggle.removeEventListener('click', handleMobileNavToggle);
      }
    };
  }, []);


  return (
    <header id="header" className={`fixed-top ${isHeaderScrolled ? 'header-scrolled' : ''}`}>
      <div className="container d-flex align-items-center">
          <img id='logo' src='images/logo.png'/>

        <a href="index.html" className="logo me-auto">
          <img src="assets/img/logo.png" alt="" className="img-fluid" />
        </a>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#contact">
                Contact
              </a>
            </li>
            <li>
              <a className="getstarted scrollto fs-5" href="#contact">
                Feedback
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
};

export default Headers;
