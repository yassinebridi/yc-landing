import React,{useState} from "react"
import  Link  from "../components/Link"
import { FooterSection } from "../sections/InnerPages"
import PageWrapper from '../components/PageWrapper'
const Pricing = () => {
  const [yearly,setYearly] = useState(false);
  return (
    <PageWrapper innerPageHeader={true}>
      <div className="pricing-area-l1-1 pricing-01-area">
      <div
          className="container"
          id="table-price-value"
          data-pricing-dynamic
          data-value-active={yearly ? "yearly" : "monthly"}
        >
          <div className="row justify-content-center text-center">
            <div className="col-xl-5 col-lg-6 col-md-8">
              <div className="section__heading">
                <h2>Pricing &amp; Plans</h2>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempo
                </p>
              </div>
              <div className="toggle-btn d-flex align-items-center justify-content-center">
                <h4>Monthly</h4>
                <button
                  className="btn-toggle btn-toggle-2 d-flex price-deck-trigger btn-reset"
                  data-pricing-trigger
                  onClick={() => setYearly(!yearly)}
                >
                  <span className="round" />
                </button>
                <h4>Yearly</h4>
                <h3>SAVE 20%</h3>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="price-card text-center">
                <h4>Personal</h4>
                <p>Only For One Person</p>
                <h2>
                  <span className="dynamic-value">$</span>
                  <span
                    className="dynamic-value"
                    data-active={15}
                    data-monthly={99}
                    data-yearly={59}
                  />
                </h2>
                <p>per month</p>
                
                <ul className="list-unstyled">
                  <li className="d-flex justify-content-center">
                    02 Active Accounts
                  </li>
                  <li className="d-flex justify-content-center">
                    Unlimited Meeting Time
                  </li>
                  <li className="d-flex justify-content-center">
                    Upto 50 People Meeting
                  </li>
                  <li className="d-flex justify-content-center">
                    500 GB Cloud Storage
                  </li>
                </ul>
                <Link to="/" className="btn btn--price focus-reset">
                  Get Started Now
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="price-card price-card-middle text-center">
                <h4>Team</h4>
                <p>Up to 30 people can use</p>
                <h2>
                  <span className="dynamic-value">$</span>
                  <span
                    className="dynamic-value"
                    data-active={15}
                    data-monthly={299}
                    data-yearly={199}
                  />
                </h2>
                
                <p>per month</p>
                
                <ul className="list-unstyled">
                  <li className="d-flex justify-content-center">
                    02 Active Accounts
                  </li>
                  <li className="d-inline-flex justify-content-center">
                    Unlimited Meeting Time
                  </li>
                  <li className="d-flex justify-content-center">
                    Upto 50 People Meeting
                  </li>
                  <li className="d-flex justify-content-center">
                    500 GB Cloud Storage
                  </li>
                </ul>
                <Link to="" className="btn btn--price focus-reset">
                  Get Started Now
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="price-card text-center">
                <h4>Enterprise</h4>
                <p>Best for you company unlimited</p>
                <h2>
                  <span className="dynamic-value">$</span>
                  <span
                    className="dynamic-value"
                    data-active={15}
                    data-monthly={599}
                    data-yearly={499}
                  />
                </h2>
                
                <p>per month</p>
                <ul className="list-unstyled text-center">
                  <li className="d-flex justify-content-center">
                    02 Active s
                  </li>
                  <li className="d-flex justify-content-center">
                    Unlimited Meeting Time
                  </li>
                  <li className="d-flex justify-content-center">
                    Upto 50 People Meeting
                  </li>
                  <li className="d-flex justify-content-center">
                    500 GB Cloud Storage
                  </li>
                </ul>
                <Link to="/" className="btn btn--price focus-reset">
                  Get Started Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
    </PageWrapper>
  )
}

export default Pricing
