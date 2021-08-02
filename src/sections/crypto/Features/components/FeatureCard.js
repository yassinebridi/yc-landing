import React from "react"

const FeatureCard = ({ count, title, text, cardClass }) => {
  return (
    <>
      <div className={`feature-l5-1-items__card text-center ${cardClass}`}>
        <div className="number">
          <span>{count}</span>
        </div>
        <div className="content">
          <h4>{title} </h4>
          <p>{text}</p>
        </div>
      </div>
    </>
  )
}

export default FeatureCard
