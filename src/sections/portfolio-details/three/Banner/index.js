import React from 'react'
 
const BannerSection = ({title,text}) => {
return(
<>
<div className="portfolio-details-banner bg-haiti">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xxl-5 col-xl-6 col-lg-7 col-md-9">
        <div className="portfolio-banner-content text-center">
          <h2>Team work app</h2>
          <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches</p>
        </div>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-lg-12">
        <div className="portfolio-details-banner-card">
          <div className="card-all-items d-flex flex-wrap justify-content-between">
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