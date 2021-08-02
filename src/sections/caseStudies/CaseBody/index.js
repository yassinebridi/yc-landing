import React from "react"
import Card from "./components/CaseCard"
import caseData  from "../../../data/caseData"
const CaseBody = () => {
  return (
    <>
      <div className="case-studies-area bg-catskillwhite">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xxl-7 col-xl-8 col-lg-9"
              data-aos="fade-up"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="case-studies-area-content text-center">
                <h2>Case Studies</h2>
                <p>
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches to corporate
                  strategy foster collaborative thinking.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center case-studies-items">
            {caseData.map(({ image, text, title }, index) => {
              return (
                <div className="col-lg-4 col-md-6 col-12">
                  <Card key={index} image={image} text={text} title={title}/>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default CaseBody
