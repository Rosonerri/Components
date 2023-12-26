import {   useEffect, useRef, useState, FC } from "react";
import { iProps2 } from "../Utils/Interface";
import { twMerge } from "tailwind-merge";

const SearchProp: FC<iProps2> = ({children, value, placeholder,  ...props }) => {
    const myInput: React.MutableRefObject<any> = useRef(null)
    const [state, setState] = useState<boolean>(false);
    useEffect(() =>{
        if (state){
            myInput.current.focus()
        }
    }, [state ])
  return (
    <div className={twMerge(
        `m-2 border rounded-md w-[350px] px-2 h-[50px] relative bg-white ${state && "border-blue-500"}`
    )}
    onClick={() =>{
        setState(true)
       }}   
    >
      <div
       className={`absolute transition-all duration-200 text-[grey]
       ${state ? `top-0 text-[13px]` : "top-3"}
        ${!!value && "top-0 text-[13px]"}
       `}
        
       >
        {placeholder ? `${placeholder}` : "placeholder"}
       </div> 
      <input 
      {...props}
      ref={myInput} 
      className="w-full h-full outline-none text-[11px]"
      onBlur={() => {
        setState(false)
      }}
      />
    </div>
  )
}

export default SearchProp;
