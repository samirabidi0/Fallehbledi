import React from "react";

async function getData() {
  const res = await fetch('http://127.0.0.1:5000/weather');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Page() {
  const data = await getData();
  const current = data[0];
  const forecast = data[1];

  return (
    <div className="p-10">
      <div className="flex flex-col lg:flex-row justify-between bg-white rounded-lg shadow-md p-8">
        <div className="lg:w-3/5">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-500">{current.location}</span>
            <span className="text-gray-500">{current.date}</span>
          </div>
          <div className="text-8xl font-bold text-gray-800">{current.temperature}°</div>
          <div className="text-2xl text-gray-500 mb-4">{current.weather}</div>
          <div className="flex space-x-4 text-gray-500">
            <div className="flex items-center space-x-1">
              <span className="text-lg">{current.windspeed} mph</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-lg">{current.humidity} %</span>
            </div>
          </div>
        </div>
        <div className="lg:w-2/5 flex flex-col items-center bg-gray-100 rounded-lg p-4">
          <div className="text-gray-800 text-xl mb-2">Good Morning</div>
          <div className="text-gray-500 text-2xl mb-4">{current.time}</div>
          <div className="text-6xl text-gray-800">{current.temperature}°</div>
          <div className="flex space-x-2 items-center text-gray-500 mb-4">
            <div className="flex items-center space-x-1">
              <span className="text-lg">{current.windspeed} mph</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-lg">{current.humidity} %</span>
            </div>
          </div>
          <div className="text-gray-500 text-xl mb-2">{current.weather}</div>
          <div className="grid grid-cols-3 gap-2">
            
              <div className="flex flex-col items-center bg-white rounded-lg p-2 shadow">
                <span className="text-gray-500">{forecast.lowTemperature}</span>
                <span className="text-gray-800 text-2xl">{forecast.highTemperature}°</span>
                <span className="text-gray-500">{forecast.date}</span>
                <span className="text-gray-500">{forecast.weather}</span>
                <span className="text-gray-500">{forecast.location}</span>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
