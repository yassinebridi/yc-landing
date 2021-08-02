import React from "react"
import { BannerSection } from "../sections/portfolio/Gallery"
import  GalleryBody  from "../sections/portfolio/Gallery/GalleryBody/column-4-wide.js"
import PageWrapper from '../components/PageWrapper'
import  FooterSection  from "../sections/portfolio/Footer.js"
const Gallery3Col = () => {


  return <PageWrapper innerPageHeader={true}>
    <BannerSection title="Portfolio Gallery Style 6" text="Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches"/>
    <GalleryBody/>
    <FooterSection/>

  </PageWrapper>
}

export default Gallery3Col
