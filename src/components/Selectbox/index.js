// export { default as SelectFilter } from "./FilterSelect"
// export { default as NormalSelect } from "./NormalSelect"


import React,{useState} from 'react'
import NormalSelect from './NormalSelect'


const SelectBox = ({data,placeholder,dataId,label,className})=>{
    
    const [value,setValue] = useState(null)
    return(
        <NormalSelect 
        data={data}
        prompt={placeholder ? placeholder :"select one"}
        id={dataId ? dataId:"id"}
        label={label ? label:'label'}
        value={value}
        onChange={val => setValue(val)}
        className={className}
        />
    )
}

export default SelectBox;