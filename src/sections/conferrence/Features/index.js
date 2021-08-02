import React from "react"
import Card from './components/FeatureCard'
import CardIconOne from '../../../assets/image/landing-3/video-icon.png';
import CardIconTwo from '../../../assets/image/landing-3/surface-icon.png';
import CardIconThree from '../../../assets/image/landing-3/dial-icon.png';
const data = [
  {
    icon: CardIconOne,
    title: "Online Meeting",
    cardClass:"card--feature-l9--1",
    text: "Our Smart Meeting Assistant – complete with notes, action items and highlights – ensures you're not wasting time on mundane tasks."
  },
  {
    icon: CardIconTwo,
    title: "Secure And Private",
    cardClass:"card--feature-l9--2",
    text: "Our Smart Meeting Assistant – complete with notes, action items and highlights – ensures you're not wasting time on mundane tasks."
  },
  {
    icon: CardIconThree,
    title: "International Dial",
    cardClass:"card--feature-l9--3",
    text: "Our Smart Meeting Assistant – complete with notes, action items and highlights – ensures you're not wasting time on mundane tasks."
  },
]
const FeatureSection = ({ ...rest }) => {
  return (
    <>
      {/* Feature Area */}
      <div className="feature-area-l3-1">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xxl-6 col-xl-7 col-lg-9 col-md-11"
              data-aos="fade-in"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="section__heading text-center">
                <div className="icon-area">
                  <i className="fas fa-users" />
                </div>
                <h2>We help you stay connected</h2>
                <p>
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches to corporate
                  strategy
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center feature-l9-items">
          {data.map((item,key)=>{return(
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-right"
              data-aos-duration={800}
              data-aos-once="true"
              key={key}
            >
              
                <Card iconImage={item.icon} title={item.title} text={item.text} cardClass={item.cardClass}/>
            </div>
              )})}
          </div>
        </div>
      </div>
    </>
  )
}

export default FeatureSection
