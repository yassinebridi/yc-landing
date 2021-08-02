import React, { useState } from "react"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import { Container } from "react-bootstrap"
import SiteNav from "./SiteNav"
import SiteHeader from "./style"
const defaultValues = {
  headerClasses: "site-header--menu-end",
  darkLogo: false,
  siteLogoUrl: false,
  containerFluid: true,
}
const Header = ({ headerConfig = defaultValues, buttonBlock }) => {
  const [showScrolling, setShowScrolling] = useState(false)
  const [showReveal, setShowReveal] = useState(false)

  const { headerClasses, darkLogo, siteLogoUrl, containerFluid } = headerConfig
  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < 0) {
      setShowScrolling(true)
    } else {
      setShowScrolling(false)
    }
    if (currPos.y < -300) {
      setShowReveal(true)
    } else {
      setShowReveal(false)
    }
  })

  return (
    <SiteHeader
      className={`${headerClasses} ${showScrolling ? "scrolling" : ""} ${
        showReveal ? "reveal-header " : ""
      }`}
    >
      <Container fluid={containerFluid ? true : false}>
        <SiteNav
          siteLogoUrl={siteLogoUrl}
          darkLogo={darkLogo}
          buttonBlock={buttonBlock}
        />
      </Container>
    </SiteHeader>
  )
}
export default Header
