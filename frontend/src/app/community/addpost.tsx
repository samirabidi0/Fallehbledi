import Link from 'next/link';
import axios from 'axios'
import { revalidatePath } from 'next/cache'
const addpost = () => {
    const createpost = async (formData: FormData) => {
      'use server'
          const post = {
            title: formData.get("title"),
            content: formData.get("content"),
            image: formData.get("image"),
            farmerId:2
          };
          const response = await fetch("http://127.0.0.1:5000/api/post/addpost",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(post)
        });
        if(response.ok){
          revalidatePath('/community')
      }
     
        
      };
  return (
    <div className="p-8 mt-8 max-w-lg mx-auto bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl text-gray-800 font-bold mb-4"> post</h1>
      <form action={createpost}>
        <div className="p-2 w-full">
          <div className="relative">
            <label className="leading-7 text-lg text-gray-900">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full bg-white rounded border border-gray-400  focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        
        <div className="p-2 w-full">
          <div className="relative">
            <label  className="leading-7 text-lg text-gray-900">content</label>
            <input
              type="text"
              id="content"
              name="content"
              className="w-full bg-white rounded border border-gray-400  focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label  className="leading-7 text-lg text-gray-900">image</label>
            <input
              type="text"
              id="image"
              name="image"
              
              className="w-full bg-white rounded border border-gray-400  focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div>
               {/* Navigates back to the base URL - closing the modal */}
               <Link
              href="/"
              className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              
           
            <button
              type="submit"
              className="flex justify-center items-center text-white bg-gray-900 border-0 py-3 px-6 focus:outline-none  rounded text-xl font-bold shadow-lg mx-auto"
            >
              Send
            </button>
            </Link>
            
          </div>
        </div>
      </form>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              
              <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                <h2 className="leading-relaxed">New Post</h2>
                <p className="text-sm text-gray-500 font-normal leading-relaxed">
                  create a new post then press create button
                </p>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="flex flex-col">
                  <label className="leading-loose">Post Title</label>
                  <input
                    type="text"
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Event title"
                  />
                </div>
                <div className="flex flex-col">
                    <label className="leading-loose">Post Content</label>
                    <textarea
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Write your post content here"
                     
                    />
                  
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">image</label>
                  <input
                    type="file"
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Event title"
                  />
                </div>
              </div>
              <div className="pt-4 flex items-center space-x-4">
                <button className="bg-green-600 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default addpost
