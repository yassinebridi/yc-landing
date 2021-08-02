import React from 'react'
 
const BannerSection = ({title,text}) => {
return(
<>
<div className="portfolio-banner bg-catskillwhite">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-10">
        <div className="portfolio-banner-content text-center">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </div>
    </div>
  </div>
</div>

</>
)
}
 
export default BannerSection