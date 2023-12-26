import img from "../assets/mark.svg"
import MagicInput from "../Components/MagicInput"
import GlobalButton from "../Components/GlobalButton"
import { NavLink, useNavigate } from "react-router-dom"
import {useForm} from "react-hook-form"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react"


const FormProp = () => {
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

  const handleSubmitNow = handleSubmit((data: any) => {
    console.log(data)
  })
  const [state, setState] = useState("")
  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center bg-black">
      <form className="border w-[450px] h-[620px] rounded-md shadow-md bg-slate-200 flex items-start flex-col" onSubmit={handleSubmitNow}>
        <div className="flex justify-center items-center p-2">
            <img src={img} className="h-[30px] mr-[10px]" />
            <div className="font-[600]">ShopGrocery</div>
        </div>
        <center className="text-[23px] w-full flex items-center justify-center">Create An Account</center>
      <div className="h-[110px] w-[100%] flex flex-col ">
        <p className="font-[600] ml-[70px] ">Name</p>
        <div className="w-[80%] flex justify-center items border ml-[50px] rounded-md">
        <input placeholder="Name" className="w-[90%] h-[35px] outline-none rounded-md"
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
        <p className="font-[600] ml-[70px] ">Email</p>
        <div className="w-[80%] flex justify-center items border ml-[50px] rounded-md">
        <input placeholder="Email" className="w-[90%] h-[35px] outline-none rounded-md"
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
        <p className="font-[600] ml-[70px] ">Password</p>
        <div className="w-[80%] flex justify-center items border ml-[50px] rounded-md">
        <input placeholder="Password" className="w-[90%] h-[35px] outline-none rounded-md"
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
        <p className="font-[600] ml-[70px] ">Confirm Password</p>
        <div className="w-[80%] flex justify-center items border ml-[50px] rounded-md">
        <input placeholder="Confirm Password" className="w-[90%] h-[35px] outline-none rounded-md"
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
      <button className="font-[700] bg-[#4F46E5] py-2 px-[60px] rounded-md text-[white] hover:bg-[#8b87d0] transition-all duration-300 mb-[20px]" type="submit">Register</button>
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

export default FormProp;
