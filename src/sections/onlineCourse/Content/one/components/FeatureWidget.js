import React from "react"

const Widget = ({ icon, title, text }) => {
  return (
    <>
     <div className="widget widget--feature-l9-1">
          <div className="d-flex">
            <div className="widget--feature-l9-1__icon ">
              <i className={icon}></i>
            </div>
            <div className="widget--feature-l9-1__content">

              <h4>{title}</h4>
              <p>{text}</p>
            </div>
          </div>
        </div>
    </>
  )
}

export default Widget
