import React from "react"
import Link from "../../../components/Link"
import TeamCard from "./components/Card"
import Data from "./data"
const TeamSection = ({ className }) => {
  return (
    <>
      {/*Team Section*/}
      <div className={`team-area ${className ? className : ""}`}>
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xl-6 col-lg-8 col-md-10"
              data-aos="fade-in"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="section__heading text-center">
                <h2>Meet our team</h2>
                <p>
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches to corporate
                  strategy.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center about-team-item">
            {Data.map((item, index) => {
              return (
                <div
                  className="col-lg-3 col-sm-6 col-10"
                  data-aos="fade-up"
                  data-aos-duration={800}
                  data-aos-once="true"
                  key={index}
                >
                  <TeamCard
                    title={item.title}
                    subtitle={item.subtitle}
                    image={item.image}
                  />
                </div>
              )
            })}

            <div
              className="col-lg-3 col-sm-6 col-10"
              data-aos="fade-up"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="about-team-card">
                <div className="about-team-card__view-open text-center">
                  <h4>Interested to become part of team ?</h4>
                  <Link to="/" className="btn focus-reset">
                    View opening
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TeamSection
