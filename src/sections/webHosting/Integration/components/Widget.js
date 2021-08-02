import React from "react"
import { Link } from "../../../../components/Link"

const Widget = ({ icon, title }) => {
  return (
    <>
      <div className="integrated-block">
        <div className="d-flex align-items-center">
          <div className="icon">
            <img src={icon} alt="icon" />
          </div>
          <div className="content">
            <h6>{title}</h6>
            <span>
              <Link to="/">Learn more</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Widget
