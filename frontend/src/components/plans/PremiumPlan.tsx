

const PremiumPlan = () => {
  return (
    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-[#058f1a] xl:p-8 dark:bg-[#fff] dark:text-white">
              <h3 className="mb-4 text-2xl text-[#000] font-semibold">Premium</h3>
              <p className="font-light text-gray-500 sm:text-[15px] dark:text-gray-400">Best option for personal use & easy access to essential tools.</p>
              <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl text-[#058f1a] font-extrabold">TND50</span>
                  <span className="text-gray-500 dark:text-gray-400">/month</span>
              </div>
              {/*<!-- List -->*/}
              <ul role="list" className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-[#058f1a] dark:text-[#058f1a]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                      <span className="text-[#000]" >Individual configuration</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-[#058f1a] dark:text-[#058f1a]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                      <span className="text-[#000]">No setup, or hidden fees</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-[#058f1a] dark:text-[#058f1a]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                      <span className="text-[#000]">Team size: <span className="font-semibold">1 developer</span></span>
                  </li>
                  <li className="flex items-center space-x-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-[#058f1a] dark:text-[#058f1a]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                      <span className="text-[#000]">Premium support: <span className="font-semibold">6 months</span></span>
                  </li>
                  
              </ul>
              <a href="#" className="text-white bg-[#058f1a]  font-medium rounded-lg text-sm px-5 py-2.5 text-center">Get started</a>
          </div>
  )
}

export default PremiumPlan