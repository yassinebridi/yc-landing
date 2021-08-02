import React from "react"
import {BannerSection,MainContentSection,RelatedProductSection} from '../sections/portfolio-details/three'
import FooterSection from '../sections/portfolio-details/Footer'
import PageWrapper from '../components/PageWrapper'
export default function PortfolioDetails3() {
  return <PageWrapper innerPageHeader={true}>
  
      <BannerSection/>
      <MainContentSection/>
      <RelatedProductSection/>
      <FooterSection/>

  </PageWrapper>
}
