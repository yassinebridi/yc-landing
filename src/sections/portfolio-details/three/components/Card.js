import React from "react"
import ModalImage from "react-modal-image";
export default function Card({image,titleSmall,title}) {
  return (
    <>
      <div className="portfolio-card portfolio-card-masonry-1">
      <ModalImage
        small={image}
        medium={image}
        alt="khabar dabar"
        className="card-image"
      />
      </div>
    </>
  )
}
