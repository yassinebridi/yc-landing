import React from "react"
import { BreadCrumbSection, ShopBody } from "../sections/shop"
import { FooterSection } from "../sections/InnerPages"
import PageWrapper from '../components/PageWrapper'
const Shop = () => {
  return (
    <PageWrapper innerPageHeader={true}>
      <BreadCrumbSection />
      <ShopBody />
      <FooterSection />
    </PageWrapper>
  )
}

export default Shop
