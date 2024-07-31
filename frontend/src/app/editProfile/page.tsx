import React from 'react'


const EditProfile = () => {
  return (
    <div className="max-w-6xl mx-auto mt-10 bg-white rounded-lg shadow-lg   ">
      <div className="p-6 bg-green-700 rounded-t-lg ">
        <h2 className="text-2xl text-white mt-24 ">Edit your Profile</h2>
      </div>
      <div className="flex p-6 mt-8">
        <div className="w-1/4">
          <img src="https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg" alt="Profile" className="w-32 h-32 rounded-full mx-auto" />
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full mx-auto block">CHANGE PHOTO</button>
        </div>
        <div className="w-3/4 pl-6">
          <div className="flex border-b mb-4">
            <button className="py-2 px-4 text-green-700 border-b-2 border-green-500 focus:outline-none">Personal</button>
            <button className="py-2 px-4 text-gray-500 focus:outline-none">Dashboard</button>
           
          </div>
          <div>
            <div className="mb-4">
              <label className="block text-gray-700">firstName :</label>
              <input type="text" className="w-full mt-1 p-2 border rounded" placeholder='firstName' />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">LastName:</label>
              <input type="text" className="w-full mt-1 p-2 border rounded" placeholder='LastName'  />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Address:</label>
              <input type="text" className="w-full mt-1 p-2 border rounded" placeholder='Address'/>
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700">Mobile Phone :</label>
              <input type="text" className="w-full mt-1 p-2 border rounded"   placeholder='' />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">location :</label>
              <input type="text" className="w-full mt-1 p-2 border rounded"  />
            </div>
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProfile