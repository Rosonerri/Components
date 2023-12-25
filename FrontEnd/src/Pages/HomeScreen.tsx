import { IoLogoHtml5 } from "react-icons/io5";
import { FaVuejs } from "react-icons/fa6";
import img from "../assets/React-icon.svg"
import { FaLongArrowAltRight } from "react-icons/fa";
import img2 from "../assets/beam.png"


const HomeScreen = () =>{
  return(
    <div className="w-full h-[92vh] flex justify-center items-center" 
    style={{
      backgroundImage: `url(${img2})`,
      backgroundPosition: "cover",
      backgroundRepeat: "no-repeat"
    }}
    >
      <div className="h-full w-[95%] flex ">
        <div className="w-[50%] h-[100%] justify-center flex flex-col md:w-[100%] lg:w-[50%] sm:w-[100%]"
      
        >
        <div className="text-[#4F46E5] font-[700]">By The Maker Of Food Flex</div>
        <div className="font-[700] text-[45px]">Beautiful UI components <br />crafted with Tailwind CSS.</div>
        <div className="flex ">
          <div className="flex items-center justify-center ml-[15px] font-[600]">
          <IoLogoHtml5 className="text-[17px]"/>
          <p>HTML</p>
          </div>
          <div className="flex items-center justify-center ml-[15px] font-[600]">
          <FaVuejs className="text-[17px]"/>
          <p>Vue</p>
          </div>
          <div className="flex items-center justify-center ml-[15px] font-[600]">
          <img src={img} className="w-[15px]"/>
          <p>HTML</p>
          </div>
        </div>
        <div className="mt-5 font-[600] text-[grey]">Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize to your heart’s content.</div>
        <div className="flex items-center mt-5">
          <button className="flex items-center justify-center border rounded-md bg-black hover:bg-[#333232] hover:text-white text-white py-2 px-3">
            <span>Live Preview</span>
            <FaLongArrowAltRight className="ml-[7px] mt-[3px]"/>
          </button>
          <button className="flex items-center justify-center border rounded-md hover:bg-slate-50 py-2 px-3 ml-[10px]">
          <span>Documentation</span>
            <FaLongArrowAltRight className="ml-[7px] mt-[3px]"/>
          </button>
        </div>
        </div>
        <div className="w-[50%] h-[100%] flex items-center justify-between">
          <div className="w-[55%] h-[380px] shadow-md rounded bg-white  md:hidden lg:block sm:hidden">
          <div className="w-[95%] h-[100%] bg-[grey]">
            
            </div>
          </div>
          <div className="w-[40%] h-[380px] shadow-md rounded bg-white mt-[190px] lg:block md:hidden sm:hidden">
            
          </div>
          </div>
      </div>
    </div>
  )
} 
export default HomeScreen


















