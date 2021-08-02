import React from "react"
import Sidebar from "./component/Sidebar"
import BlogCardImage from "../../../assets/image/blog/blog-img-1.png"
const BlogBody = () => {
  return (
    <>
      <div className="blog-details-main-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-7 order-md-0 order-1 blog-details-content">
              <div className="blog-single-image">
                <img
                  className="w-100"
                  src={BlogCardImage}
                  alt="Blog"
                />
              </div>
              <div className="blog-single-content-area">
                <p>
                  With over 25,000 customers worldwide, Appex is the world
                  leading analytics and marketing suite for Instagram and a
                  partner of the world's most-loved brands such as National
                  Geographic, Gucci, Marc Jacobs, Samsung, Emirates and more.
                </p>
                <p>
                  As a Customer Support Specialist, we expect you to be
                  up-to-date with the latest digital technologies and social
                  media trends. You should have excellent communication skills
                  and be able to assist our customers in a fast, efficient and
                  professional manner. If you enjoy fixing issues and helping
                  improve the overall customer experience, this job is for you!
                </p>
              </div>
              <div className="blog-singe-content-2">
                <h4>Summary of Completed Research</h4>
                <p>
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches to corporate
                  strategy foster collaborative thinking to further the overall
                  value proposition. Organically grow the holistic world view of
                  disruptive innovation via workplace diversity and empowerment.
                </p>
                <p>
                  Bring to the table win-win survival strategies to ensure
                  proactive domination. At the end of the day, going forward, a
                  new normal that has evolved from generation X is on the runway
                </p>
                <p>
                  Heading towards a streamlined cloud solution. User generated
                  content in real-time will have multiple touchpoints for
                  offshoring Capitalize on low hanging fruit to identify a
                  ballpark value added activity to beta test. Override the
                  digital divide with additional
                </p>
              </div>
              <div className="blog-singe-content-3">
                <h4>Security and Reliability</h4>
                <p>
                  Capitalize on low hanging fruit to identify a ballpark value
                  added activity to beta test. Override the digital divide with
                  additional clickthroughs from DevOps. Nanotechnology immersion
                  along the information highway will close the loop on focusing
                  solely on the bottom line.
                </p>
                <p>
                  Bring to the table win-win survival strategies to ensure
                  proactive domination. At the end of the day, going forward, a
                  new normal that has evolved from generation X
                </p>
              </div>
              <div className="blog-singe-content-4">
                <h4>Security and Reliability</h4>
                <p>
                  Bring to the table win-win survival strategies to ensure
                  proactive domination. At the end of the day, going forward, a
                  new normal that has evolved from generation X is on the runway
                  heading towards a streamlined cloud solution. User generated
                  content in real-time
                </p>
                <p>
                  Podcasting operational change management inside of workflows
                  to establish a framework. Taking seamless key performance
                  indicators offline to maximise the long tail. Keeping your eye
                  on the ball while performing a deep dive on the start-up
                  mentality to derive convergence on cross-platform integration.
                </p>
                <p>
                  Completely synergize resource taxing relationships via premier
                  niche markets. Professionally cultivate one-to-one customer
                  service with robust ideas.
                </p>
              </div>
            </div>
            <div className="col-lg-4  col-md-5 col-sm-10 order-md-1 order-0 col-sm-10">
              <Sidebar/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogBody
