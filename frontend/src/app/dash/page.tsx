import Navbar from "@/components/dash/Navbar"
import SideBar from "@/components/dash/sideBar"
import Weather from "@/app/dash/weather"
const page = () => {
  return (
    <div>
        <Navbar />
        <SideBar />
        <Weather /> 
    </div>
  )
}

export default page