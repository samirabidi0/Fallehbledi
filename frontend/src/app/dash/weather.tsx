import { error } from "console";

async function getData() {
    const res = await fetch('http://127.0.0.1:5000/weather');
    if (!res.ok) {
      console.log(error)
      throw new Error('Failed to fetch data');
    }
    return res.json();
  }
  
  export default async function Page() {
    const data = await getData(); 
    const current = data[0];  
    console.log(data)
    return (
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
     
      </div>
    );
  }