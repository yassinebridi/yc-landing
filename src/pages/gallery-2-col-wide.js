import React from "react"
import { BannerSection } from "../sections/portfolio/Gallery"
import  GalleryBody  from "../sections/portfolio/Gallery/GalleryBody/column-2-wide.js"
import  FooterSection  from "../sections/portfolio/Footer.js"
import PageWrapper from '../components/PageWrapper'
const Gallery2Col = () => {
  return <PageWrapper innerPageHeader={true}>
    <BannerSection title="Portfolio Gallery Style 4" text="Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches"/>
    <GalleryBody/>
    <FooterSection/>

  </PageWrapper>
}

export default Gallery2Col
