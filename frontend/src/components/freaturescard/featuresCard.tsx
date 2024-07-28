import { FaChartLine } from "react-icons/fa6";
import { TiWeatherDownpour } from "react-icons/ti";
import { MdOutlineForum } from "react-icons/md";
import { PiUsersThree } from "react-icons/pi";

const FeaturesCard = () => {
  return (
    <section className="bg-white">
    <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24  lg:px-6">
        <div className="col-span-2 mb-8">
            <p className="text-lg font-medium text-[#058f1a]">Explore Our Features</p>
            <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl ">Unlock Your Farm's Potential with Our Feature-Rich Solutions: Over <span className='text-[#058f1a]'>5</span> Ways to <span className='text-[#058f1a]'>Boost</span> Your Growth"</h2>
            <p className="font-normal text-sm">Our dedicated team tackles numerous challenges to ensure your farm's success. By offering a variety of innovative features, we provide practical solutions to help you overcome obstacles and achieve sustainable growth.</p>
            <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
                <div>
                  <a href="#" className="inline-flex text-[#058f1a] items-center text-base font-medium ">
                    Explore Legality Guide
                    <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </a>
                </div>
                <div>
                  <a href="#" className="inline-flex items-center text-base font-medium text-[#058f1a]">
                      Get Started with Falleh Bledy
                      <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </a>
                  </div>
            </div>
        </div>
        <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
            <div>
                <FaChartLine className="w-10 h-10 mb-2 text-[#058f1a] md:w-12 md:h-12"/>
                <h3 className="mb-2 text-2xl text-gray-900  font-bold ">Updated Prices</h3>
                <p className="font-normal text-[14px] ">Stay ahead with our daily updated market prices, giving you the latest insights to make informed decisions and maximize your farm's profitability.</p>
            </div>
            <div>
                <TiWeatherDownpour className="w-11 h-10 mb-2 text-[#058f1a] md:w-12 md:h-12"/>
                <h3 className="mb-2 text-2xl text-gray-900  font-bold ">Updated Weather</h3>
                <p className="font-normal text-[14px] ">Adapt quickly with instant weather updates, ensuring you're always prepared for sudden changes and can protect your farm's productivity.</p>
            </div>
            <div>
                <MdOutlineForum className="w-11 h-10 mb-2 text-[#058f1a] md:w-12 md:h-12"/>
                <h3 className="mb-2 text-2xl text-gray-900  font-bold ">Dedicated Forum</h3>
                <p className="font-normal text-[14px] ">Engage with our community through a dedicated forum where you can share your problems, seek advice, and explore diverse opinions to enhance your farming experience.</p>
            </div>
            <div>
                <PiUsersThree className="w-11 h-10 mb-2 text-[#058f1a] md:w-12 md:h-12"/>
                <h3 className="mb-2 text-2xl text-gray-900  font-bold ">Expert Live Support</h3>
                <p className="font-normal text-[14px] ">Connect with experts who are ready to assist you, providing personalized advice and support to help you overcome challenges and optimize your farm operations.</p>
            </div>

        </div>
    </div>
  </section>
  )
}

export default FeaturesCard