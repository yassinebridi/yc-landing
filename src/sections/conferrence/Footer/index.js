import React from "react"
import Link from "../../../components/Link"

export default function FooterSection({ ...rest }) {
  return (
    <>
      {/* Footer Area */}
      <div>
        <footer className="footer-area-l3">
          <div className="container">
            <div className="row footer-quick-link-area justify-content-lg-center">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="footer-area-list-item">
                  <h4>THEME PAGES</h4>
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
                  <h4>COMPANY BIO</h4>
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
                  <h4>PARTNERSHIP</h4>
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
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="footer-area-list-item get-in-touch-area">
                  <h4>get in touch</h4>
                  <p>Contact us any time for getting support.</p>
                  <h3>contact@grayic.com</h3>
                  <ul className="list-unstyled">
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
                        <i className="fab fa-youtube" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="copy-right-area-l3 text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="footer-3-border" />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="copy-right-text">
                  <p className="text-lynch mb-0">
                    Copyright 2020, All Rights Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
