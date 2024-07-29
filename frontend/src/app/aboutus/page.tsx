// components/AboutUs.tsx
import React from 'react';
import Image from 'next/image';
import logo from "../../../public/image/aboutus.jpg"

const Aboutus = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="sm:flex items-center max-w-screen-xl mx-auto bg-white p-10 rounded-lg shadow-md">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center">
            {/* <Image
              src={logo}
              width={1000}
              height={20}
              alt="Picture of the farmer"
            /> */}
            <img src="https://img.freepik.com/photos-gratuite/femme-regarde-elle-tablette-quoique-agriculture_23-2148580032.jpg?size=626&ext=jpg&ga=GA1.2.1609262325.1718872085&semt=sph" alt="About us" />
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <h2 className="my-4 font-bold text-3xl sm:text-4xl">
              About <span className="text-green-600">us</span>
            </h2>
            <p className="text-gray-700">
              Welcome to FALLEH BLEDI where farming 
              meets innovation! Whether you're cultivating a  
              backyard garden or managing vast fields, our app 
              is your go-to companion for all things agriculture. From 
              personalized crop tips to real-time weather updates and market insights
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
