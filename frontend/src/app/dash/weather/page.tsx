import Image from 'next/image'

const page = () => {
  return (
    <>
    <div className="">
    <div >
        <div className="py-6 md:max-w-5xl mx-auto flex mb-4 w-full">
            
            <div className="flex-1 p-3">
                    <div className="max-w-sm w-full lg:max-w-full shadow px-6 py-6 bg-white rounded-lg mb-6">
                          <div className="mb-20">
                              <p className="text-3xl font-semibold text-gray-500">Guwahati, Assam</p>
                              <p className="text-xl font-normal text-gray-500">Saturday 1.00 PM</p>
                              <p className="text-xl font-normal text-gray-500">Mostly Cloudy</p>
                        </div>
                            <div className="flex mb-10">
                                <div className="w-2/4 flex ">
                                    <div className="flex-no-shring mr-5">
                                      <Image src="" width="100" height={100} alt=''/> 
                                    </div>
                                          <div className="w-full text-6xl relative"> 
                                                32
                                                <sup className="text-lg absolute top-0 "> 
                                                       <sup>o</sup> C | <sup>o</sup> F
                                                </sup> 
                                             </div> 
                                </div>
                                <div className="w-2/4">
                                    <div className="mb-10">
                                        <p className=" text-gray-600 mt-5">Precipitation: 8%</p>
                                        <p className=" text-gray-600">Humidity: 73%</p>
                                        <p className=" text-gray-600">Wind: 10km/h</p>
                                     </div>
                                    <ul className="flex my-3 text-sm">
                                        <li className="border-t">
                                            <a className="bg-gray-200 border border-gray-500 text-center py-2 px-4 hover:shadow-outline hover:bg-gray-400   ">Temperature</a>
                                        </li>
                                        <li className="border-t">
                                                <a className="bg-gray-200 border border-l-0  border-gray-500 text-center py-2 px-4 hover:shadow-outline hover:bg-gray-400   ">Precipitation</a>
                                        </li>
                                        <li className="border-t">
                                                <a className="bg-gray-200 border border-l-0 border-gray-500 text-center py-2 px-4 hover:shadow-outline hover:bg-gray-400   ">Wind</a>
                                        </li>
                                    </ul>
                                </div>
                        </div>
                        <div className="flex">
                            <div className="flex justify-between">
                                            <div className="flex-col items-center mr-5">
                                                    <p>
                                                        Sat
                                                    </p>
                                                    <img src="" />
                                                    <p>
                                                        32 <sup>o</sup>
                                                    </p>
                                                </div>

                                                <div className="flex-col items-center mr-5">
                                                        <p>
                                                            Sun
                                                        </p>
                                                        <img src="" />
                                                        <p>
                                                            Mon <sup>o</sup>
                                                        </p>
                                                    </div>

                                                    <div className="flex-col items-center mr-5">
                                                            <p>
                                                                Tue
                                                            </p>
                                                            <img src="" />
                                                            <p>
                                                                32 <sup>o</sup>
                                                            </p>
                                                        </div>
                                                        <div className="flex-col items-center mr-5">
                                                                <p>
                                                                    Wed
                                                                </p>
                                                                <img src="" />
                                                                <p>
                                                                    32 <sup>o</sup>
                                                                </p>
                                                            </div>
                                                            
                                                                
                                                                    
                            </div>
                        </div>
                    </div>
            </div>
        </div>
</div>
</div>
</>
  )
}

export default page