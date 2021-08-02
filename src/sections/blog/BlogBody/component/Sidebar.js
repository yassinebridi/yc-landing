import React from "react"
import Link from "../../../../components/Link"
// import Blog from '../../../../assets/image/blog/blog-img-1.png'
import PostRecent from "./PostRecent"

import postRecent from "../../../../assets/image/blog/post-img-1.png"
import postRecent2 from "../../../../assets/image/blog/post-img-2.png"
import postRecent3 from "../../../../assets/image/blog/post-img-3.png"
import postRecent4 from "../../../../assets/image/blog/post-img-4.png"
import postRecent5 from "../../../../assets/image/blog/post-img-5.png"
const Sidebar = ({ image }) => {
  return (
    <>
      <div className="blog-right-sidebar">
        <form className="search-form position-relative" action="#" method="get">
          <input
            type="text"
            name="s"
            id="search"
            className="form-control"
            placeholder="Type to search"
          />
          <button type="submit" className="search-submit focus-reset">
            <i className="fas fa-search" />
          </button>
        </form>
        <div className="recent-posts">
          <h2>Recent Posts</h2>
          <PostRecent
            image={postRecent}
            title="Efficiently unleash cross"
            date="Mar 20, 2020"
          />
          <PostRecent
            image={postRecent2}
            title="Efficiently unleash cross"
            date="Mar 20, 2020"
          />
          <PostRecent
            image={postRecent3}
            title="Efficiently unleash cross"
            date="Mar 20, 2020"
          />
          <PostRecent
            image={postRecent4}
            title="Efficiently unleash cross"
            date="Mar 20, 2020"
          />
          <PostRecent
            image={postRecent5}
            title="Efficiently unleash cross"
            date="Mar 20, 2020"
          />
        </div>
        <div className="blog-categories">
          <h2>Categories </h2>
          <div className="categories-item">
            <ul className="list-unstyled">
              <li>
                <Link to="/">Technology</Link>
              </li>
              <li>
                <Link to="/">Business</Link>
              </li>
              <li>
                <Link to="/">Marketing</Link>
              </li>
              <li>
                <Link to="/">Cyber Security</Link>
              </li>
              <li>
                <Link to="/">Gaming</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
