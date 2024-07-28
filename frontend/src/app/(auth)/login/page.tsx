"user client "
import React from 'react';
import { TfiEmail } from "react-icons/tfi";
import { RiLockPasswordLine } from "react-icons/ri";
const Login = () => {
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-white  ">
      <div className="max-w-md w-full p-6   rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <img src="https://cdn.icon-icons.com/icons2/53/PNG/256/farmer_10763.png" alt="" className='logo login ml-16'/>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black">
            Email
            </label>
            <TfiEmail size={20}  className='absolute mt-4 ml-2'/>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-12 py-2 border border-gray-300 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 rounded-md"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-black">
              Password
            </label>
            <RiLockPasswordLine size={22} className='absolute mt-3 ml-2' />
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full px-12 py-2 border border-gray-300 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 rounded-md"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w- bg-green-600 hover:bg-green-400 text-white py-2 px-4 rounded-md ml-40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;