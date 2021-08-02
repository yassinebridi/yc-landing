import React from "react"
import Link from "../../../components/Link"
import logo from "../../../assets/image/logo/logo-white.png"
import Map from "../../../assets/image/landing-8/map.png"
export default function FooterSection({ ...rest }) {
  return (
    <>
      {/* Footer Area */}
      <div>
        {/* Contact Area */}
        <div className="contact-area-l8-1 bg-primary">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xxl-5 col-xl-6 col-lg-7 col-md-9">
                <div className="section__heading text-center">
                  <h2>Worldwide server for super fast websites.</h2>
                  <p>
                    Our powerful hosting server helps your website to boost the
                    page speed on max level.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div
                className="col-lg-10"
                data-aos="zoom-in"
                data-aos-duration={800}
                data-aos-once="true"
              >
                <div className="contact-map text-center">
                  <img src={Map} alt="map" />
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-lg-12"
                data-aos="fade-up"
                data-aos-duration={800}
                data-aos-once="true"
              >
                <div className="cta-area-l8-1">
                  <div className="row justify-content-between align-items-center">
                    <div className="col-xl-5 col-lg-6 col-md-6">
                      <div className="cta-area-l8-1__content">
                        <h2>Lets Get Started.</h2>
                        <p>
                          Leverage agile frameworks to provide a robust synopsis
                          for high level overviews. Iterative approaches
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="cta-area-l8-1__btn text-md-end">
                        <button className="btn">Get Started Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Main */}
        <footer className="footer-area-8 bg-primary">
          <div className="container">
            <div className="row footer-quick-link-area justify-content-lg-center">
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="footer-area-8-list-item">
                  <h4>ABOUT</h4>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/">Our Team</Link>
                    </li>
                    <li>
                      <Link to="/">Company</Link>
                    </li>
                    <li>
                      <Link to="/">Blog</Link>
                    </li>
                    <li>
                      <Link to="/">Team</Link>
                    </li>
                    <li>
                      <Link to="/">Agreement </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="footer-area-8-list-item">
                  <h4>PLANS</h4>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/">Personal</Link>
                    </li>
                    <li>
                      <Link to="/">Business</Link>
                    </li>
                    <li>
                      <Link to="/">Premium</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-4 col-sm-5">
                <div className="footer-area-8-list-item">
                  <h4>HELP CENTER</h4>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/">Contact us</Link>
                    </li>
                    <li>
                      <Link to="/">FAQ</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-6 col-sm-7">
                <div className="footer-area-8-list-item">
                  <div className="subscribe-newsletter">
                    <h4 className="text-white">Subscribe to our newsletter</h4>
                    <p>
                      We will send you our daily updates for business growth
                    </p>
                    <form action="#" className="d-flex">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Enter your email address"
                      />
                      <button className="btn">
                        <i className="fas fa-location-arrow" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="copy-right-area-8 bg-primary text-md-start text-center">
          <div className="container">
            <div className="row justify-content-md-between justify-content-center align-items-center">
              <div className="col-md-6 col-sm-12">
                <div className="d-flex align-items-center justify-content-md-start justify-content-center">
                  <div className="footer-logo">
                    <Link to="/">
                      <img src={logo} alt="logo" />
                    </Link>
                  </div>
                  <div className="copy-right-text">
                    <p className="mb-0">© 2020, All Rights Reserved</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="social-link d-flex align-items-center">
                  <ul className="list-unstyled d-flex flex-wrap">
                    <li>
                      <Link to="/">
                        <i className="fab fa-facebook-f" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fab fa-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fab fa-instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fab fa-linkedin-in" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
