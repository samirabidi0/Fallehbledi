import Plans from '../components/plans/AllPlans'
import HeroSection from '@/components/herosection/HeroSection'
import IconTitle from '../../public/image/img-shap-left.png'
import Image from 'next/image'
import NewsCard from '@/components/freaturescard/featuresCard'

export default function Home() {

    
  return (
    <>
    <div className="hero  flex items-center justify-center p-8">
    <HeroSection/>
    </div>
    <div className="news-section flex items-center justify-start p-8">
       <NewsCard/>
    </div>
    <Plans/>
    </>
  );
}
