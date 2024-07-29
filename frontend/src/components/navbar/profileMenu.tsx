'use client'
import Image from 'next/image'
import ProfileImage from '../../../public/image/profile.jpg'
import { useState } from 'react'
const profileMenu = () => {
    const [showMenu,setShowMenu]=useState(false)
  return (
<div id="userDropdown" className=" absolute ml-[73rem]  bg-white  divide-gray-100 rounded-lg shadow w-44 ">
    <div className="px-4 py-3 text-sm text-gray-900 ">
      <div>Bonnie Green</div>
      <div className="font-medium truncate">name@flowbite.com</div>
    </div>
    <ul className="py-2 text-sm text-gray-900 dark:text-gray-200" aria-labelledby="avatarButton">
      <li>
        <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-[#058f1a] hover:text-[#fff]">Dashboard</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-[#058f1a] hover:text-[#fff]">Settings</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-[#058f1a] hover:text-[#fff]">Earnings</a>
      </li>
    </ul>
    <div className="py-1">
      <a href="#"className="block px-4 py-2 text-gray-900 hover:bg-[#058f1a] hover:text-[#fff]">Sign out</a>
    </div>
</div>
    
  )
}

export default profileMenu