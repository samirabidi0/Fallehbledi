import React from 'react'
import Image from 'next/image';
import logo from'../../../public/image/img.jpg'
import logo1 from'../../../public/image/falleh.png'

const signup: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="flex flex-col items-center lg:items-start justify-center">
        <h1 className="text-center text-2xl font-extrabold dark:text-white">
          “The discovery of agriculture was the first big step toward a civilized life.“
        </h1>
        <Image
          src={logo}
          width={450}
          height={450}
          alt="Picture of the farmer"
          
        />
      </div>
      <div className="max-w-4xl mx-auto font-[sans-serif]">
        <div className="text-center mb-16">
          <h4 className="text-gray-800 text-base font-semibold mt-6">Sign up with</h4>
          <Image
            src={logo1}
            width={100}
            height={75}
            alt="logo"
            className="mx-auto mt-4"
          />
        </div>
        <form>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <label className="text-gray-800 text-sm mb-2 block">First Name</label>
              <input
                name="firstName"
                type="text"
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                placeholder=""
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Last Name</label>
              <input
                name="lastName"
                type="text"
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                placeholder=""
              />
            </div>
            </div>
            </form>
        </div>
      </div>
  )
}

export default signup

