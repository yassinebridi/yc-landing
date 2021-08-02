import React from "react"
import Link from "../../../components/Link"
import ProductCard from "./component/ProductCard";
import Sidebar from "./component/Sidebar";
import {ShopProductData,LatestProductData} from './data'
export default function ShopBody() {
  return (
    <div className="shop-main-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-md-7 order-md-0 order-1">
            <div className="row shop-all-items">
                {ShopProductData.map(({title,image,priceOld,priceNew},id)=>{return(
                    <div className="col-lg-4 col-sm-6" key={id}>
                <ProductCard
                  title={title}
                  image={image}
                  priceOld={priceOld}
                  priceNew={priceNew}
                />
              </div>
                )})}
              
            </div>
          </div>
          <div className="col-lg-3 col-md-5 col-sm-10 col-sm-10 order-md-1 order-0">
                <Sidebar latestProduct={LatestProductData} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="shop-pagination text-center">
              <ul className="list-unstyled">
                <li>
                  <Link className="active" to="#">
                    1
                  </Link>
                </li>
                <li>
                  <Link to="#">2</Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fas fa-long-arrow-alt-right" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
