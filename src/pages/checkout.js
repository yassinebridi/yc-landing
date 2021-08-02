import React from "react"
import { BreadCrumbSection, CheckoutBody } from "../sections/checkout"
import { FooterSection } from "../sections/InnerPages"
import PageWrapper from '../components/PageWrapper'
const Checkout = () => {
  return (
    <PageWrapper innerPageHeader={true}>
      <BreadCrumbSection />
      <CheckoutBody />
      <FooterSection />
    </PageWrapper>
  )
}

export default Checkout