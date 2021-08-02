import React,{useState} from "react"

export default function NavDropdown({className,value,toggleClass,children}) {

const [active,setActive] = useState(false)
    

  return <div className={`dropdown ${className ? className: "/"} ${active ? "show":""}`}>
        <button className={`dropdown-toggle nav-link btn-reset ${toggleClass? toggleClass: ""}`} onClick={()=> setActive(prevStatus => !prevStatus)}>{value}</button>
       <div className="dropdown-menu">
       {children}
       </div>
  </div>
}


NavDropdown.Item =({children,className})=>{
    return(
        <div className={`drop-menu-item nav-item ${className ? className:""}`}>
            {children}
        </div>
    )
}
