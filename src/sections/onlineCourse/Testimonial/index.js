import React,{useRef} from "react"
import Slider from "react-slick"
import Slide from "./Slide"
import {TestimonialData} from "./data"
import backgroundImage from "../../../assets/image/landing-9/map.png"
import partImage1 from "../../../assets/image/landing-9/testimonial-1.png"
import partImage2 from "../../../assets/image/landing-9/testimonial-2.png"
import partImage3 from "../../../assets/image/landing-9/testimonial-3.png"
import partImage4 from "../../../assets/image/landing-9/testimonial-4.png"
import partImage5 from "../../../assets/image/landing-9/testimonial-5.png"

const TestimonialSection = () => {
  const elSlider = useRef();

  const slickSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    swipe: true,
    infinite: true,
    autoplaySpeed: 2000,
    arrows:false,
    responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1
            }
        }
        
    ]
  }
  return (
    <>
      <div className="testimonial-area-l9-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-10">
              <div className="section__heading-2 text-center">
                <h2>Love form students</h2>
                <p>
                  Podcasting operational change management inside of workflows
                  to establish a framework. Taking seamless key performance{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-12"
              data-aos="zoom-in"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div
                className="testimonial-area-l9-1--content bg-position"
                style={{ background: `url(${backgroundImage})` }}
              >
                <div className="testimonial-l9-image-group">
                  <div className="image-1">
                    <img src={partImage1} alt="testimonial" />
                  </div>
                  <div className="image-2">
                    <img src={partImage2} alt="testimonial" />
                  </div>
                  <div className="image-3">
                    <img src={partImage3} alt="testimonial" />
                  </div>
                  <div className="image-4">
                    <img src={partImage4} alt="testimonial" />
                  </div>
                  <div className="image-5">
                    <img src={partImage5} alt="testimonial" />
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-xl-5 col-lg-6 col-md-9 col-sm-12">
                    <div className="slider-l9-main">
                      <div className="l9-slider-arrow-2">
                      <button type="button" aria-label="arrow" onClick={() =>  elSlider.current.slickNext()} className="btn-reset px-0"><i className="prev9-1 fas fa-angle-left slick-arrow" /></button>
                <button type="button" aria-label="arrow" onClick={() =>  elSlider.current.slickNext()} className="btn-reset px-0"><i className="next9-1 fas fa-angle-right slick-arrow" /></button>
                        
                        
                      </div>
                      <Slider
                        ref={elSlider}
                        {...slickSettings}
                        className="testimonial-slider-l9-1"
                      >
                        {TestimonialData.map((item, index) => (
                            <Slide image={item.image} text={item.text} user={item.user} key={index}/>
                        ))}
                      </Slider>
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


export default TestimonialSection;