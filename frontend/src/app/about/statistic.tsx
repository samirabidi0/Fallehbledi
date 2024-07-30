
const statistic = () => {
  return (
    <div>
     <section className="bg-[#058f1a]  py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Trusted by Farmers Everywhere</h2>
              <p className="text-lg leading-8 text-gray-300">We are dedicated to helping farmers grow their operations and improve their yield, regardless of the size of their farm.</p>
            </div>
            <dl className="mt-8 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col bg-white/5 p-4">
                <dt className="text-sm font-semibold leading-6 text-gray-300">Farms Supported</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">+1k</dd>
              </div>
              <div className="flex flex-col bg-white/5 p-4">
                <dt className="text-sm font-semibold leading-6 text-gray-300">Expert Team</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">20</dd>
              </div>
              <div className="flex flex-col bg-white/5 p-4">
                <dt className="text-sm font-semibold leading-6 text-gray-300">Rare Product</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">10</dd>
              </div>
              <div className="flex flex-col bg-white/5 p-4">
                <dt className="text-sm font-semibold leading-6 text-gray-300">Answers</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">1.5k</dd>
              </div>
            </dl>
          </div>
        </div>
      </section> 
    </div>
  )
}

export default statistic
