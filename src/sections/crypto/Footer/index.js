import React from "react"
import Link from "../../../components/Link"

export default function FooterSection({ ...rest }) {
  return (
    <>
      {/* Footer Area */}
      <footer className="footer-area-l5">
        <div className="container">
          <div className="row justify-content-md-between justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-8 col-12">
              <div className="join-us-content text-center text-md-start">
                <h2>200K+ People joined us. When are you joining?</h2>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-4 col-8">
              <div className="join-us-btn text-md-end text-center">
                <button className="btn focus-reset">Get Started</button>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="border border-footer" />
            </div>
          </div>
          <div className="row footer-quick-link-area justify-content-lg-center">
            <div className="col-lg-2 col-md-4 col-sm-6">
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
                    <Link to="/">About us</Link>
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
    </>
  )
}
