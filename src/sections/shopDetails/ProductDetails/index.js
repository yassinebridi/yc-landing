import React from "react"
import Link from "../../../components/Link"
import ProductSliders from './components/Slider'
const ProductDetails = () => {
  return (
    <>
      <div className="single-product-slider-area">
        <div className="container">
          <div className="row justify-content-center justify-content-lg-start">
            <ProductSliders/>
            <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-10">
              <div className="single-product-details-area">
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
                <div className="single-product-title">
                  <h2>Amazon Echo Rockerz 400 Super Extra Bass Home System.</h2>
                </div>
                <div className="single-product-special-rate">
                  <span>Special Price </span>
                </div>
                <div className="single-product-discount">
                  <p>
                    $70 <span>$90</span>
                  </p>
                </div>
                <div className="single-product-content">
                  <p>
                    Leverage agile frameworks to provide a robust synopsis for
                    high level overviews. Iterative approaches to corporate
                    strategy foster collaborative thinking to further the
                    overall.
                  </p>
                </div>
                <div className="single-product-identity">
                  <div className="d-flex">
                    <div className="product-iden-title">
                      <h6>Model Name</h6>
                    </div>
                    <div className="product-iden-descrip">
                      <p>Rockerz 400 Super Extra Bass</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="product-iden-title">
                      <h6>Headphone Type</h6>
                    </div>
                    <div className="product-iden-descrip">
                      <p>Wireless over the head</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="product-iden-title">
                      <h6>Inline Remote</h6>
                    </div>
                    <div className="product-iden-descrip">
                      <p>No</p>
                    </div>
                  </div>
                </div>
                <div className="single-product-btn">
                  <Link to="/checkout"  className="btn focus-reset sin-pro-buy-btn">

                      Buy Now
                  </Link>
                  <Link to="/cart" className="btn focus-reset sin-pro-cart-btn">
                      Add to Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetails
