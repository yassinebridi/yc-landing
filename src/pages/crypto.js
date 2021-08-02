import React from "react"
import Link from "../components/Link"
import {
  HeroSection,
  FeatureSection,
  ContentSectionOne,
  ContentSectionTwo,
  ContentSectionThree,
  BrandSection,
  FooterSection,
} from "../sections/crypto"
import PageWrapper from '../components/PageWrapper';

const Header = {
  headerClasses:"site-header--menu-center site-header--sticky dark-header-2 site-header-5",
  containerFluid:true
}

const HeaderButton = ()=>{
  return(
    <div className="header-btn ms-auto d-none d-xs-inline-flex">
    <Link className="btn btn sign-in-btn--l5 focus-reset" to="#">
      Sign In
    </Link>
  </div>

  )
}
const Crypto = () => {
  return (
    <PageWrapper headerConfig={Header} HeaderButton={<HeaderButton/>}>
      <HeroSection />
      <FeatureSection />
      <ContentSectionOne />
      <ContentSectionTwo />
      <ContentSectionThree />
      <BrandSection />
      <FooterSection />
    </PageWrapper>
  )
}

export default Crypto
