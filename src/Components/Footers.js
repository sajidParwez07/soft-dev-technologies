import React, { useEffect, useState } from 'react';
import '../Styles/styles.css';


const Footers = () => {
    const [isBackToTopVisible, setIsBackToTopVisible] = useState(false);

    useEffect(() => {
        const backToTop = document.querySelector('.back-to-top');

        const handleScroll = () => {
            setIsBackToTopVisible(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            {isBackToTopVisible && (
                <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
                    <i className="bi bi-arrow-up-short"></i>
                </a>
            )}
            <footer id="footer">
                <div className="footer-newsletter">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <h4>Join Our Company</h4>
                                <p>Are you ready to embark on a rewarding journey that combines innovation.</p>
                                <form action="" method="post">
                                    <input type="email" name="email" /><input type="submit" value="Subscribe" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h3>Soft Dev Technologies</h3>
                                <p>
                                    At sanjay nagar <br />
                                    Marathahalli<br />
                                    Bangalore, india <br /><br />
                                    <strong>Phone:</strong> +91 6201341517<br />
                                    <strong>Email:</strong> softdevtech@gmail.com<br />
                                </p>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#hero">Home</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#about">About us</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#services">Services</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Social Networks</h4>
                                <p>
                                    Stay connected and join the conversation by following Soft Dev Technologies
                                    on our social media platforms. Be the first to know about product updates,
                                    industry insights, and engaging content. We look forward to interacting
                                    with you!
                                </p>
                                <div className="social-links mt-3">
                                    <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                                    <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                                    <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                                    <a href="#" className="google-plus"><i className="bi bi-skype"></i></a>
                                    <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container footer-bottom clearfix">
                    <div className="copyright">
                        &copy; Copyright <strong><span>Soft Dev Technologies</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        Designed by <a>Sajid Parwez</a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footers;