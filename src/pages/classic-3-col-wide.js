import React from "react"
import { BannerSection } from "../sections/portfolio/Classic"
import  ClassicBody  from "../sections/portfolio/Classic/ClassicBody/column-3-wide"
import PageWrapper from '../components/PageWrapper'
import  FooterSection  from "../sections/portfolio/Footer.js"
const Classic3Col = () => {
  return <PageWrapper innerPageHeader={true}>
    <BannerSection title="Portfolio Grid Style 5" text="Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches"/>
    <ClassicBody/>
    <FooterSection/>

  </PageWrapper>
}

export default Classic3Col
