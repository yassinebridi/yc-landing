import React from "react"
import {BreadCrumbSection,CareerDetailsBody,ContactSection} from "../sections/careerDetails"
import { FooterSection } from "../sections/InnerPages"
import PageWrapper from '../components/PageWrapper'
const ShopDetails = () => {
  return (
    <PageWrapper innerPageHeader={true}>
      <BreadCrumbSection />
      <CareerDetailsBody />
      <ContactSection />
      <FooterSection />
    </PageWrapper>
  )
}

export default ShopDetails
