import React from "react"
import Link from "../../../components/Link"
// import BrandLogo from "../../../assets/image/png/logo-white.png"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import appStore from "../../../assets/image/landing-2/app_store-black.png"
import googleStore from "../../../assets/image/landing-2/play_store_black.png"

export default function FooterSection({ ...rest }) {
  return (
    <>
      <div>
        <footer className="footer-area footer--area-2">
          <div className="container">
            <div className="row justify-content-lg-between justify-content-center">
              <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-8 col-12">
                <div className="nav-cta-content text-center text-md-start">
                  <h4 className="text-white">Get appex on your device:</h4>
                  <div className="cta-area-btn-group">
                    <Link to="/">
                      <img
                        src={appStore}
                        alt="appStore"
                      />
                    </Link>
                    <Link to="/">
                      <img
                        src={googleStore}
                        alt="googlestore"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6 col-md-8 col-sm-9">
                <div className="subscribe-newsletter">
                  <h4 className="text-white">Subscribe to our newsletter</h4>
                  <form action="#" className="d-sm-flex">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Enter your email address"
                    />
                    <button className="btn">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="row footer-quick-link-area justify-content-lg-center">
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
              <div className="col-lg-3 col-md-4 col-sm-6">
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
                    <li>
                      <Link to="/">Support</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-2 col-md-4 col-sm-6">
                <div className="footer-area-list-item">
                  <h4>Partnership</h4>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/">Partners</Link>
                    </li>
                    <li>
                      <Link to="/">Peseller Program</Link>
                    </li>
                    <li>
                      <Link to="/">AI Labs</Link>
                    </li>
                    <li>
                      <Link to="/">Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                <div className="footer-area-list-item">
                  <h4>Pages</h4>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/">Blog</Link>
                    </li>
                    <li>
                      <Link to="/">About Us</Link>
                    </li>
                    <li>
                      <Link to="/">Support</Link>
                    </li>
                    <li>
                      <Link to="/">FAQ</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                <div className="footer-area-list-item">
                  <h4>Career</h4>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/">Opening Post</Link>
                    </li>
                    <li>
                      <Link to="/">Apply Aplication</Link>
                    </li>
                    <li>
                      <Link to="/">Partner</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="footer-2-border bg-bunting-aprx" />
        <div className="copy-right-area bg-bunting-aprx text-sm-start text-center">
          <div className="container">
            <div className="row justify-content-md-between justify-content-center align-items-center">
              <div className="col-md-6 col-sm-5">
                <div className="copy-right-text">
                  <p className="text-lynch mb-0">© 2020, All Rights Reserved</p>
                </div>
              </div>
              <div className="col-md-6 col-sm-7">
                <div className="social-link d-flex align-items-center">
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
