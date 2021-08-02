import React from "react"
import Card from "../components/Card"
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
      <div className="portfolio--details-section" id="portfolio-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="iso-mas-grid-wrap">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="masonry-grid"
                  columnClassName="masonry-grid_column"
                >
                  {data.masonryDetails.map(
                    ({ image, titleSmall, title}, index) => {
                      return (
                        <Card
                          image={image}
                          titleSmall={titleSmall}
                          title={title}
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
