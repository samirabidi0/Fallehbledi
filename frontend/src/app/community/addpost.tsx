import Link from 'next/link';
import { revalidatePath } from 'next/cache'
const addpost = () => {
  const createpost = async (formData: FormData) => {
    'use server'
    const post = {
      title: formData.get("title"),
      content: formData.get("content"),
      image: formData.get("image"),
      farmerId: 3
    };
    const response = await fetch("http://127.0.0.1:5000/api/post/addpost", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    });
    if (response.ok) {
      revalidatePath('/community')
    }
  };
  return (
    <div className={"p-8 mt-8 max-w-lg mx-auto  bg-white rounded-lg shadow-lg"}>
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
            <label className="leading-7 text-lg text-gray-900">content</label>
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
            <label className="leading-7 text-lg text-gray-900">image</label>
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
            <button
              type="submit"
              className="flex justify-center items-center text-white bg-gray-900 border-0 py-3 px-6 focus:outline-none  rounded text-xl font-bold shadow-lg mx-auto"
            >
              Send
            </button>
            <Link
              href="/community"
              className="px-4 py-2 bg-green-600 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Close
            </Link>
          </div>
        </div>
      </form>

    </div>
  )
}

export default addpost
