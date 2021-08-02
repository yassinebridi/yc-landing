import React from "react"
import Link from "../../../../components/Link"
const TeamCard = ({ title, image }) => {
  return (
    <div className="card card-doctor-identity">
      <div className="doctor-list-l4-item__image text-center">
        <img src={image} alt="team" />
      </div>
      <div className="doctor-list-l4-item__content text-center">
        <h4>title</h4>
        <p>
          Specialist, MD in Immune System
          <br className="d-none d-sm-block" /> Disorders (ISD)
        </p>
      </div>
      <div className="doctor-list-l4-item__list">
        <ul className="list-unstyled">
          <li>
            <span>•</span> Asthma, eczema, food allergies
          </li>
          <li>
            <span>•</span> Heart attack, high blood pressure
          </li>
          <li>
            <span>•</span> Colon cancer, hemorrhoids
          </li>
        </ul>
      </div>
      <div className="doctor-list-l4-item__button">
        <div className="d-flex justify-content-between">
          <Link to="/" className="btn btn--call-now focus-reset">
            Call Now
          </Link>
          <Link to="/" className="btn btn--availability focus-reset">
            Availability
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TeamCard
