import Image from 'next/image'
import NewsImage from '../../../public/image/Exciting news-amico.png'
import NewsArticles from './newsArticles'
const page = () => {
  return (
    <div className="mx-auto p-6 ">
        <div className="flex justify-center ">
            <div className="title">
            <div className=" mt-20 flex flex-col items-center text-center space-y-5">
        <h5 className="font-bold text-2xl md:text-3xl md:w-[41rem]">Stay updated with cutting-edge innovations, market trends, and expert insights in the farming world.</h5>
        </div>
        <div className=" flex items-center justify-center text-center mt-4">
      <p>Your source for timely and top-quality agricultural news starts here.</p>
        </div>
        <div className="mt-10 flex items-center justify-center md:mt-[40px]">
        <a href="#" className="inline-flex text-[#fff] bg-[#058f1a] p-1 rounded-sm items-center text-base font-medium ">
                    Explore Our News
        <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </a>
        </div>
            </div>
            <Image src={NewsImage} alt="Farming" width={300} className='mt-[60px] md:block hidden ' />
        </div>
      <div className="">
        <NewsArticles/>
      </div>
        </div>
  )
}

export default page