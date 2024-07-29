const sideBar = () => {
  return (
    <div className="fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 w-64 h-full pt-16 font-normal duration-75 lg:flex transition-width">
      <div className="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200 ">
        <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
        <div className="flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200 ">
        <ul className="pb-2 space-y-2">
        <li>
            <div  className="lg:hidden">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input type="text" name="email" id="mobile-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 outline-none" placeholder="Search"/>
              </div>
            </div>
            </li>
            <li className="">
            <a href="" className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-[#058f1a] hover:text-[#fff] ">
                <svg className="w-6 h-6 text-gray-900  transition duration-75 "  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                <span className="ml-3" sidebar-toggle-item>Dashboard</span>
            </a>
            </li>
            <li className="">
            <a href="" className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-[#058f1a] hover:text-[#fff] ">
            <svg className="w-6 h-6 text-gray-900  transition duration-75 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M20.33 2a9.72 9.72 0 0 0-6.12 2.17A5 5 0 0 0 6 7.59a7.08 7.08 0 0 0-4 6.23v.08a7 7 0 0 0 .56 2.74 2.15 2.15 0 0 0 .11.22A7.11 7.11 0 0 0 9.1 21h12.56a7.05 7.05 0 0 0 6-3.32A9.38 9.38 0 0 0 30 11.5 9.6 9.6 0 0 0 20.33 2zM11 5a3 3 0 0 1 1.8.6 9.58 9.58 0 0 0-1.13 1.69 7.43 7.43 0 0 0-2.48-.43 7.93 7.93 0 0 0-1 .07A3 3 0 0 1 11 5zm15.11 11.42a.71.71 0 0 0-.1.14A5.08 5.08 0 0 1 21.66 19H9.1a5.13 5.13 0 0 1-4.62-2.95l-.05-.11v-.1A4.74 4.74 0 0 1 4 14v-.14a5.15 5.15 0 0 1 5.19-5 5.27 5.27 0 0 1 2.52.64 1 1 0 0 0 .83.05 1 1 0 0 0 .59-.55 7.68 7.68 0 0 1 7.2-5A7.59 7.59 0 0 1 28 11.5a7.4 7.4 0 0 1-1.89 4.92z"/><path d="M23.55 6.17a1 1 0 0 0-1.1 1.66A4.59 4.59 0 0 1 24 12.76a1 1 0 0 0 .76 1.24H25a1 1 0 0 0 1-.76 6.51 6.51 0 0 0-2.45-7.07zM11 23a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1zM16 23a1 1 0 0 0-1 1v2.5a1 1 0 0 0 2 0V24a1 1 0 0 0-1-1zM21 23a1 1 0 0 0-1 1v3.75a1 1 0 0 0 2 0V24a1 1 0 0 0-1-1z"/></svg>                <span className="ml-3" sidebar-toggle-item>Weather</span>
            </a>
            </li>
            <li className="">
            <a href="" className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-[#058f1a] hover:text-[#fff] ">
            <svg className="w-6 h-6 text-gray-900  transition duration-75 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g data-name="news android app aplication phone"><path d="M30.56 8.47a8 8 0 0 0-7-7 64.29 64.29 0 0 0-15.06 0 8 8 0 0 0-7 7 64.29 64.29 0 0 0 0 15.06 8 8 0 0 0 7 7 64.29 64.29 0 0 0 15.06 0 8 8 0 0 0 7-7 64.29 64.29 0 0 0 0-15.06zm-2 14.83a6 6 0 0 1-5.28 5.28 63.65 63.65 0 0 1-14.6 0 6 6 0 0 1-5.26-5.28 63.65 63.65 0 0 1 0-14.6A6 6 0 0 1 8.7 3.42a63.65 63.65 0 0 1 14.6 0 6 6 0 0 1 5.28 5.28 63.65 63.65 0 0 1 0 14.6z"/><path d="M13 7H9a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm-4 8V9h4v6zM14 19h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2zM14 23H8a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2zM25 11h-7a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2zM25 7h-7a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2zM25 15h-7a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2zM25 19h-7a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2zM23 23h-5a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2z"/></g></svg>                <span className="ml-3" sidebar-toggle-item>Market Price</span>
            </a>
            </li>
            <li className="">
            <a href="" className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-[#058f1a] hover:text-[#fff] ">
            <svg className="w-6 h-6 text-gray-900  transition duration-75 " version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 32 32"  ><style></style><path d="M16 19a1 1 0 0 1-1-1V4a1 1 0 1 1 2 0v14a1 1 0 0 1-1 1zM16 29a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1z"/><path d="M16 25c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2zM6 13a1 1 0 0 1-1-1V4a1 1 0 1 1 2 0v8a1 1 0 0 1-1 1zM6 29a1 1 0 0 1-1-1V18a1 1 0 1 1 2 0v10a1 1 0 0 1-1 1z"/><path d="M6 19c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2zM26 10a1 1 0 0 1-1-1V4a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1zM26 29a1 1 0 0 1-1-1V15a1 1 0 1 1 2 0v13a1 1 0 0 1-1 1z"/><path d="M26 16c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"/></svg> <span className="ml-3" sidebar-toggle-item>Settings</span>           
            </a>
            </li>
        </ul>
        </div>
        </div>
      </div>
    </div>
  );
};

export default sideBar;
