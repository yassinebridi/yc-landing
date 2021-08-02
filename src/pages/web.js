import React from "react"
import Link from "../components/Link"
import {
  HeroSection,
  FeatureSection,
  ContentSectionOne,
  ContentSectionTwo,
  ContentSectionThree,
  IntegrationSection,
  BlogSection,
  CtaSection,
  FooterSection,
} from "../sections/web"
import PageWrapper from "../components/PageWrapper"

const Header = {
  headerClasses: "site-header--sticky dark-header-2",
  containerFluid: true,
}

const HeaderButton = () => {
  return (
    <div className="header-btns  header-btns--l6 ms-auto d-none d-xs-inline-flex">
      <Link className="btn log-in-btn focus-reset" to="#">
        Login
      </Link>
      <Link className="btn sign-in-btn focus-reset" to="#">
        Sign In
      </Link>
    </div>
  )
}
const Web = () => {
  return (
    <PageWrapper headerConfig={Header} HeaderButton={<HeaderButton />}>
      <HeroSection />
      <FeatureSection />
      <ContentSectionOne />
      <ContentSectionTwo />
      <ContentSectionThree />
      <IntegrationSection />
      <BlogSection />
      <CtaSection />
      <FooterSection />
    </PageWrapper>
  )
}

export default Web
