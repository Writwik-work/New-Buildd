import React from "react";
import { Link } from "react-router-dom";

const FooterTwo = () => {
  return (
    <footer>
      <div className="footer-area-two">
        <div className="container">
          <div className="footer-top-two">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8">
                <div className="footer-content-two text-center">
                  <div className="logo">
                    <Link to="/">
                      <img src="/img/logo/w_logo.png" alt="" />
                    </Link>
                  </div>
                  <p>
                    Agency is a full-service agency, busy designing and building
                    beautiful digital products, brands, and experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom-two">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="copyright-text">
                  <p>© 2025, Creative Agency.</p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="footer-social-two">
                  <ul className="list-wrap">
                    <li className="title">Follow us</li>
                    <li>
                      <a href="https://www.facebook.com/p/Ingversions-Digital-Pvt-Ltd-61573019451087">
                        <img src="/img/icon/footer_icon01.png" alt="Facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/ingversions/">
                        <img src="/img/icon/footer_icon02.png" alt="Instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/inversions/">
                        <img src="/img/icon/footer_icon03.png" alt="Linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="https://x.com/Ingversions">
                        <img src="/img/icon/footer_icon04.png" alt="Twitter" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
