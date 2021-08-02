import React from "react"
import Link  from "../../../components/Link";
const BreadCrumbSection = () => {
  return (
    <>
      {/* Blog main Area  */}
      <div className="blog-details-banner">
        <div className="container">
          <div className="row">
            <div className="col-xxl-7 col-xl-8 col-lg-9 col-md-10">
              <div className="content">
                <h2>
                  Bring to the table win-win survival strategies to ensure
                  proactive customer service.
                </h2>
                <div className="blog-sub-details">
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/">By Martin King</Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span>•</span> 20 Jun 2020
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span>•</span> 5 min read
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

export default BreadCrumbSection
