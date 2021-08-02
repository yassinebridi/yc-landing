import React from "react"
import { BannerSection } from "../sections/portfolio/Classic"
import  ClassicBody  from "../sections/portfolio/Classic/ClassicBody/column-2"
import  FooterSection  from "../sections/portfolio/Footer"
import PageWrapper from '../components/PageWrapper'
const Classic2Col = () => {
  return <PageWrapper innerPageHeader={true}>
    <BannerSection title="Portfolio Grid Style 1" text="Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches"/>
    <ClassicBody/>
    <FooterSection/>

  </PageWrapper>
}

export default Classic2Col
