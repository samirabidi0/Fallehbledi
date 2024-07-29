
'use client'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

const ProfileMenu = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <div className="relative">
            <button onClick={toggleMenu} className="flex items-center text-sm rounded-full focus:outline-none">
                <Image
                    src="/image/profile.jpg"
                    alt="User Profile"
                    width={75}
                    height={60}
                    className="rounded-full"
                />
            </button>
            {showMenu && (
                <div id="userDropdown" className="absolute right-0 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow">
                    <div className="px-4 py-3 text-sm text-gray-900">
                        <div>Bonnie Green</div>
                        <div className="font-medium truncate">name@flowbite.com</div>
                    </div>
                    <ul className="py-2 text-sm text-gray-900">
                        <li>
                            <Link href="/dash" className="block px-4 py-2 hover:bg-[#058f1a] hover:text-white">Dashboard</Link>
                        </li>
                        <li>
                            <Link href="/editprofile" className="block px-4 py-2 hover:bg-[#058f1a] hover:text-white">Settings</Link>
                        </li>
                        <li>
                            <Link href="#" className="block px-4 py-2 hover:bg-[#058f1a] hover:text-white">My Cart</Link>
                        </li>
                    </ul>
                    <div className="py-1">
                        <Link href="/" className="block px-4 py-2 hover:bg-[#058f1a] hover:text-white">Sign out</Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProfileMenu
