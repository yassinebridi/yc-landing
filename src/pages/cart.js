import React from "react"
import { BreadCrumbSection, CartBody } from "../sections/cart"
import { FooterSection } from "../sections/InnerPages"
import PageWrapper from '../components/PageWrapper'
const Cart = () => {
  return (
    <PageWrapper innerPageHeader={true}>
      <BreadCrumbSection />
      <CartBody />
      <FooterSection />
    </PageWrapper>
  )
}

export default Cart