import React from "react"
import Link from "../components/Link"
import {
  HeroSection,
  FeatureSection,
  HowSection,
  ContentSectionOne,
  ContentSectionTwo,
  ContentSectionThree,
  TestimonialSection,
  FooterSection,
} from "../sections/mobile"

import PageWrapper from '../components/PageWrapper'
const Header = {
  headerClasses:"site-header--menu-end site-header--sticky light-header",
  darkLogo:true,

}

const HeaderButton = ()=>{
  return(
    <div className="header-btn header-btn--l2 ms-auto">
      <Link className=" btn sign-in-btn-l2" to="#">
        Sign In
      </Link>
    </div>
  )
}

const Mobile = () => {
  return (
    <PageWrapper headerConfig={Header} HeaderButton={<HeaderButton/>}>
      <HeroSection />
      <FeatureSection />
      <HowSection />
      <ContentSectionOne />
      <ContentSectionTwo />
      <ContentSectionThree />
      <TestimonialSection />
      <FooterSection />
    </PageWrapper>
  )
}

export default Mobile
