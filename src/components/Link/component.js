import React from "react"

import Link from "next/link";

const LinkComponent = ({children,to, ...rest}) => {
  return <>
    <Link href={to}>
          {children}
    </Link>
  </>
}

export default LinkComponent
