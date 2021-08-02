import React from "react"
import Link from "../components/Link"
import { FooterSection } from "../sections/InnerPages"
import ThankYouImage from "../assets/image/thankyou.png"
import PageWrapper from '../components/PageWrapper'
const ThankYouPage = () => {
  return (
    <PageWrapper  innerPageHeader={true}>
      {/* Thank you  Area  */}
      <div className="thank-you-page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10">
              <div className="thankyou-content text-center">
                <img className="w-100" src={ThankYouImage} alt="Thank you" />
                <h2>Thank You</h2>
                <p>
                  You are awesome! Thanks for choosing our service. We will get
                  back to you soon with more details.
                </p>
                <div className="back-to-btn">
                  <Link to="/" className="btn focus-reset">
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Area */}
      <FooterSection />
    </PageWrapper>
  )
}

export default ThankYouPage
