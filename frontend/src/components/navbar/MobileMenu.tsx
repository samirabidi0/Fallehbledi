import Link from 'next/link'
const MobileMenu = () => {
  return (
<nav className="border-gray-200 bg-gray-50 h-[100vh] ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <div className=" w-full" >
      <ul className="flex flex-col space-y-6 text-[20px] mt-2 rounded-lg bg-gray-50 ">
                         <li>
                            <Link href="/" className="block py-2 pl-3 pr-4  text-gray-900  rounded lg:bg-transparent lg:text-[#000] lg:p-0 hover:text-[#058f1a]">Home</Link>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4  text-gray-900  rounded lg:bg-transparent lg:text-[#000] lg:p-0 hover:text-[#058f1a]">News</a>
                        </li>
                        <li>
                            <Link href="/marketplace" className="block py-2 pl-3 pr-4  text-gray-900  rounded lg:bg-transparent lg:text-[#000] lg:p-0 hover:text-[#058f1a] ">Marketplace</Link>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4  text-gray-900  rounded lg:bg-transparent lg:text-[#000] lg:p-0 hover:text-[#058f1a]">Community</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4  text-gray-900  rounded lg:bg-transparent lg:text-[#000] lg:p-0 hover:text-[#058f1a]">About</a>
                        </li>
                        <li>
                            <Link href="/contact" className="block py-2 pl-3 pr-4   text-gray-900  rounded lg:bg-transparent lg:text-[#000] lg:p-0 hover:text-[#058f1a]">Contact</Link>
                        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default MobileMenu