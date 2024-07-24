import FreePlan from './FreePlan'
import StandartPlan from './StandardPlan'
import PremiumPlan from './PremiumPlan'

const AllPlans = () => {
  return (
    <div className='flex items-center justify-center  space-x-7 p-10'>
        <section className="bg-white">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-3xl text-[#058f1a] tracking-tight font-extrabold">Choose your plan</h2>
          <p className="mb-5 font-light  text-gray-500 sm:text-[14px] dark:text-[#000]">Choose a plan today and start using our app to take your farming to the next level.  With our app, you’ll gain access to powerful tools and insights that will help you manage your farm more efficiently and increase your productivity.</p>
      </div>
      <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {/*<!-- Pricing Card -->*/}
          <FreePlan/>
          <StandartPlan/>
          <PremiumPlan/> 
       {/* Add more plans as needed */}
      </div>
  </div>
</section>
      
    </div>
  )
}

export default AllPlans