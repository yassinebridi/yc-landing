import React from "react"
import Link  from "../components/Link"
import { FooterSection } from "../sections/InnerPages"
import errorImage from "../assets/image/404.png"
import PageWrapper from '../components/PageWrapper'
const ErrorPage = () => {
  return (
    <PageWrapper innerPageHeader={true}>
        <div className="thank-you-page">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10">
                <div className="thankyou-content text-center">
                  <img className="w-100" src={errorImage} alt="404" />
                  <h2>404 Error</h2>
                  <p>
                    Ups! It seems like the page you are looking for is not
                    available! Please try again with another page or go back to
                    home.
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

export default ErrorPage
