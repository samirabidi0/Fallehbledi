import Prices from '../../data/prices.json'
import Image from 'next/image'
interface PriceItem {
    title: string;
    price: number;
  }
  
  interface Prices {
    items: PriceItem[];
  }
  
  async function getData(): Promise<Prices> {
    const res = await fetch('http://127.0.0.1:5000/prices');
  
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  }
  
  export default async function Marketprices() {
    const {prices} = Prices
 
  
    return (
      <div>
        <div className="ticker-wrap">
<div className="ticker">
   <div className="ticker_item">
    <div className="flex space-x-20 ">
    {prices.map((element) => (
<div className="flex">
  <Image src={element.image} alt={element.title} width={50} height={50} />
<div className="flex space-x-4">
<h1 ><span className="font-bold"></span> <span className="ml-2 font-bold">{element.title}</span></h1>
<h1  className="font-bold">{element.price} TND</h1>
</div>
</div>
))}
    </div>
       
   </div>
   
  </div>
</div>
        
      </div>
    );
  }