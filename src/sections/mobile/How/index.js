import React from "react";
import HowCard from "./components/HowCard"
import CardIconOne from "../../../assets/image/landing-2/icon-1.png"
import CardIconTwo from "../../../assets/image/landing-2/icon-2.png"
import CardIconThree from "../../../assets/image/landing-2/icon-3.png"
const data = [
    {
    icon:CardIconOne,
    title:"Onboarding",
    text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore"
  },
    {
      icon:CardIconTwo,
      title:"Request offer",
      text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore"
    },
    {
      icon:CardIconThree,
      title:"Get it done",
      text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore"
  }
  ] 
const HowSection = () => {
  return (
    <>
      {/* How It works */}
      <div className="how-it-works-area bg-bunting-aprx">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xxl-5 col-xl-6 col-lg-7 col-md-9"
              data-aos="fade-in"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="section__heading text-center">
                <h2 className="text-white">How its works</h2>
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempo.
                </p>
              </div>
            </div>
          </div>
          <div className="row how-it-works-items justify-content-center">
            {data.map((item, key) => {
              return (
                <div
                  className="col-lg-4 col-md-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-duration={800}
                  data-aos-once="true"
                  key={key}
                >
                  <HowCard
                    count={key + 1 }
                    image={item.icon}
                    title={item.title}
                    text={item.text}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}


export default HowSection;