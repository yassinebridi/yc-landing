import React from "react"
import Link from "../../../../components/Link"

export default function Card({image,titlSmall,title}) {
  return (
    <>
      <div className="portfolio-card portfolio-card-masonry-1">
        <Link to="/portfolio-details" className="card-image d-block">
          <img
            src={image}
            alt="portfolio"
            className="w-100"
          />
        </Link>
        <div className="text-center content-area-grid-1   d-block ">
          <span className=" d-block ponter-event-none">{titlSmall}</span>
          <h3>{title}</h3>
        </div>
      </div>
    </>
  )
}
