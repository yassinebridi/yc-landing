import React from "react"

const FeatureWidget = ({ iconImage, title, text, cardClass }) => {
  return (
    <>
      <div className={`d-flex feature-l4-widget ${cardClass}`}>
        <div className="feature-l4-widget__icon">
          <img src={iconImage} alt="widget" />
        </div>
        <div className="feature-l4-widget__content">
          <h4 dangerouslySetInnerHTML={{ __html: title }} />
          <p>{text}</p>
        </div>
      </div>
    </>
  )
}

export default FeatureWidget
