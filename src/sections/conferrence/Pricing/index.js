import React from "react";
import Link from "../../../components/Link";
const PricingSection = ({ ...rest }) => {
  return (
    <>
      {/* Pricing Area  */}
<div className="pricing-area-l3-1 bg-catskillwhite">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xxl-6 col-xl-7 col-lg-9 col-md-11" data-aos="fade-in" data-aos-duration={800} data-aos-once="true">
        <div className="section__heading text-center">
          <div className="icon-area">
            <i className="fas fa-dollar-sign" />
          </div>
          <h2>Plan and Pricing</h2>
          <p>Collaboratively administrate empowered markets via plug-and-play networks.</p>
        </div>
      </div>
    </div>
    <div className="row justify-content-center pricing-l3-1-items">
      <div className="col-lg-4 col-md-6 col-sm-10" data-aos="fade-right" data-aos-duration={800} data-aos-once="true">
        <div className="card card--pricing-l3-1">
          <div className="card--pricing-l3-1__head">
            <h6>Pro plan</h6>
          </div>
          <div className="card--pricing-l3-1__price">
            <h2>$29/mo</h2>
            <span>$290 billed annualy</span>
            <div className="price-l3-btn">
            <Link to="/" className="btn focus-reset">Get Started <i className="fas fa-arrow-right" /></Link>
            </div>
          </div>
          <div className="price-l3-border" />
          <div className="card--pricing-l3-1__service">
            <ul className="list-unstyled">
              <li className="d-inline-flex align-items-center"><span><i className="fas fa-check" /></span>02 Active Accounts</li>
              <li className="d-inline-flex align-items-center"><span><i className="fas fa-check" /></span>Unlimited Meeting Time</li>
              <li className="d-inline-flex align-items-center"><span><i className="fas fa-check" /></span>Upto 50 People Meeting</li>
              <li className="d-inline-flex align-items-center"><span><i className="fas fa-check" /></span>100 GB Cloud Storage </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-10" data-aos="fade-up" data-aos-duration={800} data-aos-once="true">
        <div className="card card--pricing-l3-1">
          <div className="card--pricing-l3-1__head">
            <h6>Advanced plan</h6>
          </div>
          <div className="card--pricing-l3-1__price">
            <h2>$99/mo</h2>
            <span>$990 billed annualy</span>
            <div className="price-l3-btn">
              <Link to="/" className="btn focus-reset">Get Started <i className="fas fa-arrow-right" /></Link>
            </div>
          </div>
          <div className="price-l3-border" />
          <div className="card--pricing-l3-1__service">
            <ul className="list-unstyled">
              <li className="d-inline-flex align-items-center"><span><i className="fas fa-check" /></span>02 Active Accounts</li>
              <li className="d-inline-flex align-items-center"><span><i className="fas fa-check" /></span>Unlimited Meeting Time</li>
              <li className="d-inline-flex align-items-center"><span><i className="fas fa-check" /></span>Upto 50 People Meeting</li>
              <li className="d-inline-flex align-items-center"><span><i className="fas fa-check" /></span>500 GB Cloud Storage</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-10" data-aos="fade-left" data-aos-duration={800} data-aos-once="true">
        <div className="card card--pricing-l3-1">
          <div className="card--pricing-l3-1__head">
            <h6>Enterprise plan</h6>
          </div>
          <div className="card--pricing-l3-1__price">
            <h2>$149/mo</h2>
            <span>$1300 billed annualy</span>
            <div className="price-l3-btn">
            <Link to="/" className="btn focus-reset">Get Started <i className="fas fa-arrow-right" /></Link>
            </div>
          </div>
          <div className="price-l3-border" />
          <div className="card--pricing-l3-1__service">
            <ul className="list-unstyled">
              <li className="d-inline-flex align-items-center"><span><i className="fas fa-check" /></span>02 Active Accounts</li>
              <li className="d-inline-flex align-items-center"><span><i className="fas fa-check" /></span>Unlimited Meeting Time</li>
              <li className="d-inline-flex align-items-center"><span><i className="fas fa-check" /></span>Upto 50 People Meeting</li>
              <li className="d-inline-flex align-items-center"><span><i className="fas fa-check" /></span>1 TB Cloud Storage</li>
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

export default PricingSection
