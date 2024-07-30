// import Image from 'next/image'
// import icon from "../../../../public/image/cloudy.png"

// async function getData() {
//     const res = await fetch('http://127.0.0.1:5000/weather');
//     if (!res.ok) {

//       throw new Error('Failed to fetch data');
//     }
//     return res.json();
//   }

//   async function Page() {
//     const data = await getData();  
//     console.log(data)
//     const current = data[0]
//     const forecast1 = data[1]
//     const forecast2 = data[2]
//     const forecast3 = data[3]
    
//   return (
//     <>
//     <div className="">
//     <div >
//         <div className="py-6 md:max-w-5xl mx-auto flex mb-4 w-full">
            
//             <div className="flex-1 p-3">
//                     <div className="max-w-sm w-full lg:max-w-full shadow px-6 py-6 bg-white rounded-lg mb-6">
//                           <div className="mb-20">
//                               <p className="text-3xl font-semibold text-gray-500">{current.location}</p>
//                               <p className="text-xl font-normal text-gray-500">{current.date}</p>
//                               <p className="text-xl font-normal text-gray-500">{current.weather}</p>
//                         </div>
//                             <div className="flex mb-10">
//                                 <div className="w-2/4 flex ">
//                                     <div className="flex-no-shring mr-5">
//                                       <Image src={icon} width="100" height={100} alt=''/> 
//                                     </div>
//                                           <div className="w-full text-6xl relative"> 
//                                                 32
//                                                 <sup className="text-lg absolute top-0 "> 
//                                                        <sup>{current.temperature}</sup> C 
//                                                 </sup> 
//                                              </div> 
//                                 </div>
//                                 <div className="w-2/4">
//                                     <div className="mb-10">
//                                         <p className=" text-gray-600 mt-5">Precipitation: 8%</p>
//                                         <p className=" text-gray-600">Humidity: 73%</p>
//                                         <p className=" text-gray-600">Wind: 10km/h</p>
//                                      </div>
//                                     <ul className="flex my-3 text-sm">
//                                         <li className="border-t">
//                                             <a className="bg-gray-200 border border-gray-500 text-center py-2 px-4 hover:shadow-outline hover:bg-gray-400   ">Temperature</a>
//                                         </li>
//                                         <li className="border-t">
//                                                 <a className="bg-gray-200 border border-l-0  border-gray-500 text-center py-2 px-4 hover:shadow-outline hover:bg-gray-400   ">Precipitation</a>
//                                         </li>
//                                         <li className="border-t">
//                                                 <a className="bg-gray-200 border border-l-0 border-gray-500 text-center py-2 px-4 hover:shadow-outline hover:bg-gray-400   ">Wind</a>
//                                         </li>
//                                     </ul>
//                                 </div>
//                         </div>
//                         <div className="flex">
//                             <div className="flex justify-between">
//                                             <div className="flex-col items-center mr-5">
//                                                     <p>
//                                                         {forecast1.day}
//                                                     </p>
//                                                     <img src="" />
//                                                     <p>
//                                                         {forecast1.lowTemperature} <sup>{forecast1.highTemperature}</sup>
//                                                     </p>
//                                                 </div>

//                                                 <div className="flex-col items-center mr-5">
//                                                         <p>
//                                                             {forecast2.day}
//                                                         </p>
//                                                         <img src="" />
//                                                         <p>
//                                                             {forecast2.lowTemperature} <sup>{forecast2.highTemperature}</sup>
//                                                         </p>
//                                                     </div>

//                                                     <div className="flex-col items-center mr-5">
//                                                             <p>
//                                                                 {forecast3.day}
//                                                             </p>
//                                                             <img src="" />
//                                                             <p>
//                                                                 {forecast3.lowTemperature} <sup>{forecast3.lowTemperature}</sup>
//                                                             </p>
//                                                         </div>  
                                                                    
//                             </div>
//                         </div>
//                     </div>
//             </div>
//         </div>
// </div>
// </div>
// </>
//   )
// }

// export default Page




"use client"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import Image from 'next/image';
import React from 'react';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const dummyData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Temperature',
      data: [22, 21, 23, 25, 24, 26, 27],
      fill: false,
      backgroundColor: 'blue',
      borderColor: 'blue',
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top',
    },
    title: {
      display: true,
      text: 'Weekly Temperature',
    },
  },
  scales: {
    x: {
      type: 'category',
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    y: {
      type: 'linear',
      beginAtZero: true,
    },
  },
};

async function getData() {
  const res = await fetch('http://127.0.0.1:5000/weather');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

const Page = async () => {
  const data = await getData();
  console.log(data);
  const current = data[0];

  return (
    <>
      <div className=''>
        <div>
          <div className='py-6 md:max-w-5xl mx-auto mb-4 w-full'>
            <div className='flex-1 p-3 text-white'>
              <div className='max-w-sm w-full lg:max-w-full shadow px-6 py-6 bg-white rounded-lg mb-6 mt-20 bg-[#6d7ade93]'>
                {/* Current weather box */}
                <div className='flex flex-col gap-y-3 mb-5 p-4 w-3/5 bg-blue-950 bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg border border-white border-opacity-40'>
                  <div>
                    <p>{current.weather}</p>
                    <p>{current.date}</p>
                  </div>
                  <div className='flex items-center gap-3'>
                    {/* icon here */}
                    <img
                      src='https://cdn.discordapp.com/attachments/424848293135253504/1267570904385323110/image.png?ex=66a944e5&is=66a7f365&hm=c2e8c8cc5d8c0d46ec84ba1e13a574b6238e0dcebca69969e37275863836d0f8&'
                      alt=''
                      width='50'
                    />
                    <h3>36°</h3>
                    <div>
                      <p>{current.weather}</p>
                      <p>Feels like 36°</p>
                    </div>
                  </div>
                  <p>This skies will be mostly clear. The low will be 79°.</p>
                  <div className='flex gap-5'>
                    <div>
                      <p>Air quality</p>
                      <p>46</p>
                    </div>
                    <div>
                      <p>Wind</p>
                      <p>{current.windspeed}</p>
                    </div>
                    <div>
                      <p>Humidity</p>
                      <p>{current.humidity}%</p>
                    </div>
                    <div>
                      <p>Visibility</p>
                      <p>6.2mi</p>
                    </div>
                    <div>
                      <p>Pressure</p>
                      <p>29.91 in</p>
                    </div>
                    <div>
                      <p>Dew point</p>
                      <p>74°</p>
                    </div>
                  </div>
                </div>

                {/* Graph Section */}
                <div className='mt-6'>
                  <h2 className='text-lg font-bold mb-4'>Temperature Graph</h2>
                  <div className='w-full h-40 bg-blue-200 rounded-lg p-4'>
                    <Line data={dummyData} options={options} />
                  </div>
                </div>

                <div>
                  <h2>3 day forecast</h2>
                  <div className='flex gap-2 w-full'>
                    <div className='w-80 p-2 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg border border-white border-opacity-40'>
                      <p>Today</p>
                      <div className='flex justify-between'>
                        <div>
                          <p>⛅</p>
                          <p>{current.temperature}°</p>
                        </div>
                        <div className='flex flex-col items-end'>
                          <p>{current.weather}</p>
                          <p>1%</p>
                        </div>
                      </div>
                    </div>
                    {data.slice(1).map((e: any, idx: any) => (
                      <div
                        key={idx}
                        className='w-60 p-2 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg border border-white border-opacity-40'
                      >
                        <p>{e.day}</p>
                        <div className='flex gap-3 justify-center items-center'>
                          <p>⛅</p>
                          <div>
                            <p>{e.highTemperature}°</p>
                            <p>{e.lowTemperature}°</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
  

