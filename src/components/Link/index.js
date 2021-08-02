import React from "react"

import LinkComponent from "./component";

const Link = ({children,to, ...rest}) => {
  return <>
    <LinkComponent to={to}>
        <a  {...rest}>
          {children}
        </a>
    </LinkComponent>
  </>
}

export default Link
