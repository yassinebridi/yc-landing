import React from 'react'
import Card from '../components/Card'
 import Data from "../../../../data/GalleryProducts"
export default function RelatedProductSection(){
return(
<>
<div className="related-works-area bg-catskillwhite">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="related-works-title text-center">
          <h2>Related Works</h2>
        </div>
      </div>
    </div>
    <div className="row justify-content-center related-works-area-items">
      {Data.relatedProduct.map(({image,title,titleSmall},index) => {
          return <div className="col-xl-3 col-lg-4 col-sm-6" key={index}>
          <Card title={title} image={image} titleSmall={titleSmall}/>
        </div>
      })}
    </div>
  </div>
</div>

</>
)
}