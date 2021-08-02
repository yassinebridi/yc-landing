import React from "react"
import Link  from "../../../components/Link";
const BreadCrumbSection = () => {
  return (
    <>
      {/* Blog main Area  */}
      <div className="about-us-banner">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xxl-7 col-xl-8 col-lg-9"
              data-aos="fade-up"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="about-us-banner-content text-center">
                <h2>Join our team where we believe in new invention. </h2>
                <p>
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches to corporate
                  strategy foster collaborative thinking.
                </p>
                <Link to="/" className="btn focus-reset">View Opening</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BreadCrumbSection
