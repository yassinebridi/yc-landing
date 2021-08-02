import React from "react"
import Link from "../../../../components/Link"
const Card = ({ image,date,commentCount,title,text }) => {
  return (
    <div className="blog-item">
      <div className="blog-img">
        <Link to="/blog-details" className="d-block">
          <img className="w-100" src={image} alt="blog" />
        </Link>
      </div>
      <div className="blog-content-area">
        <div className="date-comment">
          <ul className="list-unstyled">
            <li>
              <i className="far fa-calendar" />
              <span>
                <Link to="#">{date}</Link>
              </span>
            </li>
            <li>
              <i className="far fa-comment" />
              <span>
                <Link to="#">{commentCount} Comments</Link>
              </span>
            </li>
          </ul>
        </div>
        <div className="blog-title">
          <h2>
            <Link to="/blog-details">
              {title}
            </Link>
          </h2>
        </div>
        <div className="blog-content">
          <p>
            {text}
          </p>
        </div>
        <div className="continue-text">
          <Link to="/blog-details">Continue Reading</Link>
        </div>
      </div>
    </div>
  )
}

export default Card
