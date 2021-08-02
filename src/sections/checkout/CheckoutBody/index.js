import React from "react"
import Link from "../../../components/Link"
import SelectBox from '../../../components/Selectbox';
import {CountryData,Yeardata,MonthData} from './data';
import visaImage from '../../../assets/image/shop/visa.png'
import paymentCard from '../../../assets/image/shop/payment-card.png'
const CheckoutBody = () => {
  return (
    <>
       <div className="shop-checkout-area">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xl-5 col-lg-6 col-md-10">
        <div className="checkout-form-area">
          <div className="login-form">
            <h3>Billing Details</h3>
            <form action="./">
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="name">First &amp; Last
                      Name</label>
                    <input className="form-control" type="text" id="name" placeholder="Jhon Deo" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input className="form-control" type="text" id="email" placeholder="example@gmail.com" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="country">Country</label><br />
                    <SelectBox data={CountryData} placeholder="Select Country" className="checkout-select"/>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="city">City/State</label>
                    <input className="form-control" type="text" id="city" placeholder="City" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="zip">Zip/Postal Code</label>
                    <input className="form-control" type="text" id="zip" placeholder="Zip Code" />
                  </div>
                </div>
                <div className="col-12">
                  <h3 className="payment-head">Payment Method</h3>
                  <div className="form-group gr-radio-input form-control payment-form-control d-flex align-items-center">
                    <input type="radio" name="payment" id="credit-card" className="position-absolute" />
                    <label htmlFor="credit-card" className="d-flex align-items-center w-100">
                      <span className="round-indicator" />
                      <span>Credit Cards
                      </span>
                      <img src={paymentCard} alt="card" className="ms-auto payment-card-img" />
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="card">Card Number</label>
                    <div className="position-relative">
                      <input className="form-control" type="number" id="card" placeholder="11154 5665 6464 565" />
                      <div className="visa-card-position h-100 d-flex align-items-center">
                        <img src={visaImage} alt="card" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label htmlFor="month">Expire Date </label>
                    <SelectBox data={MonthData} placeholder="Month" className="checkout-select"/>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label htmlFor="year" className="invisible">None</label>
                    <SelectBox data={Yeardata} placeholder="Year" className="checkout-select"/>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label htmlFor="code">Security Code</label>
                    <div className="position-relative">
                      <input className="form-control" type="text" id="code" placeholder="PIN" />
                      <i className="far fa-question-circle question-icon-position" />
                    </div>
                  </div>
                </div>
                <div className="col-12 another-card-add">
                  <div className="form-group gr-radio-input d-flex align-items-center form-control payment-form-control w-100">
                    <input type="radio" name="payment" id="paypal" className="position-absolute" />
                    <label htmlFor="paypal" className="d-flex align-items-center w-100">
                      <span className="round-indicator" />
                      <span>Paypal</span>
                      <img src={visaImage} alt="card" className="ms-auto" />
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="checkout-terms-text">
                    <p>By clicking the button you agree the <Link to="terms.html">Terms and Conditions</Link></p>
                  </div>
                  <div className="complte-checkout-btn">
                    <button className="btn btn w-100">Complete Order</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="offset-xl-3 col-xl-4 offset-lg-2 col-lg-4 col-md-7 col-sm-10">
        <div className="order-details-card">
          <h3>Price Details</h3>
          <ul className="list-unstyled">
            <li className="d-flex justify-content-between">
              <p>Price <span>(2 item)</span></p>
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
            <Link to="/" className="btn focus-reset">Complete Order</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default CheckoutBody
