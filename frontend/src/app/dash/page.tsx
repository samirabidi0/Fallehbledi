import Navbar from "@/components/dash/Navbar"
import SideBar from "@/components/dash/sideBar"
import Weather from './weather'
import Marketprices from "./marketPrice"
import {cookies} from 'next/headers'

const page = () => {
  const GetUser =cookies().get("Authorization")
  const user = GetUser !== undefined ? GetUser.value : null;
  
  return (
    <div className="">
        <Navbar />
        <SideBar />
        <div className=" ml-[15rem]">
        <Marketprices />

</div>
        <div className=" flex justify-between ">
        <div className=" ml-[20rem] flex flex-col space-y-5">
          <h1 className="text-3xl font-bold mt-6 text-gray-900 ">Welcome <span className="text-[#058f1a]">UserName !</span></h1>
          <p className="w-[37rem]">Explore the features, check the <span className="text-[#058f1a]">weather</span>, and get the lastest <span className="text-[#058f1a]">market prices.</span> Your journey begins here. Let's make the most of it together!</p>
        </div>
        <Weather/>
        </div>
        

        
    </div>

  )
}

export default page