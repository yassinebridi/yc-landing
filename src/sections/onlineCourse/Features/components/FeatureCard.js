import React from "react"

const Card = ({ image, title,subtitle, lectureCount,letureDuration,subtitleColor }) => {
  return (
    <>
     <div className="card card--feature-l9-2">
              <div className="card--feature-l9-2__image">
                <img className="w-100" src={image} alt="feture" />
              </div>
              <div className="card--feature-l9-2__content">
                <span className={subtitleColor?subtitleColor:""}>{subtitle}</span>
                <h4>{title}</h4>
                <div className="widget widget--lecture d-flex align-items-center">
                  <div className="widget--lecture-item">
                    <div className="d-flex align-items-center">
                      <div className="lecture-icon">
                        <i className="fas fa-book-open" />
                      </div>
                      <div className="lecture-text">
                        <span>{lectureCount} Lectures</span>
                      </div>
                    </div>
                  </div>
                  <div className="widget--lecture-item">
                    <div className="d-flex align-items-center">
                      <div className="lecture-time-icon">
                        <i className="far fa-clock" />
                      </div>
                      <div className="lecture-time-text">
                        <span>{letureDuration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </>
  )
}

export default Card
