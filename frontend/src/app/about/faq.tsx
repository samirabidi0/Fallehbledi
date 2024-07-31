import { FaQuestionCircle } from 'react-icons/fa';
import Image from "next/image"
import Icon1 from '../../../public/image/faq-1-1.jpg';
const faq = () => {
  return (
    
        <div>
          <section className="flex items-center justify-center min-h-screen">
            <div className="sm:flex items-start max-w-screen-xl mx-auto bg-white p-6 sm:p-10 rounded-lg">
              <div className="sm:w-1/2 p-5 flex flex-col justify-start">
                <div className="text">
                  <section className="bg-white text-[#2F432F] max-w-3xl mx-auto px-4 py-8">
                    <div className="flex items-center space-x-2 text-[#058f1a]">
                      <FaQuestionCircle />
                      <span className="text-2xl sm:text-xl font-bold mb-4">FAQ US</span>
                    </div>
                    <h1 className="text-2xl sm:text-4xl font-bold my-4">
                      General Questions
                    </h1>
                    <p className="text-base sm:text-lg text-[#6A7C6A] mb-6">
                      Welcome to our FAQ section! Here you'll find answers to the most common questions about our platform, services, and how we help farmers thrive. If you have a question that isn't covered here, feel free to reach out to our support team.
                    </p>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg shadow-md">
                        <div className="flex items-center text-base sm:text-lg font-bold text-[#78A066]">
                          <span className="inline-block p-2 bg-[#F2F7F2] rounded-full text-[#61B946] mr-3">01.</span>
                          Agriculture Food Why is it important?
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-md">
                        <div className="flex items-center text-base sm:text-lg font-bold text-[#78A066]">
                          <span className="inline-block p-2 bg-[#F2F7F2] rounded-full text-[#61B946] mr-3">02.</span>
                          How do I join the community forum?
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-md">
                        <div className="flex items-center text-base sm:text-lg font-bold text-[#78A066]">
                          <span className="inline-block p-2 bg-[#F2F7F2] rounded-full text-[#61B946] mr-3">03.</span>
                          How can I get expert advice?
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-md">
                        <div className="flex items-center text-base sm:text-lg font-bold text-[#78A066]">
                          <span className="inline-block p-2 bg-[#F2F7F2] rounded-full text-[#61B946] mr-3">04.</span>
                          How do I find the products I need?
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <div className="sm:w-1/2 p-10 flex items-start justify-center">
                <Image
                  src={Icon1}
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-lg"
                  alt="A cheerful person in a hat holding a crate of colorful organic vegetables with green nature in the background"
                />
              </div>
            </div>
          </section>
        </div>
  )
}

export default faq