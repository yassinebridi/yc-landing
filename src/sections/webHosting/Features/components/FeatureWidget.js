import React from "react"

const Widget = ({ icon, title, text }) => {
  return (
    <>
      <div className="widget widget--feature-l8-1">
        <div className="d-flex align-items-center">
          <div className="widget--feature-l8-1__icon">
            <i className={icon} />
          </div>
          <div className="widget--feature-l8-1__head">
            <h4>{title}</h4>
          </div>
        </div>
        <div className="widget--feature-l8-1__content">
          <p>{text}</p>
        </div>
      </div>
    </>
  )
}

export default Widget
