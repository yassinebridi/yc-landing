import React from "react"
import { FooterSection } from "../sections/InnerPages"
import PageWrapper from '../components/PageWrapper'
const Terms = () => {
  return (
    <PageWrapper innerPageHeader={true}>
      <div>
        <div className="terms-condition-banner">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="content text-center">
                  <h2>Terms &amp; Conditions</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="terms-condition-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-9">
                <div className="terms-con-content-1">
                  <p>
                    With over 25,000 customers worldwide, Appex is the world
                    leading analytics and marketing suite for Instagram and a
                    partner of the world's most-loved brands such as National
                    Geographic, Gucci, Marc Jacobs, Samsung, Emirates and more.
                  </p>
                  <p>
                    As a Customer Support Specialist, we expect you to be
                    up-to-date with the latest digital technologies and social
                    media trends. You should have excellent communication skills
                    and be able to assist our customers in a fast, efficient and
                    professional manner. If you enjoy fixing issues and helping
                    improve the overall customer experience, this job is for
                    you!
                  </p>
                </div>
                <div className="terms-license-area">
                  <h4>License</h4>
                  <ul className="list-unstyled">
                    <li>
                      <span>✓</span> Provide industry leading customer support
                      via e-mail, chat and social media
                    </li>
                    <li>
                      <span>✓</span> Improve the customer experience by taking a
                      proactive approach in solving
                    </li>
                    <li>
                      <span>✓</span> Take ownership of issues and follow
                      problems through to resolution.
                    </li>
                    <li>
                      <span>✓</span> Assist in developing customer support
                      procedures, policies and standards
                    </li>
                  </ul>
                </div>
                <div className="terms-con-content-2">
                  <h4>Embedded content from other websites</h4>
                  <p>
                    Articles on this site may include embedded content (e.g.
                    videos, images, articles, etc.). Embedded content from other
                    websites behaves in the exact same way as if the
                    visiwebsite.
                  </p>
                  <p>
                    These websites may collect data about you, use cookies,
                    embed additional third-party tracking, and monitor your
                    interaction with that embedded content, including tracking
                    your interaction with the embedded content if you have an
                    account and are logged in to that website.
                  </p>
                </div>
                <div className="terms-con-content-3">
                  <h4>Changes about terms</h4>
                  <p>
                    If we change our terms of use we will post those changes on
                    this page. Registered users will be sent an email that
                    outlines changes made to the terms of use.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Area */}
        <FooterSection />
      </div>
    </PageWrapper>
  )
}

export default Terms
