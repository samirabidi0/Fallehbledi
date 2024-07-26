// components/ContactForm.tsx
import React from 'react';
import Image from 'next/image';
import logo from '../../../public/image/203.jpg'
const ContactForm: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 ml-10">Contact Us!</h1>
        <p className="text-gray-600 mb-6 ml-10">Have a question or you need information? fill the<br/> form with your informations and we will contact <br/>you as soon as possible.</p>
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
          <div className="bg-white shadow rounded-lg p-6 w-full md:w-1/2">
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
            <Image src={logo} alt="Farming" className="w-full h-auto" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactForm;
