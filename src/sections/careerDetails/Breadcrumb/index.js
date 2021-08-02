import React from "react"
import {IconLocation,IconClock} from './components/Icons'
const BreadCrumbSection = () => {
  return (
    <>
      {/* Blog main Area  */}
      <div className="career-details-banner">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-12" data-aos="fade-up" data-aos-duration={800} data-aos-once="true">
        <div className="career-details-banner__content text-center">
          <h2>Customer Support Specialist</h2>
          <div className="job-details job-details__2">
            <ul className="list-unstyled">
              <li>
                <IconLocation/>
                <span>Backicing Home , NYC, USA</span>
              </li>
              <li>
                <IconClock/>
                <span>Full-time</span>
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
