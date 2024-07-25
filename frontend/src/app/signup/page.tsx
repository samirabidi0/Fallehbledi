'use client'
import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import logo from '../../../public/image/img.jpg'
import logo1 from '../../../public/image/falleh.png'

const signup: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const locations = [
    "Tunis", "Sfax", "Nabeul", "Sousse", "BenArous", "Ariana", "Bizerte",
    "Kairouan", "Monastir", "Medenine", "Kasserine", "SidiBouzid", "Mahdia",
    "Jendouba", "Manouba", "Gabes", "Gafsa", "Beja", "Kef", "Siliana",
    "Zaghouan", "Kebili", "Tataouine", "Tozeur"
  ]
  
  
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
          <h2 className="text-gray-800 text-base font-semibold mt-6">Sign up with</h2>
          <Image
            src={logo1}
            width={150}
            height={100}
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
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Email</label>
              <input
                name="email"
                type="email"
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                placeholder=""
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Phone</label>
              <input
                name="phone"
                type="text"
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                placeholder=""
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Password</label>
              <div className="relative flex items-center">
                <input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke={showPassword ? "#000" : "#bbb"}
                  className="w-4 h-4 absolute right-4 cursor-pointer"
                  viewBox="0 0 24 24"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <>
                      <path d="M1 1l22 22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="12" cy="12" r="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </>
                  ) : (

                    <>
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="12" cy="12" r="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </>
                  )}
                </svg>
              </div>
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Confirm password</label>
              <div className="relative flex items-center">
                <input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke={showPassword ? "#000" : "#bbb"}
                  className="w-4 h-4 absolute right-4 cursor-pointer"
                  viewBox="0 0 24 24"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <>
                      <path d="M1 1l22 22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="12" cy="12" r="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </>
                  ) : (
                    <>
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="12" cy="12" r="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </>
                  )}
                </svg>
              </div>
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Adress</label>
              <input
                name="Adress"
                type="text"
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                placeholder=""
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">location</label>
              <select
                id="location"
                name="location"
                required
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
              >
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-12 text-center">
            <button
              type="button"
              className="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-green-600 focus:outline-none"
            >
              Sign up
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            Log in
          </p>
        </div>
      </div>
    </div>
  )
}

export default signup

