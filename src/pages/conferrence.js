import React from "react"
import Link from "../components/Link"
import {
  HeroSection,
  FeatureSection,
  CtaSection,
  ContentSectionOne,
  ContentSectionTwo,
  ContentSectionThree,
  PricingSection,
  FooterSection,
} from "../sections/conferrence"
import PageWrapper from '../components/PageWrapper';

const Header = {
  headerClasses:"site-header--menu-center site-header--sticky dark-header-2",
  containerFluid:true
}

const HeaderButton = ()=>{
  return(
    <div className="header-btns  header-btns--l2 ms-auto d-none d-xs-inline-flex">
        <Link className="btn log-in-btn focus-reset" to="#">
          Login
        </Link>
        <Link className="btn sign-in-btn focus-reset" to="#">
          Sign In
        </Link>
      </div>
  )
}

const Conferrence = () => {
  return (
    <PageWrapper headerConfig={Header} HeaderButton={<HeaderButton/>}>
      <HeroSection />
      <FeatureSection />
      <ContentSectionOne />
      <ContentSectionTwo />
      <ContentSectionThree />
      <PricingSection />
      <CtaSection />
      <FooterSection />
    </PageWrapper>
  )
}

export default Conferrence
