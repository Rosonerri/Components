import { useState } from "react";
import GlobalButton from "../Components/GlobalButton";
import {FaAngleRight} from "react-icons/fa"
import { NavLink } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false)
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[95%] h-[50px] bg-[white] flex justify-between items-center">

        <div className="font-[700] bg-[grey] w-[50px] h-[50px] rounded-[50%] border shadow-md flex justify-center items-center">Logo</div>

        <div className="flex font-[500]  w-[25%] justify-between items-center">
            <nav>Home</nav>
            <nav>Components</nav>
            <nav>Services</nav>
            <nav>Help</nav>
        </div>
        <div className="flex w-[13%] justify-between items-center text-[14px] font-[700]">
            <GlobalButton buttonName="SignUp" choice="pry" className="bg-[crimson] text-[white] hover:bg-[white] hover:text-black"
            onClick={() =>{
              setToggle(!toggle)
            }}
            />
            <GlobalButton buttonName="LogIn" choice="pry" className="bg-[white] text-[black] hover:bg-[crimson] hover:text-white"/>
        </div>
      </div>
   
    {toggle && (
       <div className="border absolute shadow-md rounded-md bg-white-400 w-[200px] h-[220px] top-[50px] right-[10px] text-[14px] font-[500] flex  items-center flex-col">
      <NavLink to="/Register">
      <div className="flex items-center justify-center px-2 rounded-md py-2 cursor-pointer hover:bg-slate-200 mb-[10px] mt-[10px] transition-all duration-300">
       <p>Sign In As a Dispatcher</p>
       <FaAngleRight className="text-[green] ml-[5px]"/>
       </div>
      </NavLink>
       <div className="flex items-center justify-center px-2 rounded-md py-2 cursor-pointer hover:bg-slate-200 mb-[10px] mt-[5px] transition-all duration-300">
       <p>Sign In As an Admin</p>
       <FaAngleRight className="text-[green] ml-[5px]"/>
       </div>
       <div className="flex items-center justify-center px-2 rounded-md py-2 cursor-pointer hover:bg-slate-200 mb-[10px] mt-[5px] transition-all duration-300">
       <p>Sign In As a Vendor</p>
       <FaAngleRight className="text-[green] ml-[5px]"/>
       </div>
       <div className="flex items-center justify-center px-2 rounded-md py-2 cursor-pointer hover:bg-slate-200 mb-[10px] mt-[5px] transition-all duration-300">
       <p>Sign In As a User</p>
       <FaAngleRight className="text-[green] ml-[5px]"/>
       </div>
      
       </div>
     )}
    </div>
  )
}

export default Header;
