import img from "../assets/mark.svg"
import MagicInput from "../Components/MagicInput"
import GlobalButton from "../Components/GlobalButton"
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { NavLink } from "react-router-dom"


const ResetPass = () => {
  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center bg-black">
      <div className="border w-[450px] h-[620px] rounded-md shadow-md bg-slate-200 flex items-start flex-col">
        <div className="flex justify-center items-center p-2">
            <img src={img} className="h-[30px] mr-[10px]" />
            <div className="font-[600]">ShopGrocery</div>
        </div>
        <center className="text-[23px] w-full flex items-center justify-center mt-[15px]">Reset Your Password</center>
      
      <div className="h-[110px] w-[100%] flex flex-col ">
        <p className="font-[600] ml-[50px] ">Email</p>
        <div className="w-full flex justify-center items">
        <MagicInput placeholder="Email"/>
        </div>
        <div className="flex w-[85%] justify-end font-[200] text-[crimson]">Error</div>
      </div>
      <div className="h-[80px] w-[100%] flex flex-col ">

        <div className="w-full flex item justify-center">
      <GlobalButton buttonName="Confirm" className="bg-[#4F46E5] hover:bg-[white] hover:text-black w-[50%] text-[17px] font-[600] text-[white]"/>
        </div>
        <div className="flex items-center justify-center w-full mt-[10px]">
            <div className="text-[black] text-[11px] font-[600]">Back to Login</div>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default ResetPass;
