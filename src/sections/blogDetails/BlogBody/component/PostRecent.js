import React from 'react'
import Link from "../../../../components/Link"
const PostRecent = ({image,title,date})=>{
    return(
        <div className="d-flex recent-post-item">
            <div className="post-img">
                <Link to="/blog-details">
                <img
                    className="w-100"
                    src={image}
                    alt="blog"
                />
                </Link>
            </div>
            <div className="post-content">
                <div className="post-title">
                <h4>
                    <Link to="/blog-details">
                        {title}
                    </Link>
                </h4>
                </div>
                <div className="post-date">
                <p>
                    <i className="far fa-calendar" />
                    <Link to="#">{date}</Link>
                </p>
                </div>
            </div>
            </div>
    )
}

export default PostRecent;