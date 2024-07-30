import Prices from '../../data/prices.json'

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
    <div className="flex space-x-20">
    {prices.map((element) => (
<div className="flex space-x-4">
<h1 key={element.title}><span className="font-bold">PRODUCT: </span> <span className="ml-2 font-bold">{element.title}</span></h1>
<h1 key={element.title} className="font-bold">PRICE:{element.price}</h1>
</div>
))}
    </div>
       
   </div>
   
  </div>
</div>
        
      </div>
    );
  }