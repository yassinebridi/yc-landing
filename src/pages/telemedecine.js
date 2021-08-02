import React from "react"
import Link  from "../components/Link"
import {
  HeroSection,
  FeatureSection,
  ContentSectionOne,
  ContentSectionTwo,
  TeamSection,
  TestimonialSection,
  FooterSection,
} from "../sections/telemedecine"
import PageWrapper from "../components/PageWrapper"

const Header = {
  headerClasses: "site-header--menu-end site-header--sticky light-header",
  containerFluid: true,
  darkLogo: true,
}

const HeaderButton = () => {
  return (
    <div className="header-btn header-btn--l4 ms-auto d-none d-xs-inline-flex">
      <Link className="btn send-request-btn focus-reset" to="#">
        Send Request
      </Link>
    </div>
  )
}
const Telemedecine = () => {
  return (
    <PageWrapper headerConfig={Header} HeaderButton={<HeaderButton />}>
      <HeroSection />
      <FeatureSection />
      <ContentSectionOne />
      <ContentSectionTwo />
      <TeamSection />
      <TestimonialSection />
      <FooterSection />
    </PageWrapper>
  )
}

export default Telemedecine
