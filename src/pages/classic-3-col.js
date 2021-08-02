import React from "react"
import { BannerSection } from "../sections/portfolio/Gallery"
import  ClassicBody  from "../sections/portfolio/Classic/ClassicBody/column-3"
import PageWrapper from '../components/PageWrapper'
import  FooterSection  from "../sections/portfolio/Footer"
const Classic3Col = () => {
  return <PageWrapper innerPageHeader={true}>
    <BannerSection title="Portfolio Grid Style 2" text="Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches"/>
    <ClassicBody/>
    <FooterSection/>

  </PageWrapper>
}

export default Classic3Col
