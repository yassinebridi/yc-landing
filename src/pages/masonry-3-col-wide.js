import React from "react"
import BannerSection from "../sections/portfolio/Masonry/Banner"
import  MasonryBody  from "../sections/portfolio/Masonry/ColThree/fluid"
import PageWrapper from '../components/PageWrapper'
import  FooterSection  from "../sections/portfolio/Footer"
const Masonry3Col = () => {
  return <PageWrapper innerPageHeader={true}>
    <BannerSection title="Portfolio Masonry Style 3" text={"Leverage agile frameworks to provide a robust synopsis for hig <br className='d-none d-sm-block'/> level overviews. Iterative approaches"}/>
    <MasonryBody/>
    <FooterSection/>

  </PageWrapper>
}

export default Masonry3Col
