import React from "react"

const Widget = ({ icon, title, text, iconClass }) => {
  return (
    <>
      <div className={`feature-widget text-center `}>
        <div className={`feature-widget-icon ${iconClass}`}>
          <i className={icon} />
        </div>
        <div className="feature-widget-content">
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
      </div>
    </>
  )
}

export default Widget
