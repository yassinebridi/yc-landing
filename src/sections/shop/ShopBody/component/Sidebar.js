import React from "react"
import Link from "../../../../components/Link"
import Product from './ProductSidebar'
export default function Sidebar({latestProduct }) {
  return (
    <div className="shop-right-sidebar">
    <form className="search-form position-relative" >
      <input type="text" name="search" id="search" className="form-control" placeholder="Type to search" />
      <button type="submit" className="search-submit focus-reset" aria-hidden="true"><i className="fas fa-search"/></button>
    </form>
    <div className="latest-products">
      <h2>Latest Products</h2>
      {latestProduct.map(({image,title,priceOld,priceNew},index)=>{return(
        <Product image={image} title={title} priceOld={priceOld} priceNew={priceNew} key={index + "Product"}/>
      )})}
    </div>
    <div className="shop-categories">
      <h2>Categories </h2>
      <div className="categories-item">
        <ul className="list-unstyled">
          <li><Link to="/">Technology</Link></li>
          <li><Link to="/">Fashion Cloth</Link> </li>
          <li><Link to="/">Gaming Industry</Link></li>
          <li><Link to="/">Headphone</Link></li>
          <li><Link to="/">Charger</Link> </li>
          <li><Link to="/">New Laptop</Link> </li>
        </ul>
      </div>
    </div>
  </div>
  )
}
