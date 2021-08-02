import React,{useRef} from "react"
import Widget from "./components/FeatureWidget"
import Card from "./components/FeatureCard"
import {featurewidgetData,featureSlider} from "./data"
import Slider from "react-slick"
const FeatureSection = ({ ...rest }) => {
  const elSlider = useRef()

  const slickSettings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      swipe: true,
      infinite: true,
      autoplaySpeed: 2000,
      arrows:false,
      responsive: [{
        breakpoint: 1199,
        settings: {
          // centerPadding: '10%',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          // centerPadding: '20px',
          slidesToShow: 1
        }
      }
    ]
  }
  return (
    <>
      {/* Features Area */}
      <div className="feature-area-l9-1">
        <div className="container">
          <div className="row feature-area-l9-1--items">
            {featurewidgetData.map((item, index) => {
              return (
                <div
                  className="col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-duration={800}
                  data-aos-once="true"
                  key={index}
                >
                  <Widget
                    title={item.title}
                    text={item.text}
                    icon={item.icon}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="feature-area-l9-2">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-9">
              <div className="section__heading-2">
                <h2>Featured Lessons </h2>
              </div>
            </div>
            <div className="col-md-6 col-sm-3">
              <div className="l9-slider-arrow-1 text-end">
                <button type="button" aria-label="arrow" onClick={() =>  elSlider.current.slickPrev()} className="btn-reset px-0"><i className="prev9  fas fa-arrow-left slick-arrow" /></button>
                <button type="button" aria-label="arrow" onClick={() =>  elSlider.current.slickNext()} className="btn-reset px-0"><i className="next9 fas fa-arrow-right slick-arrow" /></button>
              </div>
            </div>
          </div>
          <div className="row feature-items">
            <div className="col-12">
              <Slider ref={elSlider} {...slickSettings} className="feature-slider-l9-1">
                {featureSlider.map((item, index) => (
                  <div className="single-item" key={index}>
                    <Card image={item.image} title={item.title} subtitle={item.subtitle} lectureCount={item.lectureCount} letureDuration={item.letureDuration} subtitleColor={item.subtitleColor}/>
                  </div> 
                ))}
              </Slider>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-12"
              data-aos="zoom-in"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="text-center">
                <div className="explore-lessons-btn">
                  <button className="btn">Explore All Lessons</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeatureSection
