import React,{useEffect,useState} from "react"
// import { Link } from "gatsby"
import Card from "../components/CardTwo"
import Masonry from "react-masonry-css"
import data from "../../../../data/GalleryProducts"


const TagButton = ({ name, handleSetTag, tagActive, children }) => {
    return (
      <button
        className={`tag btn-reset ${tagActive === name ? "active" : ""}`}
        onClick={() => handleSetTag(name)}
      >
        {children}
      </button>
    )
  }
export default function MainContent() {
  const breakpointColumnsObj = {
    default: 4,
    1200: 4,
    992: 3,
    768: 2,
    576: 1,
  }

  const [tag, setTag] = useState("all")
  const [filteredImages, setFilteredImages] = useState([])

  useEffect(() => {
    tag === "all"
      ? setFilteredImages(data.masonryDetails)
      : setFilteredImages(data.masonryDetails.filter(image => image.tagi === tag))
  }, [tag])

  return (
    <>
      <div className="portfolio-section" id="portfolio-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 portfolio-navbar">
              <ul
                className="nav isotope-nav justify-content-center"
                id="isotope-mas-filters"
              >
                <li className="nav-item">
                  <TagButton name="all" tagActive={tag} handleSetTag={setTag}>
                    ALL WORKS
                  </TagButton>
                </li>
                <li className="nav-item">
                  <TagButton
                    name="branding"
                    tagActive={tag}
                    handleSetTag={setTag}
                  >
                    BRANDING
                  </TagButton>
                </li>
                <li className="nav-item">
                  <TagButton name="ux" tagActive={tag} handleSetTag={setTag}>
                    UX DESIGN
                  </TagButton>
                </li>
                <li className="nav-item">
                  <TagButton
                    name="photography"
                    tagActive={tag}
                    handleSetTag={setTag}
                  >
                    PHOTOGRAPHY
                  </TagButton>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="iso-mas-grid-wrap">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="masonry-grid"
                  columnClassName="masonry-grid_column"
                >
                  {filteredImages.map(
                    ({ image, titleSmall, title,tagi,id }, index) => {
                      return (
                        <div className={`${tagi === tag | tag === "all" ?  "is-animated" :""} `}  key={index + "pm4c"}>
                        <Card
                          image={image}
                          titleSmall={titleSmall}
                          title={title}
                        />
                        </div>
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
