import Image from 'next/image'
import Slide from '../../../public/image/slide.png'

const HeroSection = () => {
  return (
      <section className="slider-section bg-white   mt-5" >
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-4xl dark:text-white">The first Tunisian app in the field of agricultural guidance and information</h1>
            <p className="max-w-2xl mb-6 font-light text-[#fff] lg:mb-8 md:text-[14px] lg:text-[16px] ">Take your farming to the next level. We will help you manage your farm more efficiently and increase your productivity.</p>
            <a href="#" className="inline-flex   items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-[#fff] rounded-lg  ">
                Get started
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
        </div>                
    </div>
</section>
  )
}

export default HeroSection