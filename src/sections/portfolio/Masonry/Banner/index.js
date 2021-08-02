import React from 'react'
 import SuperTag from "../../../../components/SuperTag"
const BannerSection = ({title,text}) => {
return(
<>
<div className="portfolio-banner bg-catskillwhite">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xl-8 col-lg-8 col-md-10">
        <div className="portfolio-banner-content text-center">
          <h2>{title}</h2>
          <p><SuperTag value={text}/></p>
        </div>
      </div>
    </div>
  </div>
</div>

</>
)
}
 
export default BannerSection