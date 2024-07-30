"use client"
import { LiaShippingFastSolid } from "react-icons/lia";
import Link from 'next/link';

interface Tools {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
}

// Fetch data on the server side
async function getData(query: string): Promise<Tools[]> {
  const url = query 
    ? `http://127.0.0.1:5000/api/tools/search?name=${query}` 
    : 'http://127.0.0.1:5000/api/tools/all';

  const res = await fetch(url, { next: { revalidate: 20 } });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

// Server-side component
export default async function Page({ searchParams }: { searchParams: { name: string } }) {
  const query = searchParams.name || '';
  const products = await getData(query);
  
  return (
    <div className='flex items-center justify-center flex-col p-6'>
      <div className='flex items-center max-w-full mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-4xl dark:text-white mt-16'>
        <h1 className='max-w-[45rem]  mr-32 text-gray-900'> Essential Tools for Modern Farmers and Top-Quality Farming Equipment for Every Need.</h1>
        <img src="https://img.freepik.com/free-vector/organic-farming-concept-with-man-winking_23-2148423024.jpg" alt="Farming" className='w-56 ml-4 rounded' />
      </div>
      <div className='h-0.5 w-[75rem] bg-green-800 '></div>

      <p className='mt-4 mb-2 text-lg font-medium'>Search for your product : </p>
      <form method="get" action="/">
        <input 
          type="text" 
          name="name"
          className="mb-4 p-2 border rounded shadow-sm w-full max-w-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-green-100"
          placeholder=" 🔍 Search ..."
        />
        <button type="submit" className="hidden"></button>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {products.map((element) => (
          <div key={element.id} className="max-w-xs bg-white border rounded shadow-sm overflow-hidden flex flex-col transition transform hover:scale-105">
            <div className="relative">
              <img src={element.image} alt={element.name} className="rounded-sm h-48 object-cover transition transform hover:scale-105"/>
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
                  <span className="ml-1 text-black font-bold"> 🗃️ {element.quantity} pcs</span>
                </p>
                <span className="text-xs font-bold">price: {element.price} DNT</span>
              </div>
              <hr className="my-2 border-gray-300" />
              <span className="ml-20 text-xs text-gray-800 flex items-center">
                <LiaShippingFastSolid size={16} className='mr-1' />free shipping
              </span>
            </div>
            <Link href={`oneproduct?id=${element.id}&name=${element.name}&description=${element.description}&image=${element.image}&price=${element.price}&category=${element.category}&quantity=${element.quantity}`}>
              <button className="w-full bg-green-500 text-white py-1 rounded-b hover:bg-green-700 transition duration-300">
                See More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
