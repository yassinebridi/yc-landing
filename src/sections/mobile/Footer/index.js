import React from "react"
import Link from "../../../components/Link"

export default function FooterSection({ ...rest }) {
  return (
    <>
      <div>
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
