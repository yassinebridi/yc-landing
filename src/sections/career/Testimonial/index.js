import React from "react"
import TestimonialImage from "../../../assets/image/career/testimonial-img.png"
import quote from "../../../assets/image/career/quote.png"
const TestinomialSection = () => {
  return (
    <>
      {/* Career Testimonial Area */}
<div className="career-testimonial-area">
  <div className="container">
    <div className="row justify-content-center align-items-center">
      <div className="col-lg-5 col-md-8" data-aos="fade-right" data-aos-duration={800} data-aos-once="true">
        <div className="career-testimonial-img">
          <img className="w-100" src={TestimonialImage} alt="testimonial" />
        </div>
      </div>
      <div className="offset-lg-1 col-lg-6 col-md-8" data-aos="fade-left" data-aos-duration={800} data-aos-once="true">
        <div className="career-testimonial-content">
          <div className="quote">
            <img src={quote} alt="quote" />
          </div>
          <h4>Appex is truly an amazing company. Everyone’s opinion is valued, and the growth that I’ve seen really
            incredible. Highly recommend who want to join Appex.</h4>
          <h6>Ann Franklin</h6>
          <span>Product Designer</span>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default TestinomialSection;
