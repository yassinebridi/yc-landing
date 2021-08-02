import React from "react"
import Link from "../../../components/Link"
import logo from "../../../assets/image/logo/logo-black.png"
import apple from "../../../assets/image/landing-6/apple-l6.png"
import google from "../../../assets/image/landing-6/playstore-l6.png"
export default function FooterSection({ ...rest }) {
  return (
    <>
      {/* Footer Area */}
      <footer className="footer-area-6">
        <div className="container">
          <div className="row footer-quick-link-area justify-content-lg-center">
            <div className="col-lg-4 col-md-4">
              <div className="footer-logo">
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
                <div className="social-link">
                  <h4 className="text-lynch">Follow us on : </h4>
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
                    <Link to="/">Home Pages </Link>
                  </li>
                  <li>
                    <Link to="/">Pricing </Link>
                  </li>
                  <li>
                    <Link to="/">Contact Us </Link>
                  </li>
                  <li>
                    <Link to="/">Team </Link>
                  </li>
                  <li>
                    <Link to="/">About Us </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="footer-area-list-item">
                <h4>Company Bio</h4>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/">Blog </Link>
                  </li>
                  <li>
                    <Link to="/">Help Center </Link>
                  </li>
                  <li>
                    <Link to="/">Sales Tools Catalog </Link>
                  </li>
                  <li>
                    <Link to="/">Academy </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
              <div className="footer-area-list-item">
                <h4>Information</h4>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/">Terms and Policy </Link>
                  </li>
                  <li>
                    <Link to="/">About us </Link>
                  </li>
                  <li>
                    <Link to="/">Support </Link>
                  </li>
                  <li>
                    <Link to="/">About us </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
              <div className="footer-area-list-item">
                <h4>Download</h4>
                <div className="download-image">
                  <Link to="/">
                    <img src={apple} alt="apple store" />
                  </Link>
                  <Link to="/">
                    <img src={google} alt="play store" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
