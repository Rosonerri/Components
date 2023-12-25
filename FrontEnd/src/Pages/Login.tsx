import img from "../assets/mark.svg"
import MagicInput from "../Components/MagicInput"
import GlobalButton from "../Components/GlobalButton"
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { NavLink } from "react-router-dom"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";


const Login = () => {
  const schema = yup.object({
    email: yup.string().required("Must be filled"),
    password: yup.string().required("must be filled")
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema)
  })
  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center bg-black">
      <form className="border w-[450px] h-[620px] rounded-md shadow-md bg-slate-200 flex items-start flex-col">
        <div className="flex justify-center items-center p-2">
            <img src={img} className="h-[30px] mr-[10px]" />
            <div className="font-[600]">ShopGrocery</div>
        </div>
        <center className="text-[23px] w-full flex items-center justify-center mt-[15px]">Sign in to your account</center>
      
      <div className="h-[110px] w-[100%] flex flex-col ">
        <p className="font-[600] ml-[50px] ">Email</p>
        <div className="w-full flex justify-center items">
        <MagicInput placeholder="Email"
        {...register("email")}
        />
        </div>
       {errors.email?.message}
      </div>
      <div className="h-[110px] w-[100%] flex flex-col ">
        <p className="font-[600] ml-[50px] ">Password</p>
        <div className="w-full flex justify-center items">
        <MagicInput placeholder="Password"
        {...register("password")}
        />
        </div>
        {errors.password?.message}
      </div>
      <div className="h-[80px] w-[100%] flex flex-col ">
       <NavLink to="/reset">
       <div className="flex w-[85%] justify-center font-[700] text-[11px] text-[#4F46E5] ml-[35px] cursor-pointer"> Forgot Password?</div>
       </NavLink>
        <div className="w-full flex item justify-center">
      <GlobalButton buttonName="Login" className="bg-[#4F46E5] hover:bg-[white] hover:text-black w-[50%] text-[17px] font-[600] text-[white]"/>
        </div>
        <div className="flex items-center justify-center w-full mt-[10px]">
            <div className="text-grey w-[120px] h-[1px] bg-slate-400 mr-[5px]"/>
            <div className="text-[black] text-[11px] font-[600]">Or Continue with</div>
            <div className="text-grey w-[120px] h-[1px] bg-slate-400 ml-[5px]"/>
        </div>
        <div className="flex justify-center items-center mt-[25px] cursor-pointer">
            <div className="flex justify-center items-center border bg-[black] hover:bg-[white] hover:text-black w-[30%] text-[17px] font-[600] text-[white] py-2 rounded-md ">
                <div><FaGithub className="mr-[5px]"/></div>
                <span> Github</span>
            </div>
            <div className="flex justify-center items-center border bg-[#1D9BF0] hover:bg-[white] hover:text-black w-[30%] text-[17px] font-[600] text-[white] py-2 rounded-md ">
                <div><FaTwitter className="mr-[5px]"/></div>
                <span>Twitter</span>
            </div>
        </div>
      </div>
      </form>
      
    </div>
  )
}

export default Login;
