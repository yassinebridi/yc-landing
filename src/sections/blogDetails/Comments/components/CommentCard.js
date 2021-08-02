import React from "react"
import Link from "../../../../components/Link"
const Card = ({ image,date,title,text }) => {
  return (
    <>
        <div className="comment-card">
        <div className="d-flex">
          <div className="comment-author-img">
            <Link to="#">
              <img src={image} alt="author" />
            </Link>
          </div>
          <div className="author-name-date">
            <h4>{title}</h4>
            <span>{date}</span>
          </div>
        </div>
        <div className="comment-content">
          <p>
          {text}
          </p>
        </div>
      </div>

    </>
  )
}

export default Card
