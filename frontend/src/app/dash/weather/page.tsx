import Image from 'next/image'
import icon from "../../../../public/image/cloudy.png"

async function getData() {
    const res = await fetch('http://127.0.0.1:5000/weather');
    if (!res.ok) {

      throw new Error('Failed to fetch data');
    }
    return res.json();
  }

  async function Page() {
    const data = await getData();  
    console.log(data)
    const current = data[0]
    const forecast1 = data[1]
    const forecast2 = data[2]
    const forecast3 = data[3]
  return (
    <>
    <div className="">
    <div >
        <div className="py-6 md:max-w-5xl mx-auto flex mb-4 w-full">
            
            <div className="flex-1 p-3">
                    <div className="max-w-sm w-full lg:max-w-full shadow px-6 py-6 bg-white rounded-lg mb-6">
                          <div className="mb-20">
                              <p className="text-3xl font-semibold text-gray-500">{current.location}</p>
                              <p className="text-xl font-normal text-gray-500">{current.date}</p>
                              <p className="text-xl font-normal text-gray-500">{current.weather}</p>
                        </div>
                            <div className="flex mb-10">
                                <div className="w-2/4 flex ">
                                    <div className="flex-no-shring mr-5">
                                      <Image src={icon} width="100" height={100} alt=''/> 
                                    </div>
                                          <div className="w-full text-6xl relative"> 
                                                32
                                                <sup className="text-lg absolute top-0 "> 
                                                       <sup>{current.temperature}</sup> C 
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
                                                        {forecast1.day}
                                                    </p>
                                                    <img src="" />
                                                    <p>
                                                        {forecast1.lowTemperature} <sup>{forecast1.highTemperature}</sup>
                                                    </p>
                                                </div>

                                                <div className="flex-col items-center mr-5">
                                                        <p>
                                                            {forecast2.day}
                                                        </p>
                                                        <img src="" />
                                                        <p>
                                                            {forecast2.lowTemperature} <sup>{forecast2.highTemperature}</sup>
                                                        </p>
                                                    </div>

                                                    <div className="flex-col items-center mr-5">
                                                            <p>
                                                                {forecast3.day}
                                                            </p>
                                                            <img src="" />
                                                            <p>
                                                                {forecast3.lowTemperature} <sup>{forecast3.lowTemperature}</sup>
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

export default Page