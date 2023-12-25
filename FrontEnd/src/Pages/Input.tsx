import React, { FC, useEffect, useRef, useState } from 'react'
import { iProps2 } from '../Utils/Interface';
import { twMerge } from 'tailwind-merge';



const Input: FC<iProps2> = ({children, value, placeholder, ...props}) => {
    const myInput: React.MutableRefObject<any> = useRef(null);  
    const [state, setState] = useState<boolean>(true);
    
    useEffect(() =>{
        if (state){
            myInput.current.focus()
        }
    }, [state])

  return (
    <div className={twMerge(
        `m-2 border rounded-md w-[350px] relative h-[40px]`
    )}
    onClick={() =>{
        setState(true)
      }}
    >
      <div className={`absolute transition-all duration-300 text-[grey] p-1   ${state ? "top-[-3px] text-[10px]" : "top-0"} ${!!value && "top-[-3px] text-[10px]"}`}
      
      >
       {placeholder ? `${placeholder}` : "placeholder"}
        </div>
      <input className="border w-full h-full outline-none p-1 "
      {...props}
       ref={myInput}
        onBlur={() =>{
            setState(false);
        }}
      />
      
    </div>    
  )
}

export default Input;
