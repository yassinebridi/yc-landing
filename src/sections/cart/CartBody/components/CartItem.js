import React from 'react'
import Link  from "../../../../components/Link";
import crossIcon from '../../../../assets/image/shop/cross.png'


const CartTableItem =({productImage,title,price,priceTotal})=>{
    return(
        <div className="cart-product cart-product-body d-flex flex-wrap cart-item  overflow-hidden position-relative">
                <div className="product-block">
                  <div className="d-flex align-items-center">
                    <div className="product-image">
                      <img src={productImage} alt="cartItem" />
                    </div>
                    <h2 className="mb-0">
                      {title}
                    </h2>
                  </div>
                </div>
                <div className="price-block d-flex align-items-center">
                  <h4 className="mb-0">{price}</h4>
                </div>
                <div className="quantity-block d-flex align-items-center">
                  <div className="input--amount-control d-flex ">
                    <button className="amount-dec-btn focus-reset">-</button>
                    <span className="position-relative">
                      <input
                        type="number"
                        className="form-control text-center"
                        defaultValue={2}
                      />
                    </span>
                    <button className="amount-inc-btn focus-reset">+</button>
                  </div>
                </div>
                <div className="total-block d-flex align-items-center">
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <h4 className="mb-0 ">{priceTotal}</h4>
                    <Link to="/" className="cross-btn-positioning">
                      <img src={crossIcon} alt="cross icon"/>
                    </Link>
                  </div>
                </div>
              </div>
    )
}

export default CartTableItem;