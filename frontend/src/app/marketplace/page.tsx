
'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LiaShippingFastSolid } from "react-icons/lia";

interface tools {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
}

const Page: React.FC = () => {
  const [product, setProduct] = useState<tools[]>([]);
  console.log(product);
  
  useEffect(() => {
    const fetchTalents = async () => {
      try {
        const response = await axios.get<tools[]>('http://127.0.0.1:5000/api/tools/all');
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching talents:', error);
      }
    };

    fetchTalents();
  }, []);

  return (
    <div className='flex items-center justify-center flex-col'>
    <div className=' flex items-center  max-w-full mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-4xl dark:text-white'>
    <div className="">
    <h1 className='max-w-[40rem]' >🌻 -  Essential Tools for Modern Farmers and Top-Quality Farming Equipment for Every Need .</h1>
    <h1></h1>
    </div>
    <img src="https://img.freepik.com/free-vector/organic-farming-concept-with-man-winking_23-2148423024.jpg" alt="" className=' w-96' />
    </div>  
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 ml-24">

      {product.map((element) => (
        <div key={element.id} className="max-w-xs bg-white border rounded shadow-sm overflow-hidden flex flex-col transition transform hover:scale-105">
          <div className="relative">
            <img src={element.image} alt={element.name} className="rounded-sm ml-6 h-48 object-cover transition transform hover:scale-105"/>
            <div className="absolute bottom-4 right-4 flex items-center space-x-1 text-white">
              <span className="block w-2 h-2 bg-white rounded-full"></span>
              <span className="block w-2 h-2 bg-white rounded-full opacity-50"></span>
              <span className="block w-2 h-2 bg-white rounded-full opacity-50"></span>
            </div>
          </div>
          <div className="flex items-center p-3">
            <img src={element.image} alt={element.name} className="w-8 h-8 rounded-full" />
            <div className="ml-2 flex-1">
              <p className="text-sm font-semibold">{element.name}</p>
              <p className="text-xs text-gray-600 truncate">{element.description.split(',')[0]}</p>
            </div>
          </div>
          <div className="flex flex-col px-3 pb-3">
            <div className="flex items-center justify-between">
              <p className="flex items-center text-yellow-500">
                <i className="fas fa-star"></i>
                <span className="ml-1 text-black font-bold">🗃️ {element.quantity} pcs</span>
              </p>
              <span className="text-xs font-bold">À partir {element.price} DNT</span>
            </div>
            <hr className="my-2 border-gray-300" />
            <span className="ml-20 text-xs text-gray-800 flex items-center"><LiaShippingFastSolid size={16} className='mr-1' />free shipping</span>
          </div>
          <button className="w-full bg-green-500 text-white py-1 rounded-b hover:bg-green-700 transition duration-300">
            See More
          </button>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Page;

