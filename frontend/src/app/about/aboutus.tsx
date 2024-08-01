import {FaCheckCircle, FaSeedling } from 'react-icons/fa';
import Image from "next/image"
import Icon from '../../../public/image/about-1-3.jpg';
const aboutus = () => {
  return (
    <div className="">
      <section className="flex items-center justify-center min-h-screen bg-white">
        <div className="flex flex-col sm:flex-row-reverse items-start max-w-screen-xl mx-auto bg-white p-6 sm:p-10 rounded-lg">
          <div className="sm:w-1/2 p-5 sm:p-10 text-center sm:text-left flex flex-col justify-start">
            <div className="bg-white text-gray-900 p-4 sm:p-8 max-w-3xl mx-auto">
              <header className="flex items-center text-sm text-[#058f1a] font-bold mb-3">
                <FaSeedling className="mr-2" />
                <span className="text-2xl sm:text-xl font-bold mb-4">ABOUT US</span>
              </header>
              <h1 className="text-xl sm:text-3xl font-bold mb-4">
                Welcome to FALLEH BLEDI.
              </h1>
              <p className="text-base sm:text-lg text-gray-600 mb-6">
              Whether you're tending a backyard garden or managing expansive fields, our app is your essential companion for all things agriculture. It offers personalized crop tips tailored to your specific needs, including recommendations on planting schedules, pest control, and fertilization based on your crops, soil type, and local climate. 
              </p>
              <div className="flex items-start mb-4">
                <p className="text-base sm:text-lg">
                  <span className="text-[#058f1a] text-2xl sm:text-xl font-bold mb-4">What We Offer:</span>
                </p>
              </div>
              <div className="border-t border-gray-200 mt-4 mb-8"></div>
              <ul className="space-y-4 text-base sm:text-lg">
                <li className="flex items-start">
                  <FaCheckCircle className="text-[#058f1a] text-lg sm:text-xl mr-3" />
                  <span>Product Marketplace.</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-[#058f1a] text-lg sm:text-xl mr-3" />
                  <span>Community Forum.</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-[#058f1a] text-lg sm:text-xl mr-3" />
                  <span>Expert Advice.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="sm:w-1/2 p-5 sm:p-10 flex items-start justify-center">
            <Image
              src={Icon}
              width={500}
              height={300}
              className="w-full h-auto rounded-lg"
              alt="A cheerful person in a hat holding a crate of colorful organic vegetables with green nature in the background"
            />
          </div>
        </div>
      </section>
    </div>
  
  )
}

export default aboutus