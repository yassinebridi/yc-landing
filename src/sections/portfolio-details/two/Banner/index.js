import React from 'react'
 
const BannerSection = ({title,text}) => {
return(
<>
<div className="portfolio-details-banner bg-haiti">
  <div className="container">
    <div className="row  portfolio-details-banner--2 justify-content-center align-items-center">
      <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-9">
        <div className="portfolio-banner-content portfolio-banner-content--2">
          <h2>Team work app</h2>
          <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches</p>
        </div>
      </div>
      <div className="offset-xxl-2 col-xxl-5 col-xl-6 col-lg-5 col-md-9">
        <div className="portfolio-details-banner-card">
          <div className="card-all-items">
            <div className="card-item d-flex align-items-center">
              <span>Client:</span>
              <strong>ZoneApp</strong>
            </div>
            <div className="card-item d-flex align-items-center">
              <span>Category:</span>
              <strong>Web App, Mobile App</strong>
            </div>
            <div className="card-item d-flex align-items-center">
              <span>Date:</span>
              <strong>22 Nov, 2019</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



</>
)
}
 
export default BannerSection