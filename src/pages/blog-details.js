import React from "react"
import { BreadCrumbSection, BlogBody,CommentFormSection,CommentSection } from "../sections/blogDetails"
import { FooterSection} from "../sections/InnerPages"
import PageWrapper from '../components/PageWrapper'
const BlogDetails = () => {
  return (
    <PageWrapper innerPageHeader={true}>
      <BreadCrumbSection />
      <BlogBody />
      <CommentFormSection />
      <CommentSection />
      <FooterSection />
    </PageWrapper>
  )
}

export default BlogDetails