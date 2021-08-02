import React from "react"
import Link from "../../../components/Link"
const PricingSection = ({ ...rest }) => {
  return (
    <>
      {/* Pricing Area */}
      <div className="priceing-area-l8-1">
        <div
          className="container"
          id="table-price-value"
          data-pricing-dynamic
          data-value-active="monthly"
        >
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-5">
              <div className="text-center">
                <div className="section__heading">
                  <h2>Pricing &amp; Plans</h2>
                </div>
                <div className="toggle-btn d-inline-block">
                  <Link
                    className="btn-toggle btn-toggle-2 btn-toggle-8 d-flex mx-6 price-deck-trigger"
                    data-pricing-trigger
                    data-target="#table-price-value"
                    to="/"
                  >
                    <span className="round" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-12"
              data-aos="zoom-in"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="price_info_two">
                <div className="price_head">
                  <div className="p_head blank-area"></div>
                  <div className="p_head">
                    <h5>Free</h5>
                    <h2>
                      <span className="dynamic-value">$</span>
                      <span
                        className="dynamic-value"
                        data-active={15}
                        data-monthly={0}
                        data-yearly={50}
                      />
                    </h2>
                    <p>Per month </p>
                  </div>
                  <div className="p_head">
                    <h5>Team</h5>
                    <h2>
                      <span className="dynamic-value">$</span>
                      <span
                        className="dynamic-value"
                        data-active={15}
                        data-monthly={99}
                        data-yearly={120}
                      />
                    </h2>
                    <p>Per month </p>
                  </div>
                  <div className="p_head">
                    <h5>Popular</h5>
                    <h2>
                      <span className="dynamic-value">$</span>
                      <span
                        className="dynamic-value"
                        data-active={15}
                        data-monthly={150}
                        data-yearly={200}
                      />
                    </h2>
                    <p>Per month </p>
                  </div>
                  <div className="p_head">
                    <h5>Enterprise</h5>
                    <h2>
                      <span className="dynamic-value">$</span>
                      <span
                        className="dynamic-value"
                        data-active={15}
                        data-monthly={499}
                        data-yearly={550}
                      />
                    </h2>
                    <p>Per month </p>
                  </div>
                </div>
                <div className="price_body">
                  <div className="pr_list">
                    <div className="price_item">
                      <h5
                        className="pr_title"
                        data-toggle="tooltip"
                        data-placement="top"
                        data-original-title="Save time by using keyboard shortcuts all across SaasLand"
                      >
                        Website nuumber
                      </h5>
                    </div>
                    <div className="price_item" data-title="Free">
                      <span className="check">01</span>
                    </div>
                    <div className="price_item" data-title="Team">
                      <span className="check">10</span>
                    </div>
                    <div className="price_item" data-title="Popular">
                      <span className="check">Unlimited</span>
                    </div>
                    <div className="price_item" data-title="Enterprise">
                      <span className="check">Unlimited</span>
                    </div>
                  </div>
                  <div className="pr_list">
                    <div className="price_item">
                      <h5
                        className="pr_title"
                        data-toggle="tooltip"
                        data-placement="top"
                        data-original-title="Save time by using keyboard shortcuts all across SaasLand"
                      >
                        Server storger
                      </h5>
                    </div>
                    <div className="price_item" data-title="Free">
                      <span className="check">100GB</span>
                    </div>
                    <div className="price_item" data-title="Team">
                      <span className="check">100GB</span>
                    </div>
                    <div className="price_item" data-title="Popular">
                      <span className="check">Unlimited</span>
                    </div>
                    <div className="price_item" data-title="Enterprise">
                      <span className="check">Unlimited</span>
                    </div>
                  </div>
                  <div className="pr_list">
                    <div className="price_item">
                      <h5
                        className="pr_title"
                        data-toggle="tooltip"
                        data-placement="top"
                        data-original-title="Save time by using keyboard shortcuts all across SaasLand"
                      >
                        Database
                      </h5>
                    </div>
                    <div className="price_item" data-title="Free">
                      <span className="check">10</span>
                    </div>
                    <div className="price_item" data-title="Team">
                      <span className="check">15</span>
                    </div>
                    <div className="price_item" data-title="Popular">
                      <span className="check">Unlimited</span>
                    </div>
                    <div className="price_item" data-title="Enterprise">
                      <span className="check">Unlimited</span>
                    </div>
                  </div>
                  <div className="pr_list">
                    <div className="price_item">
                      <h5
                        className="pr_title"
                        data-toggle="tooltip"
                        data-placement="top"
                        data-original-title="Save time by using keyboard shortcuts all across SaasLand"
                      >
                        Unmetered bandwidth
                      </h5>
                    </div>
                    <div className="price_item" data-title="Free">
                      <span className="check">-</span>
                    </div>
                    <div className="price_item" data-title="Team">
                      <span className="check">
                        <i className="fas fa fa-check" />
                      </span>
                    </div>
                    <div className="price_item" data-title="Popular">
                      <span className="check">
                        <i className="fas fa fa-check" />
                      </span>
                    </div>
                    <div className="price_item" data-title="Enterprise">
                      <span className="check">
                        <i className="fas fa fa-check" />
                      </span>
                    </div>
                  </div>
                  <div className="pr_list">
                    <div className="price_item">
                      <h5
                        className="pr_title"
                        data-toggle="tooltip"
                        data-placement="top"
                        data-original-title="Save time by using keyboard shortcuts all across SaasLand"
                      >
                        SSD disk
                      </h5>
                    </div>
                    <div className="price_item" data-title="Free">
                      <span className="check">-</span>
                    </div>
                    <div className="price_item" data-title="Team">
                      <span className="check">-</span>
                    </div>
                    <div className="price_item" data-title="Popular">
                      <span className="check">
                        <i className="fas fa fa-check" />
                      </span>
                    </div>
                    <div className="price_item" data-title="Enterprise">
                      <span className="check">
                        <i className="fas fa fa-check" />
                      </span>
                    </div>
                  </div>
                  <div className="pr_list">
                    <div className="price_item">
                      <h5
                        className="pr_title"
                        data-toggle="tooltip"
                        data-placement="top"
                        data-original-title="Save time by using keyboard shortcuts all across SaasLand"
                      >
                        VCPUS Fontworld
                      </h5>
                    </div>
                    <div className="price_item" data-title="Free">
                      <span className="check">-</span>
                    </div>
                    <div className="price_item" data-title="Team">
                      <span className="check">-</span>
                    </div>
                    <div className="price_item" data-title="Popular">
                      <span className="check">
                        <i className="fas fa fa-check" />
                      </span>
                    </div>
                    <div className="price_item" data-title="Enterprise">
                      <span className="check">
                        <i className="fas fa fa-check" />
                      </span>
                    </div>
                  </div>
                  <div className="pr_list">
                    <div className="price_item">
                      <h5
                        className="pr_title"
                        data-toggle="tooltip"
                        data-placement="top"
                        data-original-title="Save time by using keyboard shortcuts all across SaasLand"
                      >
                        WordPress install
                      </h5>
                    </div>
                    <div className="price_item" data-title="Free">
                      <span className="check">-</span>
                    </div>
                    <div className="price_item" data-title="Team">
                      <span className="check">-</span>
                    </div>
                    <div className="price_item" data-title="Popular">
                      <span className="check">
                        <i className="fas fa fa-check" />
                      </span>
                    </div>
                    <div className="price_item" data-title="Enterprise">
                      <span className="check">
                        <i className="fas fa fa-check" />
                      </span>
                    </div>
                  </div>
                  <div className="pr_list">
                    <div className="price_item">
                      <h5
                        className="pr_title"
                        data-toggle="tooltip"
                        data-placement="top"
                        data-original-title="Save time by using keyboard shortcuts all across SaasLand"
                      >
                        Server speed
                      </h5>
                    </div>
                    <div className="price_item" data-title="Free">
                      <span className="check">-</span>
                    </div>
                    <div className="price_item" data-title="Team">
                      <span className="check">-</span>
                    </div>
                    <div className="price_item" data-title="Popular">
                      <span className="check">
                        <i className="fas fa fa-check" />
                      </span>
                    </div>
                    <div className="price_item" data-title="Enterprise">
                      <span className="check">
                        <i className="fas fa fa-check" />
                      </span>
                    </div>
                  </div>
                  <div className="pr_list pricing-get-strated-btn">
                    <div className="price_item" />
                    <div className="price_item">
                      <Link to="/" className="price_btn btn_hover">
                        Get started <i className="fas fa-arrow-right" />
                      </Link>
                    </div>
                    <div className="price_item">
                      <Link to="/" className="price_btn btn_hover">
                        Get started <i className="fas fa-arrow-right" />
                      </Link>
                    </div>
                    <div className="price_item price-get-started-btn-3">
                      <Link to="/" className="price_btn btn_hover">
                        Get started <i className="fas fa-arrow-right" />
                      </Link>
                    </div>
                    <div className="price_item">
                      <Link to="/" className="price_btn btn_hover">
                        Get started <i className="fas fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="feature-area-l8-2">
        <div className="container">
          <div className="row feature-area-l8-2__total-item">
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="feature-area-l8-2__heading">
                <h2>Building new website</h2>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="widget widget--feature-l8-2">
                <div className="d-flex">
                  <div className="widget--feature-l8-2__icon">
                    <i className="fas fa-play" />
                  </div>
                  <div className="widget--feature-l8-2__content">
                    <h4>Brand Experience</h4>
                    <p>
                      The Content Experience Framework arms marketers with a
                      scalable approach to creating personalized content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="widget widget--feature-l8-2">
                <div className="d-flex">
                  <div className="widget--feature-l8-2__icon ">
                    <i className="bg-secondary fas fa-chart-bar" />
                  </div>
                  <div className="widget--feature-l8-2__content">
                    <h4>Trends and Insights</h4>
                    <p>
                      The Content Experience Framework arms marketers with a
                      scalable approach to creating personalized.
                    </p>
                  </div>
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
