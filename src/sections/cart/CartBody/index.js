import React from "react"
import Link from "../../../components/Link"
import CartTableItem from './components/CartItem'
import {cartData} from '../../../data/cart'
const CartBody = () => {
  return (
    <>
      <div className="shop-cart-area">
        <div className="container">
          <div className="cart-details-main-block" id="dynamic-cart">
            <div className="cart-product cart-product-title d-flex flex-wrap d-none d-lg-flex align-items-center">
              <div className="product-block">
                <h3>Product</h3>
              </div>
              <div className="price-block">
                <h3>Price</h3>
              </div>
              <div className="quantity-block">
                <h3>Quantity </h3>
              </div>
              <div className="total-block">
                <h3>Total </h3>
              </div>
            </div>
            <div className="product-cart-all-acrd-items" >
              {cartData.map(({productImage,title,price,priceTotal},index)=>{
                return(
<CartTableItem productImage={productImage} price={price} title={title} priceTotal={priceTotal} key={index}/>
                )
              })}
              
            </div>
          </div>
          <div className="row justify-content-md-between justify-content-center continue-show-area">
            <div className="col-sm-10 col-md-5 col-lg-4 col-xl-3">
              <div className="continue-shop-btn text-center text-md-start">
                <Link to="shop.html" className="btn focus-reset">
                  Continue Shopping
                </Link>
              </div>
            </div>
            <div className="col-sm-10 col-md-7 col-lg-5">
              <div className="order-details-card">
                <h3>Price Details</h3>
                <ul className="list-unstyled">
                  <li className="d-flex justify-content-between">
                    <p>
                      Price <span>({cartData.length} item)</span>
                    </p>
                    <strong>$140</strong>
                  </li>
                  <li className="d-flex justify-content-between">
                    <p>Delivery Fee</p>
                    <strong className="free-color">FREE</strong>
                  </li>
                  <li className="total-price-area d-flex justify-content-between">
                    <h4>Total Price</h4>
                    <h4>$140</h4>
                  </li>
                </ul>
                <div className="proceed-check-btn">
                  <Link to="checkout.html" className="btn focus-reset">
                    Proceed to checkout
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

export default CartBody
