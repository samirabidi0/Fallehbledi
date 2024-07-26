'use client';

import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import logo from '../../../public/image/img.jpg';
import logo1 from '../../../public/image/falleh.png';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  adress: string;
  phone: string;
  location: string;
}
// samir
// nbkk lucq nqns qyha


const Signup: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [adress, setAdress] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [error, setError] = useState<Record<string, string> | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const locations = [
    "Tunis", "Sfax", "Nabeul", "Sousse", "BenArous", "Ariana", "Bizerte",
    "Kairouan", "Monastir", "Medenine", "Kasserine", "SidiBouzid", "Mahdia",
    "Jendouba", "Manouba", "Gabes", "Gafsa", "Beja", "Kef", "Siliana",
    "Zaghouan", "Kebili", "Tataouine", "Tozeur"
  ];

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError({ confirmPassword: "Passwords do not match" });
      return;
    }

    const newUser: User = {
      firstName,
      lastName,
      email,
      password,
      adress,
      phone,
      location
    };

    try {
      const response = await axios.post("http://127.0.0.1:5000/api/farmer/signup", newUser);
      console.log(response.data);
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.errors) {
        const errors: Record<string, string> = {};
        err.response.data.errors.forEach((err: { path: string, msg: string }) => {
          errors[err.path] = err.msg;
          console.log(err.msg);
        });
        // console.log('Registration failed with errors:', errors);
        setError(errors);
        console.log(err.response.data);
      }
    }
  };

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
        <form onSubmit={handleFormSubmit}>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <label className="text-gray-800 text-sm mb-2 block">First Name</label>
              <input
                name="firstName"
                type="text"
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                placeholder=""
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {error?.firstName && <p className="text-red-500 text-sm">{error.firstName}</p>}
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Last Name</label>
              <input
                name="lastName"
                type="text"
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                placeholder=""
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {error?.lastName && <p className="text-red-500 text-sm">{error.lastName}</p>}
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Email</label>
              <input
                name="email"
                type="email"
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                placeholder=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {error?.email && <p className="text-red-500 text-sm">{error.email}</p>}
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Phone</label>
              <input
                name="phone"
                type="text"
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                placeholder=""
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {error?.phone && <p className="text-red-500 text-sm">{error.phone}</p>}
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Password</label>
              <div className="relative flex items-center">
                <input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
              {error?.password && <p className="text-red-500 text-sm">{error.password}</p>}
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Confirm Password</label>
              <input
                name="confirmPassword"
                type="password"
                required
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {error?.confirmPassword && <p className="text-red-500 text-sm">{error.confirmPassword}</p>}
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Adress</label>
              <input
                name="adress"
                type="text"
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                placeholder=""
                value={adress}
                onChange={(e) => setAdress(e.target.value)}
              />
              {error?.adress && <p className="text-red-500 text-sm">{error.adress}</p>}
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Location</label>
              <select
                name="location"
                required
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="">Select Location</option>
                {locations.map((loc, index) => (
                  <option key={index} value={loc}>{loc}</option>
                ))}
              </select>
              {error?.location && <p className="text-red-500 text-sm">{error.location}</p>}
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
  );
};

export default Signup;
