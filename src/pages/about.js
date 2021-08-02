import React from "react"
import {
  BannerSection,
  ContentSectionOne,
  ContentSectionTwo,
  TeamSection,
  FooterSection,
} from "../sections/about"
import PageWrapper from '../components/PageWrapper'

const About = () => {
  return (
    <PageWrapper innerPageHeader={true}>
      <BannerSection />
      <ContentSectionOne />
      <ContentSectionTwo />
      <TeamSection className="about-us-temam-area" />
      <FooterSection />
    </PageWrapper>
  )
}

export default About
