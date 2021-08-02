import React from "react"

const widget = ({ icon, title, text }) => {
  return (
    <div className="d-flex video-fea-l4-widget">
      <div className="video-fea-l4-widget__icon">
        <i className={icon} />
      </div>
      <div className="video-fea-l4-widget__content">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default widget
