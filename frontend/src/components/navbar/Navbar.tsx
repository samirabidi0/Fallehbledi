import Image from 'next/image'
import Logo from '../../../public/image/falleh.png'
import Link from 'next/link'
import { IoSearchOutline } from "react-icons/io5";
import MobileMenu from './MobileMenu'
import { LuMenu } from "react-icons/lu";
const Navbar = () => {
  return (
    <div className="flex justify-center">
    <div className="flex items-start justify-center space-x-4 ">
        <LuMenu size={32} className='mt-5 md:hidden block' />
                <nav className='p-1.5 flex items-center justify-center '>
                          <div className="container flex items-center justify-between space-x-6">
                {/*for the logo*/}
            <div className="logo  flex-shrink-0 ">
                <Image src={Logo} alt="Falleh" width={150} height={50}  />
            </div>
            {/*for the navlinks*/}
            <div className="links w-[30rem] hidden  md:flex items-center justify-between space-x-2   ">
             <Link href='/' className='hover:bg-[#058f1a] cursor-pointer hover:p-1.5 rounded-md hover:text-[#fff] '>Home</Link>
             <Link href='/' className='hover:bg-[#058f1a] cursor-pointer hover:p-1.5 rounded-md hover:text-[#fff] '>News</Link>
             <Link href='/' className='hover:bg-[#058f1a] cursor-pointer hover:p-1.5 rounded-md hover:text-[#fff] '>Blog</Link>
             <Link href='/' className='hover:bg-[#058f1a] cursor-pointer hover:p-1.5 rounded-md hover:text-[#fff] '>Explore</Link>
             <Link href='/' className='hover:bg-[#058f1a] cursor-pointer hover:p-1.5 rounded-md hover:text-[#fff] '>About</Link>
             <Link href='/' className='hover:bg-[#058f1a] cursor-pointer hover:p-1.5 rounded-md hover:text-[#fff] '>Contact</Link>
            </div>
            {/*for the search bar*/}
            <div className="search-bar hidden md:flex items-center p-2 bg-gray-100 rounded-[10px] ">
             <IoSearchOutline className="search-icon text-gray-400"/>
                <input type="text" placeholder="Search..." className='bg-gray-100 text-[14px] ml-2 outline-none'/>
            </div>
            {/*for the authentication links*/}
           <div className="auth flex items-center space-x-6">
             <Link href='/login'>Login</Link>
             <Link href='/signup' className='bg-[#058f1a] p-2 text-[#fff] rounded-lg'>Signup</Link>
            </div>
            </div>
        </nav>
        </div>
        </div>
  )
}

export default Navbar