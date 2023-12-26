import { FC, useEffect, useRef, useState } from 'react'
import { IoMdSearch } from 'react-icons/io'
import { twMerge } from 'tailwind-merge'
import { iProps } from '../Utils/Interface'




const GlobalInput: FC<iProps> = ({placeholder, value, className, color,...props}) => {
    const myInput: React.MutableRefObject<any> = useRef(null)
    const [state, setState] = useState<boolean>(false)

    useEffect(() =>{
        if(state ){
            myInput.current.focus();
        }
    })
  return (
    <div className={twMerge(
        `flex border w-[300px] h-[50px] bg-white rounded-md px-2 m-2 items-center ${state ?  `${color ? color : "border-blue-500"}` : ""} transition-all duration-300`, className
    )}
    onClick={() =>{
    (setState(true))
    }}
    >
      <div className='text-[black] text-[20px]'><IoMdSearch/></div>
        <input 
        ref={myInput}
        {...props}
        placeholder={`${placeholder}`} className='w-full h-full outline-none pl-1'
        onBlur={() =>{
         (setState(false))
        }}
        />
        
    </div>
  )
}

export default GlobalInput;
