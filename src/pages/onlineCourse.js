import React from "react"
import {
  HeroSection,
  FeatureSection,
  ContentSectionOne,
  ContentSectionTwo,
  TestimonialSection,
  ContactSection,
  FaqSection,
  FooterSection
} from "../sections/onlineCourse"
import PageWrapper from '../components/PageWrapper'

const Header = {
  headerClasses:"site-header--menu-end site-header--sticky dark-header-2",
  containerFluid:false,
  darkLogo:false
}

const onlineCourse = () => {
  return (
    <PageWrapper headerConfig={Header} >
      <HeroSection />
      <FeatureSection />
      <ContentSectionOne />
      <ContentSectionTwo />
      <TestimonialSection />
      <ContactSection />
      <FaqSection />
      <FooterSection />
    </PageWrapper>
  )
}

export default onlineCourse
