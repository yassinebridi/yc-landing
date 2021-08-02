import React from "react"
import { CaseBody } from "../sections/caseStudies"
import { FooterSection } from "../sections/InnerPages"
import PageWrapper from '../components/PageWrapper'

const Case = () => {
  return (
    <PageWrapper innerPageHeader={true}>
      <CaseBody />
      <FooterSection />
    </PageWrapper>
  )
}

export default Case