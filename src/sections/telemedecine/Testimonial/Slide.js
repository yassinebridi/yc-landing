import React from "react"

const TestimonialSlide = ({ text, user }) => {
  return (
    <div
      className="single-item focus-reset text-center"
      data-aos="fade-in"
      data-aos-duration="800"
      data-aos-once="true"
    >
      <div className="testimonial-l4-slider__star">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
      </div>
      <div className="testimonial-l4-slider__content">
        <div className="testimonial-l4-slider__quote">
          <i className="quote-left fas fa-quote-left"></i>
          <i className="quote-right fas fa-quote-right"></i>
        </div>
        <p>{text}</p>
      </div>
      <div className="testimonial-l4-slider__name">
        <span>- {user}</span>
      </div>
    </div>
  )
}

export default TestimonialSlide
