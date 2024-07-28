'use client';
import React from 'react'
import { useSearchParams } from 'next/navigation'
import { LiaShippingFastSolid } from "react-icons/lia";
const OneProduct = () => {

    const searchParams = useSearchParams();

    const id = searchParams.get('id');
    const name = searchParams.get('name');
    const description = searchParams.get('description');
    const image = searchParams.get('image') ?? '';
    const price = searchParams.get('price');
    const category = searchParams.get('category');
    const quantity = searchParams.get('quantity');

    return (
        <div className="max-w-6xl mx-auto p-8">
            <div className="bg-white p-6 rounded-lg shadow-lg mt-10 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8">
                <div className="flex-shrink-0 w-full md:w-1/2 relative">
                        <h1 className="text-3xl font-bold mb-4 text-center text-gray-800"> {name}</h1>

                    <img src={image} className='ml-16 h-72  rounded-lg shadow-md ' />
                </div>
                <div className="flex-1  ">
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md mt-12  ">
                    <span className="  absolute  bg-blue-600 bg-opacity-75 text-white p-2  rounded shadow-lg ml-36   ">🔗 {category}</span>
                        <div className="flex items-center  space-x-4 mb-4 mt-16">

                            <span className="text-gray-800 text-xl"> We have in stock </span>
                            <span className="text-gray-800 text-xl font-semibold"> : {quantity} Pcs</span>
                        </div>

                        <div className="flex items-center  space-x-4 mb-4 ">
                           <span className="text-gray-800 text-xl"> price of our product  </span>
                           <span className="text-gray-800 text-xl font-semibold"> : {price} DNT</span>
                       </div>
                       <span className="text-green-500  ml-5 "> <LiaShippingFastSolid size={16} className=' absolute mt-1' />free shipping  </span>



                        <hr className="my-4 border-gray-200" />
                        <div className="flex justify-center mb-6">
                            <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition">🛒 Add To Cart</button>
                        </div>
                    </div>
                    <div className="mt-8 -ml-96">
                    <hr className="my-4 border-gray-500" />
                        <h2 className="text-xl font-semibold mb-3 text-gray-800"> Description 🔍:</h2>
                        <p className="text-gray-700 leading-relaxed">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OneProduct