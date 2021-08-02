import React from "react"

const Card = ({ icon, title }) => {
  return (
    <>
      <div className="feature-card">
        <h4>{title} </h4>
        <img src={icon} alt="icon" />
      </div>
    </>
  )
}

export default Card
