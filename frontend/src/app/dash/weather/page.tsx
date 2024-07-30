"use client"
import Image from 'next/image';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

async function getData() {
  const res = await fetch('http://127.0.0.1:5000/weather');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

async function Page() {
  const data = await getData();
  console.log(data);
  const current = data[0];
  const forecast = data.slice(1);

  // Prepare data for the chart
  const chartData = {
    labels: forecast.map((day: any) => day.date),
    datasets: [
      {
        label: 'High Temperature',
        data: forecast.map((day: any) => day.highTemperature),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
      {
        label: 'Low Temperature',
        data: forecast.map((day: any) => day.lowTemperature),
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <>
      <div className=''>
        <div>
          <div className='py-6 md:max-w-5xl mx-auto mb-4 w-full'>
            <div className='flex-1 p-3 text-white'>
              <div className='max-w-sm w-full lg:max-w-full shadow px-6 py-6 bg-white rounded-lg mb-6 mt-20 bg-[#070a3393]'>
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
                  <p>The skies will be mostly clear. The low will be 79°.</p>
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
                    {forecast.map((e: any, idx: any) => (
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
                {/* Chart */}
                <div className='mt-6'>
                  <h2>Temperature Trends</h2>
                  <Line data={chartData} />
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
