import React from "react"
import BlogCard from "./components/BlogCard"
import Data from "./data"
const BlogSection = ({ ...rest }) => {
  return (
    <>
      {/* Blog Area */}
      <div className="blog-area-6 bg-catskillwhite">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div
                className="section__heading-2 text-center"
                data-aos="zoom-in"
                data-aos-duration={800}
                data-aos-once="true"
              >
                <h4>blog</h4>
                <h2>Latest From Blog</h2>
              </div>
            </div>
          </div>
          <div className="row blog-all-items justify-content-center">
            {Data.map((item, index) => {
              return (
                <div
                  className="col-xl-4 col-lg-6 col-md-6 col-sm-10"
                  data-aos="fade-up"
                  data-aos-duration={800}
                  data-aos-once="true"
                  key={index}
                >
                  <BlogCard
                    title={item.title}
                    image={item.image}
                    text={item.text}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogSection
