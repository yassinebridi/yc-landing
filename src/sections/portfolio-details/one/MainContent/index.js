import React from "react"
import PortfolioImage from '../../../../assets/image/portfolio/portfolio-mas-2.jpg'
import PortfolioImage2 from '../../../../assets/image/portfolio/portfolio-mas-7.jpg'
import ModalImage from "react-modal-image";
export default function MainContent() {

  return <>
    <div className="portfolio--details-section">
  <div className="container">
    <div className="row portfolio-single-items">
      <div className="col-lg-12">
        <div className="portfolio-single-image">
          <ModalImage
          small={PortfolioImage}
          medium={PortfolioImage}
          alt="khabar dabar"
          className="w-100"
        />;
        </div>
      </div>
      <div className="col-lg-12">
        <div className="portfolio-single-image">
        <ModalImage
          small={PortfolioImage2}
          large={PortfolioImage2}
          alt="bilai"
          className="w-100"
        />;
        </div>
      </div>
    </div>
    {/* <div className="row">
      <div className="col-lg-12">
        <div className="pre-next-project-link-area d-flex flex-wrap justify-content-between">
          <div className="project-m prev-project">
            <div className="d-flex align-items-center">
              <div className="icon">
                <Link to="#"><i className="fas fa-long-arrow-alt-left" /></Link>
              </div>
              <div className="title">
                <Link to="#">Previous Project</Link>
              </div>
            </div>
          </div>
          <div className="project-m project-page-grid">
            <Link to="portfolio-details-1.html"><i className="fas fa-border-all" /></Link>
          </div>
          <div className="project-m next-project">
            <div className="d-flex align-items-center">
              <div className="title">
                <Link to="#">Next Project</Link>
              </div>
              <div className="icon">
                <Link to="#"><i className="fas fa-long-arrow-alt-right" /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
  </div>
</div>

</>
}
