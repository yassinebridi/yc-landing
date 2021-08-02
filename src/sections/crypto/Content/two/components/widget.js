import React from "react"

const Widget = ({ icon, title, text }) => {
  return (
    <div className="dashboard-feature-items__card">
      <div className="d-flex align-items-center">
        <i className={icon} />
        <h4>{title}</h4>
      </div>
      <div className="content">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Widget
