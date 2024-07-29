
import Image from 'next/image'
import Profile from '../../../public/image/1_8.jpg'
const newsArticles = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
    <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5">
        <div className="relative w-full flex items-end justify-start text-left bg-cover bg-center">
            <Image src={Profile} className='h-[350px]' alt=''></Image>
            <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900">
            </div>
            <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
                <a href="#"
                    className="text-xs bg-[#058f1a] text-white px-5 py-2 uppercase hover:bg-white hover:text-[#058f1a] transition ease-in-out duration-500">Politics</a>
                <div className="text-white font-regular flex flex-col justify-start">
                    <span className="text-3xl leading-0 font-semibold">25</span>
                    <span className="-mt-3">May</span>
                </div>
            </div>
            <main className="p-5 z-10 absolute">
                <a href="#"
                    className="text-md tracking-tight font-medium leading-7 font-regular text-[#fff]">Dr.
                    Abdullah Abdullah's Presidential Election Campaign
                </a>
            </main>

        </div>

    </div>
</div>
  )
}

export default newsArticles