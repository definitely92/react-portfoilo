import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const Footer = () => {
  const FooterGsap = () => {
    gsap.to(".footer__inner > div > p", {
      duration: 0.4,
      y: 0,
      opacity: 1,
      delay: 0.3,
    });
    gsap.to(".footer__inner > div > h3", {
      duration: 0.4,
      y: 0,
      opacity: 1,
      delay: 0.3,
    });
  };

  const getFooter = () => {
    FooterGsap();
  };

  useEffect(() => {
    getFooter();
  }, [getFooter]);
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer__inner">
          <div>
            <p>Let’s create something new</p>
            <h3>
              LET`S Get IN
              <br />
              TOUCH
            </h3>
            <Link to="/contact" className="contact">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
