import React from "react"
import Link from "../../../../components/Link"
const BlogCard = ({ image, title, text }) => {
  return (
    <>
      <div className="blog-card">
        <div className="blog-image">
          <Link to="/" className="d-block">
            <img className="w-100" src={image} alt="Blog" />
          </Link>
        </div>
        <div className="blog-content">
          <h4>
            <Link to="/">{title} </Link>
          </h4>
          <p>{text}</p>
          <div className="read-more-area d-flex align-items-center justify-content-between">
            <Link to="/">
              <span>Read more</span>
            </Link>
            <Link to="/">
              <i className="fas fa-angle-right" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogCard
