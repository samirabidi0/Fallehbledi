'use client'
import ProfileImage from '../../../public/image/blank-profile-picture-973460_960_720.webp'
import Link from 'next/link'
import Image from 'next/image'
import { useActive } from '../context/activeContext'
import { useRef } from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp  } from "react-icons/fa6";
import { TiWeatherCloudy } from "react-icons/ti";


const profileMenu = () => {
  const { active, setActive } = useActive();
const menuRef = useRef<HTMLDivElement>();
const imgRef = useRef<HTMLDivElement> ()
window.addEventListener('click',(e)=>{
  if(e.target !== menuRef.current && e.target !== imgRef.current){
    setActive(false)
  } 
})
  return (
    <>
    <div onClick={()=>setActive(!active)} className= " flex items-center cursor-pointer  transition mr-[6rem]">
       
           <Image ref={imgRef} src={ProfileImage}  className="w-10 h-10 rounded-full mr-2 cursor-pointer"  alt="User dropdown"/>
  
       {active && <FaAngleUp />}
       {!active && <FaAngleDown/>}
    </div>   
    {active && <div id="user-dropdown" className="fixed mt-2 bg-white  divide-gray-100 rounded-lg shadow w-44 ">
    
    <div ref={menuRef} className="px-4 py-3 text-sm text-gray-900 ">
      <div>Bonnie Green</div>
      <div className="font-medium truncate">name@flowbite.com</div>
    </div>
    <ul className="py-2 text-sm text-gray-900 " aria-labelledby="user-menu-button">
      <li>
        <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-[#058f1a] hover:text-[#fff]">Weather</a>
      </li>
      <li>
        <Link href="/dash/marketprices" className="block px-4 py-2 text-gray-900 hover:bg-[#058f1a] hover:text-[#fff]">Market Prices</Link>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-[#058f1a] hover:text-[#fff]">Settings</a>
      </li>
    </ul>
    <div className="py-1">
      <a href="#"className="block px-4 py-2 text-sm text-gray-900 hover:bg-[#058f1a] hover:text-[#fff]">Sign out</a>
    </div>
</div>}
        
    </>

  )
}

export default profileMenu