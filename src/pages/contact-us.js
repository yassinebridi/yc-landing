import React from "react"
import Link from "../components/Link"
import { Form } from "react-bootstrap";
import { FooterSection } from "../sections/InnerPages"
import PageWrapper from "../components/PageWrapper"
const ContactUs = () => {
  return (
    <PageWrapper innerPageHeader={true}>
      <div className="contact-us-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact-us-banner text-center">
                <h2>Contact us</h2>
                <p>
                  Have a question or just want to say hi? We'd love to hear from
                  you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-us-form-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Form
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="contact-us-form"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="name">Your name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        placeholder="Enter your first & last name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="number"
                        name="phone"
                        id="phone"
                        className="form-control"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="email">Your email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        className="form-control"
                        placeholder="Enter a subject line"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="subject">Message</label>
                      <textarea
                        className="form-control"
                        placeholder="Write your message"
                        id="message"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button className="btn focus-reset"  type="submit">Send</button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
          <div className="row contact-get-in-touch-area">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="get-in-touch-single">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={36}
                    height={35}
                    viewBox="0 0 36 35"
                  >
                    <g>
                      <g>
                        <path
                          fill="#416ff4"
                          d="M3.6 18.421H9c1.988 0 3.6 1.65 3.6 3.684v9.21C12.6 33.352 10.988 35 9 35H3.6C1.612 35 0 33.35 0 31.316V18.42C0 8.247 8.059 0 18 0s18 8.247 18 18.421v12.895C36 33.35 34.388 35 32.4 35H27c-1.988 0-3.6-1.65-3.6-3.684v-9.21c0-2.035 1.612-3.685 3.6-3.685h5.4c0-8.139-6.447-14.737-14.4-14.737S3.6 10.282 3.6 18.421z"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="content">
                  <h4>Help &amp; support</h4>
                  <p>
                    Email <a href="https://uxtheme.net/product-support/">support@appextheme.com</a>
                    <br />
                    for help with a current product or service or refer to FAQs
                    and developer tools
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="get-in-touch-single">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={30}
                    viewBox="0 0 30 30"
                  >
                    <g>
                      <g>
                        <path
                          fill="#f7e36d"
                          d="M30.108 22.422v5.934c0 .882-.68 1.614-1.56 1.675-.734.05-1.333.077-1.796.077C11.922 30.108-.1 18.088-.1 3.257c0-.464.025-1.063.077-1.796A1.678 1.678 0 0 1 1.652-.1h5.934a.84.84 0 0 1 .836.755c.039.386.074.693.108.927a23.33 23.33 0 0 0 2.027 6.714.765.765 0 0 1-.247.952L6.69 11.836a21.896 21.896 0 0 0 11.485 11.486l2.585-3.615a.775.775 0 0 1 .962-.25 23.33 23.33 0 0 0 6.713 2.022c.233.034.54.07.923.107a.84.84 0 0 1 .753.836z"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="content">
                  <h4>Call us</h4>
                  <p>
                    Call us to speak to a member of our team.
                    <br />
                    <Link to="/"> + 578 305 045 883</Link>
                    <br />
                    <Link to="/"> + 781 300 047 883</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="get-in-touch-single">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={35}
                    height={35}
                    viewBox="0 0 35 35"
                  >
                    <g>
                      <g>
                        <path
                          fill="#2bd67b"
                          d="M1.244 12.525c-.87-.29-.879-.758.016-1.057L33.072.865c.882-.293 1.387.2 1.14 1.063l-9.09 31.81c-.25.882-.758.912-1.132.075L18 20.333 28 7 14.667 17 1.244 12.525z"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="content">
                  <h4>PR</h4>
                  <p>
                    Get in touch with Assembly for media resources.
                    <br />
                    <Link to="/"> support@appextheme.com</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="contact-us-supp-btn">
                <button className="btn focus-reset">Support Center</button>
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

export default ContactUs
