import React from "react"
import ProductCard from "./components/ProductCard"
import {ShopProductData} from './data'
export default function RelatedProduct() {
  return (
    <>
      {/* Related Product  Area  */}
      <div className="related-products bg-catskillwhite">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section__heading text-center">
                <h2>Related Products</h2>
              </div>
            </div>
          </div>
          <div className="row shop-all-items">
            {ShopProductData.map(({image,title,priceOld,priceNew},index) => {
              return (
                <div className="col-lg-3 col-sm-6" key={index}>
                  <ProductCard image={image} title={title} priceNew={priceNew} priceOld={priceOld}/>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
