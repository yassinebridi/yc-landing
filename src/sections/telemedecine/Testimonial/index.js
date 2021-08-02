import React, { useRef } from "react"
import Slider from "react-slick"
import Slide from "./Slide"
import { TestimonialData } from "./data"
import backgroundImage from "../../../assets/image/landing-4/map_bg.png"
// import partImage1 from "../../../assets/image/landing-9/testimonial-1.png"
// import partImage2 from "../../../assets/image/landing-9/testimonial-2.png"
// import partImage3 from "../../../assets/image/landing-9/testimonial-3.png"
// import partImage4 from "../../../assets/image/landing-9/testimonial-4.png"
// import partImage5 from "../../../assets/image/landing-9/testimonial-5.png"

const TestimonialSection = () => {
  const elSlider = useRef()

  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    arrows:false
  }
  return (
    <>
      <div className="testimonial-area-l4">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xl-6 col-lg-7 col-md-10"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="section__heading text-center">
                <h2>Lots of love form people around the world</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xxl-8 col-xl-9 col-lg-11">
              <Slider
                ref={elSlider}
                {...slickSettings}
                className="testimonial-l4-slider bg-position"
                style={{background: `url(${backgroundImage})`}}
              >
                {TestimonialData.map((item, index) => (
                  <Slide text={item.text} user={item.user} key={index} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TestimonialSection
