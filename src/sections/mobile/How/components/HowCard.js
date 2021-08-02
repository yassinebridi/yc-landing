import React from "react"

const HowCard = ({ image, count, title, text }) => {
  return (
    <div className="card how-it--card text-center">
      <div className="how-it--card__icon">
        <img src={image} alt="icon" />
      </div>
      <div className="how-it--card__number">
        <span>{count}</span>
      </div>
      <div className="how-it--card__headeing">
        <h4>{title}</h4>
      </div>
      <div className="how-it--card__content">
        <p>{text}</p>
      </div>
    </div>
  )
}


export default HowCard;