import React from "react"
import Link from "../../../../components/Link"
export default function ProductSidebar({ image, title, priceOld, priceNew },index) {
  return (
    <div className="d-flex latest-products-item" key={index + "sidebar"}>
    <div className="post-img">
      <Link to="/shop-details">
        <img className="w-100" src={image} alt="product" />
        </Link>
    </div>
    <div className="latest-products-content">
      <div className="products-title">
        <h4><Link to="/shop-details">{title}</Link></h4>
      </div>
      <div className="products-rate">
        <p> {priceNew} <span>{priceOld}</span></p>
      </div>
    </div>
  </div>
  )
}
