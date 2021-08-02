import React from "react"
import {BreadCrumbSection, VideoSection, FeatureSection,JobSection,TestimonialSection } from "../sections/career"
import { FooterSection } from "../sections/InnerPages"
import PageWrapper from '../components/PageWrapper'
const ShopDetails = () => {
  return (
    <PageWrapper innerPageHeader={true}>
      <BreadCrumbSection />
      <VideoSection />
      <FeatureSection />
      <TestimonialSection />
      <JobSection/>
      <FooterSection />
    </PageWrapper>
  )
}

export default ShopDetails
