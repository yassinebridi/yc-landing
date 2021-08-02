import React from 'react'
import Link  from "../../../../components/Link";


const Card =({image,title,text})=>{
    return(
        <div className="case-studies-card">
        <div className="case-studies-card__image">
          <Link to="/case-study-details" className="d-block"> <img className="w-100" src={image} alt="case-stidies"/></Link>
        </div>
        <div className="case-studies-card__content">
          <h4><Link to="/case-study-details">{title}</Link></h4>
          <p>{text}</p>
          <Link to="/case-study-details" className="btn focus-reset">See Case Study</Link>
        </div>
      </div>
    )
}

export default Card;