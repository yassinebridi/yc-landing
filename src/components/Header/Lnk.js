import React from "react";
import Link  from "../Link";

// const ForwardedLink = React.forwardRef(({children,to,...rest} ,ref) => (
//   <Link {...rest} to={to ? to : "/"} innerRef={ref} >
//     {children}
//   </Link>
// ));

const ForwardedLink =  React.memo(({to,children,className}) => (
  <Link to={to ? to : "/"} className={`${className ? className : ""}`}>
    {children}
  </Link>
));


export default ForwardedLink