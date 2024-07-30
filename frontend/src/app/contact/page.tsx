// components/ContactForm.tsx
import Image from 'next/image';
import logo from '../../../public/image/Contact us-rafiki.png'
const ContactForm= () => {
  return (
    <div className=" min-h-screen">
      <Image src={logo} alt="Farming" width={500} className='ml-[45rem] mt-52 absolute ' />
    <main className="container mx-auto px-6 py-12   "> 
        <div className="flex flex-col md:flex-col space-y-6 md:space-y-0 md:space-x-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 ml-10 mt-20">Contact Us!</h1>
        <p className="text-gray-600 mb-6 ">Have a question or you need information? fill the<br/> form with your informations and we will contact <br/>you as soon as possible.</p>
          <div className="bg-white  rounded-lg p-6 w-full md:w-1/2">
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">First Name</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Last Name</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">What can we help you with?</label>
                <textarea className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" rows={4}></textarea>
              </div>
              <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700">Submit</button>
            </form>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center">
          </div>
        </div>
        <div className="">

        </div>
      </main>
    </div>
  );
};

export default ContactForm;
