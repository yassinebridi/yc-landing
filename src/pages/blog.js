import React from "react"
import { BreadCrumbSection, BlogBody } from "../sections/blog"
import PageWrapper from '../components/PageWrapper'
const Blog = () => {
  return (
    <PageWrapper innerPageHeader={true}>
      <BreadCrumbSection />
      <BlogBody />
    </PageWrapper>
  )
}

export default Blog