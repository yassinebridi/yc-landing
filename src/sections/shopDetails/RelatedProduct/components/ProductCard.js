import React from "react"
import Link from "../../../../components/Link"
export default function ProductCard({ image, title, priceOld, priceNew }) {
  return (
    <div className="shop-item">
      <div className="product-image">
        <Link to="/shop-details" className="d-block">
          <img className="w-100" src={image} alt="Product" />
        </Link>
      </div>
      <div className="product-content text-center">
        <div className="products-title">
          <h4>
            <Link to="/shop-details">{title}</Link>
          </h4>
        </div>
        <div className="products-rate">
          <p>
            {priceNew}<span>{priceOld}</span>
          </p>
        </div>
        <div className="product-rating">
          <ul className="list-unstyled">
            <li>
              <i className="fas fa-star" />
            </li>
            <li>
              <i className="fas fa-star" />
            </li>
            <li>
              <i className="fas fa-star" />
            </li>
            <li>
              <i className="fas fa-star" />
            </li>
            <li>
              <i className="fas fa-star-half-alt" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
