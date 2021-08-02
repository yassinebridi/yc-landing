import React from "react"
import {BannerSection,MainContentSection,RelatedProductSection} from '../sections/portfolio-details/one'
import FooterSection from '../sections/portfolio-details/Footer'
import PageWrapper from '../components/PageWrapper'
export default function PortfolioDetails1() {
  return <PageWrapper innerPageHeader={true}>
  
<BannerSection/>
<MainContentSection/>
<RelatedProductSection/>
<FooterSection/>

  </PageWrapper>
}
