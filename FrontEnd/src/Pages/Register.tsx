import img from "../assets/mark.svg"
import MagicInput from "../Components/MagicInput"
import GlobalButton from "../Components/GlobalButton"
import { NavLink, useNavigate } from "react-router-dom"
import {useForm} from "react-hook-form"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react"
import Input from "./Input"


const Register = () => {
  const navigate = useNavigate();
  const schema = yup.object({
    Name: yup.string().required("Must be filled"),
    email: yup.string().required("Must be Filled"),
    password: yup.string().required("Must be filled"),
    confirm: yup.string().oneOf([yup.ref("password")])
  });

const {
  register,
  formState: {errors},
  handleSubmit,
} = useForm({
  resolver: yupResolver(schema),
});

  // const handleSubmitNow = handleSubmit((data: any) => {
    
  // })
  const [state, setState] = useState("")
  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center bg-black">
      <form className="border w-[450px] h-[620px] rounded-md shadow-md bg-slate-200 flex items-start flex-col">
        <div className="flex justify-center items-center p-2">
            <img src={img} className="h-[30px] mr-[10px]" />
            <div className="font-[600]">ShopGrocery</div>
        </div>
        <center className="text-[23px] w-full flex items-center justify-center">Create An Account</center>
      <div className="h-[110px] w-[100%] flex flex-col ">
        <p className="font-[600] ml-[50px] ">Name</p>
        <div className="w-full flex justify-center items">
        <Input placeholder="Name" 
        {...register("Name")}
        value={state}
        onChange={(e: any) => setState(e.target.value)}
        />
        </div>
        {errors.confirm?.message && (
        <div className="flex w-[85%] justify-end font-[200] text-[crimson]">{errors.confirm?.message}</div>
        )}
      </div>
      <div className="h-[110px] w-[100%] flex flex-col ">
        <p className="font-[600] ml-[50px] ">Email</p>
        <div className="w-full flex justify-center items">
        <Input placeholder="Email"
        {...register("email")}
        value={state}
        onChange={(e: any) => setState(e.target.value)}
        />
        </div>
        {errors.confirm?.message && (
        <div className="flex w-[85%] justify-end font-[200] text-[crimson]">{errors.confirm?.message}</div>
        )}
      </div>
      <div className="h-[110px] w-[100%] flex flex-col ">
        <p className="font-[600] ml-[50px] ">Password</p>
        <div className="w-full flex justify-center items">
        <Input placeholder="Password"
        {...register("password")}
        value={state}
        onChange={(e: any) => setState(e.target.value)}
        />
        </div>
        {errors.confirm?.message && (
        <div className="flex w-[85%] justify-end font-[200] text-[crimson]">{errors.confirm?.message}</div>
        )}
      </div>
      <div className="h-[110px] w-[100%] flex flex-col ">
        <p className="font-[600] ml-[50px] ">Confirm Password</p>
        <div className="w-full flex justify-center items">
        <Input  placeholder="Confirm Password"
        {...register("password")}
        value={state}
        onChange={(e: any) => setState(e.target.value)}
        />
        </div>
        {errors.confirm?.message && (
        <div className="flex w-[85%] justify-end font-[200] text-[crimson]">{errors.confirm?.message}</div>
        )}
      </div>
      <div className="h-[80px] w-[100%] flex flex-col ">
        <div className="w-full flex item justify-center">
      <GlobalButton buttonName="Register" className="bg-[#4F46E5] hover:bg-[#736ecd] hover:text-white w-[50%] text-[17px] font-[600] text-[white]" type="submit"/>
     
      {/* <button className="font-[700]" type="submit">Register</button> */}
        </div>
        <div className="flex w-[85%] justify-center font-[700] text-[black] ml-[30px] text-[11px]">Already have an account?
            <NavLink to="/login">
            <span className="text-[#4F46E5] ml-[5px] cursor-pointer"> Login</span>
            </NavLink>         
         </div>
      </div>
      </form>
      
    </div>
  )
}

export default Register;
