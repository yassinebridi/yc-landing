import React from "react"
import Link from "../../../../components/Link"
import { IconLocation, IconClock } from "./Icons"
export default function JobCard() {
  return (
    <div className="career-job-card">
      <div className="d-flex justify-content-between align-items-center">
        <div className="career-job-card__content">
          <div className="job-title">
            <h6>Product Designer</h6>
          </div>
          <div className="job-details">
            <ul className="list-unstyled">
              <li>
                <IconLocation />
                <span>Backicing Home , NYC, USA</span>
              </li>
              <li>
                <IconClock />
                <span>Full-time</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="career-job-card__arrow">
          <Link to="#">
            <i className="fas fa-arrow-right" />
          </Link>
        </div>
      </div>
    </div>
  )
}
