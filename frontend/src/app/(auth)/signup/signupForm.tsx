import axios from 'axios'
import { redirect } from 'next/navigation';
const signupForm = () => {
   
    const createUser = async (formData: FormData) => {
        'use server'
        var responseMsg = ''
        try {
          const user = {
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName"),
            email: formData.get("email"),
            password: formData.get("password"),
            adress: formData.get("adress"),
            phone: '54555454',
            location: "tunis",
          };
          const response = await axios.post("http://127.0.0.1:5000/api/farmer/signup",user);
          if(response.data.message === 'User registered successfully'){
              responseMsg = response.data.message;
          
}
          
          
        } 
        catch (error) {
        }
        if (responseMsg==='User registered successfully'){
            
            redirect('/login')
        }
        
      };
    
  return (
    <form action={createUser} className="max-w-sm mx-auto mt-28 flex flex-col ">
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="mb-5">
          <label className="block mb-2  text-sm font-medium text-gray-900 ">
          First Name
          </label>
          <input
            type="text"
            id="firstname"
            name='firstName'
            className="bg-gray-50 border outline-[#058f1a] border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  "
            placeholder="First Name"
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2  text-sm font-medium text-gray-900 ">
          Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name='lastName'
            className="bg-gray-50 border outline-[#058f1a] border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  "
            placeholder="Last Name"
          />
        </div>
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
          Email
          </label>
          <input
            type="email"
            id="email"
            name='email'
            className="bg-gray-50 border outline-[#058f1a] border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  "
            placeholder="name@exemple.com"
          />
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
           Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            name="password"
            className="bg-gray-50 border outline-[#058f1a] border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Confirm Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Confirm Password"
            className="bg-gray-50 border outline-[#058f1a] border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
          />
        </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
          Location
          </label>
          <input
            type="text"
            id="text"
            name='location'
            className="bg-gray-50 border outline-[#058f1a] border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  "
            placeholder="location"
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Adress
           </label>
          <input
            type="text"
            id="text"
            name='adress'
            className="bg-gray-50 border outline-[#058f1a] border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  "
            placeholder="Adress"
          />
        </div>
        </div>
        <button
          type="submit"
          className="text-white  bg-[#058f1a]  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
        >
          Create Account
        </button>
      </form>
  )
}

export default signupForm