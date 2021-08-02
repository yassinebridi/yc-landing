import React from "react"
import Link from "../../../components/Link"
import JobCard from './components/Card'
import {jobData} from './data'
const JobSection = () => {
  return (
    <>
      {/* Career Job opening Area */}
      <div className="career-job-opening-area bg-catskillwhite">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section__heading text-center">
                <h2>Current job openings</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-10 career-job-card-items"
              data-aos="fade-up"
              data-aos-duration={800}
              data-aos-once="true"
            >
              {jobData.map(({title,location,type},index)=>{
                  return(
                        <JobCard title={title} location={location} type={type} key={index}/>
                  )
              })}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="career-job-opening-btn text-center">
                <Link className="btn focus-reset" to="/">View All Opening</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default JobSection
