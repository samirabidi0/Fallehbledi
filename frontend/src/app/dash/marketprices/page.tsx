import Prices from '../../../data/prices.json'

const page = () => {
    const {prices} = Prices

  return (
    <div className=" ml-[15rem]">
          <h1  className="flex items justify-center p-5 text-3xl font-bold">Lastest Market Prices For 29/07/2024</h1>

<div className="relative overflow-x-auto ml-[15rem]">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-900 uppercase bg-gray-100 ">
            <tr>
                <th scope="col" className="px-6 py-3 rounded-s-lg">
                    Product name
                </th>
            
                <th scope="col" className="px-6 py-3 rounded-e-lg">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            
            {prices.map((elem)=>{
            return (
              <tr className="bg-white">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    {elem.title}
                </th>
                
                <td className="px-6 py-4 font-medium text-gray-900">
                    TND {elem.price}
                </td>
            </tr>
            )
          })}
            
        </tbody>
        <tfoot>
            <tr className="font-semibold text-gray-900 dark:text-white">
                <th scope="row" className="px-6 py-3 text-base">Total</th>
                <td className="px-6 py-3">3</td>
                <td className="px-6 py-3">21,000</td>
            </tr>
        </tfoot>
    </table>
</div>

      </div>
        
  )
}

export default page