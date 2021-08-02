import React from "react"
import Link from "../../../components/Link"
import { Accordion } from "react-bootstrap"
import AccordionItem from "../../../components/Accordion/AccordionItem"
import { faqData, faqData2 } from "./data"
const FaqSection = () => {
  return (
    <>
      <div className="faq-area-l9-1 bg-bunting-aprx">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="section__heading-2">
                <h2>
                  Frequently <br className="d-md-block d-none" />
                  asked questions ?
                </h2>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-left"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="section__heading-2">
                <p>
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches to corporate
                  strategy foster collaborative thinking to further
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-5"
              data-aos="fade-right"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="faq-l9-1">
                <Accordion className="accordion p-0">
                  {faqData.map(({ accKey, question, answer }, index) => {
                    return (
                      <AccordionItem
                        question={question}
                        answer={answer}
                        accKey={accKey}
                        key={index}
                      />
                    )
                  })}
                </Accordion>
              </div>
            </div>
            <div
              className="offset-lg-1 col-lg-6"
              data-aos="fade-left"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="faq-l9-1">
              <Accordion className="accordion p-0">
                  {faqData2.map(({ accKey, question, answer }, index) => {
                    return (
                      <AccordionItem
                        question={question}
                        answer={answer}
                        accKey={accKey}
                        key={index}
                      />
                    )
                  })}
                </Accordion>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-12"
              data-aos="fade-up"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="cta-area-l9-1">
                <div className="row justify-content-between align-items-center">
                  <div className="col-xl-6 col-lg-8 col-md-7">
                    <div className="cta-area-l9-1__content">
                      <h2>
                        10K+ Students take this course. What are you waiting
                        for?
                      </h2>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-4 col-md-5">
                    <div className="cta-area-l9-1__btn text-md-end">
                      <Link to="/" className="btn">Get Started Now</Link>
                    </div>
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

export default FaqSection
