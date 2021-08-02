import React from "react"
// import { Link } from "gatsby"
import Card from "../components/CardTwo"
import Masonry from "react-masonry-css"
import data from "../../../../data/GalleryProducts"


export default function MainContent() {
  const breakpointColumnsObj = {
    default: 3,
    1200: 3,
    992: 3,
    768: 2,
    576: 1,
  }

 

  return (
    <>
      <div className="portfolio-section pt-90" id="portfolio-section">
       
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="iso-mas-grid-wrap">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="masonry-grid no-gutter"
                  columnClassName="masonry-grid_column"
                >
                  {data.masonryDetails.map(
                    ({ image, titleSmall, title }, index) => {
                      return (
                        <Card
                          image={image}
                          titleSmall={titleSmall}
                          title={title}
                          key={index + "pm"}
                        />
                      )
                    }
                  )}
                </Masonry>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
