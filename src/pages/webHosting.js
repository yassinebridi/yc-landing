import React from "react"
import {
  HeroSection,
  SeachSection,
  FeatureSection,
  ContentSectionOne,
  PricingSection,
  FooterSection,
} from "../sections/webHosting"

import PageWrapper from '../components/PageWrapper'

const Header = {
  headerClasses:"site-header--menu-end site-header--sticky light-header",
  containerFluid:false,
  darkLogo:true
}
const WebHosting = () => {
  return (
    <PageWrapper headerConfig={Header}>
      <HeroSection />
      <SeachSection />
      <FeatureSection />
      <ContentSectionOne />
      <PricingSection />
      <FooterSection />
    </PageWrapper>
  )
}

export default WebHosting
