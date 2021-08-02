import React from "react"
import Card from "./components/CaseCard"
import caseData from "../../../data/caseData"
const OtherCase = () => {
  return (
    <>
      <div className="other-case-study-area bg-catskillwhite">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section__heading text-center">
                <h2>Other Case Studies</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center case-studies-items">
            {caseData.slice(0, 3).map(({ image, text, title }, index) => {
              return (
                <div className="col-lg-4 col-md-6 col-12">
                  <Card key={index} image={image} text={text} title={title} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default OtherCase

