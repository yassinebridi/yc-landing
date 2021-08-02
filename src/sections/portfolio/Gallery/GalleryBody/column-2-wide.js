import React from "react"
import Link from "../../../../components/Link"
import Card from '../components/Card'
import Data from '../../../../data/GalleryProducts'
export default function GalleryBody() {
  return <>
  <div className="portfolio-section pt-90">
  <div className="container-fluid">
    <div className="row justify-content-center">
        {Data.Col2_wide.map(({title,titleSmall,image}, index)=>{return(
            <div className="col-md-6 col-12" key={index}>
                <Card title={title} titleSmall={titleSmall} image={image} />
            </div>
        )})}
      
      
      <div className="col-12 text-center portfolio-load-btn">
        <Link to="/" className="btn focus-reset">Load more works</Link>
      </div>
    </div>
  </div>
</div>

</>
}
