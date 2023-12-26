import img2 from "../assets/beam.png"
import {FaAngleDown} from "react-icons/fa"
import {FaAngleLeft} from "react-icons/fa"
import {FaAngleRight} from "react-icons/fa"
import { IoMdEyeOff } from "react-icons/io";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { useState } from "react";
import InputProp from "./InputProp";
import InputCode from "./InputCode";



const InputComp = () => {
    const [state, setState] = useState<boolean>(false)
    const [state1, setState1] = useState<boolean>(false)
    
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="w-[95%] h-[100%]"
       style={{
        backgroundImage: `url(${img2})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
      >
        <div className="mt-8">
        <div className="text-[grey] text-[15px]">Marketing / Elements</div>
        <div className="text-[30px]">Search</div>
        <div className="flex w-full justify-between items-center mt-[50px]">
        <div className="flex justify-between items-center w-[22%]">
            <p className="text-[600] lg:block md:hidden sm:hidden">We Stacked flyout menu</p>
            <span className="py-1 px-2 rounded-md bg-slate-300 text-[12px] font-[700]">Required JS</span>
        </div>
        <div className="w-[28%] flex justify-between items-center">
           <div className="flex justify-center items-center bg-[#F1F5F9] py-1 px-2 rounded-md mr-[10px]">
           <button className="flex justify-center items-center border py-1 px-2 rounded-md shadow-md bg-white"
           onClick={()=>{
            setState(true)
            setState1(false)
           }}
           >
            <IoMdEyeOff className="text-[#1AAAEA]"/>
                <p className="font-[600] ml-[4px] md:hidden lg:block sm:hidden">Preview</p>
            </button>
            <button className="flex justify-center items-center border py-1 px-2 rounded-md"
            onClick={()=>{
                setState(false)
                setState1(true)
            }}
            >
                <div className="flex justify-center items-center mr-[6px]">
                <FaAngleLeft />
                <FaAngleRight />
                </div>
                <p className="font-[600] md:hidden lg:block sm:hidden transition-all duration-300">Code</p>
            </button>
           </div>
            <div className="h-[30px] w-[1px] bg-[#c5c2c2]"></div>
            <div className="flex justify-center items-center py-1 px-2 cursor-pointer">
                <p className="md:hidden lg:block sm:hidden transition-all duration-300">HTML</p>
                <FaAngleDown className="ml-[5px]"/>
            </div>
            <div className="w-[40px] h-[40px] cursor-pointer hover:bg-slate-200 transition-all duration-300 rounded-[50%] flex justify-center items-center">
            <IoDocumentAttachOutline className="text-[23px]"/>
            </div>
        </div>
        </div>
        <div className="border w-full h-[90vh] mt-[20px] rounded-md bg-black">
           {state ? (
            <div>
                 <InputProp/>
            </div>
           ) : state1 ? (
            <div>
            <InputCode/>
            </div>
           ) : null}
        </div>
        </div>
      </div>
    </div>
  )
}

export default InputComp;
