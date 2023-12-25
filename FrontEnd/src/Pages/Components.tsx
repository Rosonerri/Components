import { Link } from "react-router-dom"
import img2 from "../assets/beam.png"
import pix from "../assets/dashBoard.png"


const Components = () => {
  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center">
      <div className="bg-[white] w-[95%] min-h-[100vh] border"
      style={{
        backgroundImage: `url(${img2})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
      >
    <div className="h-[20%] w-[100%] flex justify-between items-center mt-8">
        <div className="w-[32%]">
            <h1 className="font-[700]">Application Components</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, itaque eius voluptates?</p>
        </div>
        <div className="w-[32%]">
            <h1 className="font-[700]">Marketing Components</h1>
            <p className="lg:block sm:hidden md:block">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, itaque eius voluptates?</p>
        </div>
        <div className="w-[32%]">
            <h1 className="font-[700]">Ecommerce Components</h1>
            <p className="lg:block sm:hidden md:block">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, itaque eius voluptates?</p>
        </div>
    </div>
    <div  className="min-h-[80%] w-[100%] grid lg:grid-cols-4 gap-2 mt-9 md:grid-cols-2">
     <Link to="/HeaderComp">
     <div className="rounded-md h-[250px] shadow-md flex items-center flex-col hover:bg-[#F9FAFB] transition-all duration-300 cursor-pointer">
        <div className="w-[95%] h-[75%]">
            <img src={pix}  />
        </div>
        <div className="w-[95%]">
          <div className="font-[700] hover:text-[blue] transition-all duration-300">Header Layouts</div>
          <div className="font-[grey] text-[13px] font-[500]">1 Component</div>
        </div>
      </div>
     </Link>
      <div className="rounded-md h-[250px] shadow-md flex items-center flex-col hover:bg-[#F9FAFB] transition-all duration-300 cursor-pointer">
        <div className="w-[95%] h-[75%]">
            <img src={pix}  />
        </div>
        <div className="w-[95%] h-[25%]">
          <div className="font-[700] hover:text-[blue] transition-all duration-300">Dashbord Layouts</div>
          <div className="font-[grey] text-[13px] font-[500]">10 Components</div>
        </div>
      </div>
      <div className="rounded-md h-[250px] shadow-md flex items-center flex-col hover:bg-[#F9FAFB] transition-all duration-300 cursor-pointer">
        <div className="w-[95%] h-[75%]">
            <img src={pix}  />
        </div>
        <div className="w-[95%] h-[25%]">
          <div className="font-[700] hover:text-[blue] transition-all duration-300">Form Layouts</div>
          <div className="font-[grey] text-[13px] font-[500]">4 Components</div>
        </div>
      </div>
      <div className="rounded-md h-[250px] shadow-md flex items-center flex-col hover:bg-[#F9FAFB] transition-all duration-300 cursor-pointer">
        <div className="w-[95%] h-[75%]">
            <img src={pix}  />
        </div>
        <div className="w-[95%] h-[25%]">
          <div className="font-[700] hover:text-[blue] transition-all duration-300">Stack Layouts</div>
          <div className="font-[grey] text-[13px] font-[500]">11 Components</div>
        </div>
      </div>
    </div>
    <div  className="min-h-[80%] w-[100%] grid lg:grid-cols-4 gap-2 mt-9 md:grid-cols-2">
      <div className="rounded-md h-[250px] shadow-md flex items-center flex-col hover:bg-[#F9FAFB] transition-all duration-300 cursor-pointer">
        <div className="w-[95%] h-[75%]">
            <img src={pix}  />
        </div>
        <div className="w-[95%]">
          <div className="font-[700] hover:text-[blue] transition-all duration-300">DashBoard Layouts</div>
          <div className="font-[grey] text-[13px] font-[500]">1 Component</div>
        </div>
      </div>
      <div className="rounded-md h-[250px] shadow-md flex items-center flex-col hover:bg-[#F9FAFB] transition-all duration-300 cursor-pointer">
        <div className="w-[95%] h-[75%]">
            <img src={pix}  />
        </div>
        <div className="w-[95%] h-[25%]">
          <div className="font-[700] hover:text-[blue] transition-all duration-300">Header Layouts</div>
          <div className="font-[grey] text-[13px] font-[500]">10 Components</div>
        </div>
      </div>
      <div className="rounded-md h-[250px] shadow-md flex items-center flex-col hover:bg-[#F9FAFB] transition-all duration-300 cursor-pointer">
        <div className="w-[95%] h-[75%]">
            <img src={pix}  />
        </div>
        <div className="w-[95%] h-[25%]">
          <div className="font-[700] hover:text-[blue] transition-all duration-300">Form Layouts</div>
          <div className="font-[grey] text-[13px] font-[500]">4 Components</div>
        </div>
      </div>
      <div className="rounded-md h-[250px] shadow-md flex items-center flex-col hover:bg-[#F9FAFB] transition-all duration-300 cursor-pointer">
        <div className="w-[95%] h-[75%]">
            <img src={pix}  />
        </div>
        <div className="w-[95%] h-[25%]">
          <div className="font-[700] hover:text-[blue] transition-all duration-300">Stack Layouts</div>
          <div className="font-[grey] text-[13px] font-[500]">11 Components</div>
        </div>
      </div>
    </div>
      </div>
    </div>
  )
}

export default Components
