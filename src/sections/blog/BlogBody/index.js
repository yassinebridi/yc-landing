import React from "react"
import Link  from "../../../components/Link";
import Card from "./component/Card"
import Sidebar from "./component/Sidebar"
import BlogCardImage from '../../../assets/image/blog/blog-img-1.png';
const BlogBody = () => {
  return (
    <>
      <div className="blog-main-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-7 order-md-0 order-1 blog-all-items">
              <Card image={BlogCardImage} title="Bring to the table win-win survival strategies to ensure proactive customer service." text="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line." date="Mar 20, 2020" commentCount="5"/>
              <Card image={BlogCardImage} title="Bring to the table win-win survival strategies to ensure proactive customer service." text="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line." date="Mar 20, 2020" commentCount="3"/>
              <Card image={BlogCardImage} title="Bring to the table win-win survival strategies to ensure proactive customer service." text="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line." date="Mar 20, 2020" commentCount="10"/>
             
            </div>
            <div className="col-lg-4 col-md-5 col-sm-10 order-md-1 order-0">
              <Sidebar/>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-pagination">
                <ul className="list-unstyled">
                  <li>
                    <Link className="active" to="#">
                      1
                    </Link>
                  </li>
                  <li>
                    <Link to="/">2</Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fas fa-long-arrow-alt-right" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogBody
