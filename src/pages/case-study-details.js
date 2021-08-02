import React from "react"
import {BreadCrumbSection, CaseDetailsBody,OtherCase } from "../sections/caseStudiesDetails"
import { FooterSection } from "../sections/InnerPages"
import PageWrapper from '../components/PageWrapper'
const CaseDetails = () => {
  return (
    <PageWrapper innerPageHeader={true}>
      <BreadCrumbSection />
      <CaseDetailsBody />
      <OtherCase />
      <FooterSection />
    </PageWrapper>
  )
}

export default CaseDetails