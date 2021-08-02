import React from "react"
import Link from "../../../components/Link"
import background from "../../../assets/image/landing-4/cta-bg.png"
import footerLogo from "../../../assets/image/logo/logo-white.png"

export default function FooterSection({ ...rest }) {
  return (
    <>
      {/* Footer Area */}
      <div
        className="contact-form-area-l4 bg-position"
        style={{ background: `url(${background})` }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xxl-7 col-xl-8 col-lg-9"
              data-aos="fade-in"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="section__heading text-center">
                <h2>Ready to become a member ?</h2>
                <p>
                  With Kareo Telemedicine, you can connect with patients
                  anywhere at anytime. It’s simpleWe believe cost shouldn't be a
                  barrier.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xxl-8 col-xl-9 col-lg-10 col-md-12">
              <form>
                <div className="contact-form-l4">
                  <div className="row">
                    <div className="col-lg-4 col-md-4">
                      <div className="form-group">
                        <input
                          type="text"
                          name="text"
                          id="name"
                          className="form-control"
                          placeholder="Your name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="form-control"
                          placeholder="Your email"
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div className="form-group contact-form-l4__btn">
                        <button className="btn focus-reset">Join us Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-12"
              data-aos="zoom-in"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="footer-border-l4" />
            </div>
          </div>
        </div>
        <footer className="footer-area-4">
          <div className="container">
            <div className="row footer-quick-link-area justify-content-lg-center">
              <div className="col-lg-4 col-md-4">
                <div className="footer-logo">
                  <Link to="/">
                    <img src={footerLogo} alt="logo" />
                  </Link>
                  <div className="social-link">
                    <h4>Follow us on : </h4>
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
                          <i className="fab fa-youtube" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="footer-area-list-item">
                  <h4>Theme Pages</h4>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/">Home Pages</Link>
                    </li>
                    <li>
                      <Link to="/">Pricing</Link>
                    </li>
                    <li>
                      <Link to="/">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="/">Team</Link>
                    </li>
                    <li>
                      <Link to="/">About Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="footer-area-list-item">
                  <h4>Company Bio</h4>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/">Blog</Link>
                    </li>
                    <li>
                      <Link to="/">Help Center</Link>
                    </li>
                    <li>
                      <Link to="/">Sales Tools Catalog</Link>
                    </li>
                    <li>
                      <Link to="/">Academy</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                <div className="footer-area-list-item">
                  <h4>Information</h4>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/">Terms and Policy</Link>
                    </li>
                    <li>
                      <Link to="/">About us</Link>
                    </li>
                    <li>
                      <Link to="/">Support</Link>
                    </li>
                    <li>
                      <Link to="/">About us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                <div className="footer-area-list-item contact-details-l4-area">
                  <h4>Get in Touch</h4>
                  <div className="d-flex align-items-start contact-details-l4">
                    <div className="icon-box">
                      <i className="far fa-envelope" />
                    </div>
                    <div className="content">
                      <Link to="/">contact@grayic.com</Link>
                      <Link to="/">support@grayic.com</Link>
                    </div>
                  </div>
                  <div className="d-flex align-items-start contact-details-l4">
                    <div className="icon-box">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="content">
                      <Link to="/">+1 999 897 979</Link>
                      <Link to="/">+1 999 154 876</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
