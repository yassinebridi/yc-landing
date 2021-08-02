import React from "react"
import {ProductDetails, RelatedProduct, ProductDescription } from "../sections/shopDetails"
import { FooterSection } from "../sections/InnerPages"
import PageWrapper from '../components/PageWrapper'
const ShopDetails = () => {
  return (
    <PageWrapper innerPageHeader={true}>
      <ProductDetails />
      <ProductDescription />
      <RelatedProduct />
      <FooterSection />
    </PageWrapper>
  )
}

export default ShopDetails
