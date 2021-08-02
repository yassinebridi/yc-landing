import React from "react"

const TestimonialSlide = ({image,text,user}) => {
  return (
    <div className="single-item focus-reset text-center">
      <div className="slider-image">
        <img src={image} alt="testimonial" />
      </div>
      <div className="slider-content">
        <div className="quote-icon">
          <i className="fas fa-quote-left" />
        </div>
        <p>
          {text}
        </p>
      </div>
      <div className="user-identity">
        <span>- {user}</span>
      </div>
    </div>
  )
}

export default TestimonialSlide;