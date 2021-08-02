import React from "react"
import Link from "../../../components/Link"
import TeamCard from "./components/Card"
import imageOne from "../../../assets/image/landing-4/team-1.png"
import imageTwo from "../../../assets/image/landing-4/team-2.png"
import imageThree from "../../../assets/image/landing-4/team-3.png"
import imageFour from "../../../assets/image/landing-4/team-4.png"

const data = [
  {
    title: "",
    image: imageOne,
  },
  {
    title: "",
    image: imageTwo,
  },
  {
    title: "",
    image: imageThree,
  },
  {
    title: "",
    image: imageFour,
  },
]
const TeamSection = () => {
  return (
    <>
      {/* Doctor list  Area*/}
      <div className="doctor-list-area-l4">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-12"
              data-aos="fade-in"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="section__heading text-center">
                <h2>All the top doctor in one place</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center doctor-list-l4-item">
            {data.map((item, index) => {
              return (
                <div
                  className="col-xxl-3 col-lg-4 col-md-6 col-sm-10"
                  data-aos="fade-right"
                  data-aos-duration={800}
                  data-aos-once="true"
                  key={index}
                >
                  <TeamCard title={item.title} image={item.image} />
                </div>
              )
            })}
          </div>
          <div
            className="row"
            data-aos="zoom-in"
            data-aos-duration={800}
            data-aos-once="true"
          >
            <div className="col-lg-12">
              <div className="doc-list-explore-btn text-center">
                <Link to="/" className="btn focus-reset">
                  Explore all the doctors
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TeamSection
