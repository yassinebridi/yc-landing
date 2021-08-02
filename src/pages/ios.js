import React from "react"
import {
  HeroSection,
  FeatureSection,
  ContentSectionOne,
  ContentSectionTwo,
  IntegrationSection,
  VideoSection,
  CtaSection,
  FooterSection,
} from "../sections/ios"
import PageWrapper from '../components/PageWrapper';

const Header = {
  headerClasses:"site-header--menu-end site-header--sticky light-header",
  containerFluid:true,
  darkLogo:true
}

const Ios = () => {
  return (
    <PageWrapper headerConfig={Header}>
      <HeroSection />
      <FeatureSection />
      <ContentSectionOne />
      <ContentSectionTwo />
      <VideoSection />
      <IntegrationSection />
      <CtaSection />
      <FooterSection />
    </PageWrapper>
  )
}

export default Ios
