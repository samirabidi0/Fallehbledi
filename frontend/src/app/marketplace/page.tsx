import ProductCard from './productCard'
import ProductsHeroSection from './productsHeroSections'
export default async function Page() {
  return (
    <div className="">
    <div className="">
      <ProductsHeroSection/>
    </div>
    <div className="">
      <ProductCard/>
    </div>
    </div>
    
  );
}