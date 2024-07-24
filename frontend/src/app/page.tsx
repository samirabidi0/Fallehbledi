import Plans from '../components/plans/AllPlans'
import HeroSection from '../components/herosection/HeroSection'
export default function Home() {
  return (
    <>
    <div className="hero  flex items-center justify-center">
    <HeroSection/>
    </div>
    <div className="sec-container flex items-center justify-center mt-10 text-[#058f1a]">
      <h5 className='md:text-3xl text-3xl text-center  font-extrabold'>Make Agriculture Great Again </h5>
    </div>
    <Plans/>
    </>
  );
}
