import React from "react";

const ShareExperience = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-5xl p-4">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold">Share your experience.</h1>
          <h2 className="text-xl font-medium mt-2">Express your opinion and thoughts with our community members.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white p-4 rounded-lg shadow flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Conversations</h2>
              <h2 className="text-lg font-semibold">Categories</h2>
            </div>

            <div className="space-y-4">
              {[1, 2, 3].map((_, id) => (
                <div key={id} className="bg-white p-4 rounded-lg shadow">
                  <div className="flex items-start space-x-4">
                  <img
                      src={`https://via.placeholder.com/48?text=${id + 1}`}
                      alt="User Avatar"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-lg font-semibold">username</p>
                      <p className="text-sm font-medium text-gray-500">Forum post Title</p>
                      <p className="text-gray-700">Post Content</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <p className="text-lg font-semibold mb-2">Want to be part of this community?</p>
              <button className="bg-gray-600 text-white py-2 px-4 rounded">Express your thoughts</button>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-4">Top creators</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <p>Week</p>
                  <p>All time</p>
                </div>
                <div className="space-y-2">
                  {[1, 2, 3, 4].map((rank, id) => (
                    <div key={id} className="flex justify-between items-center">
                      <p>{rank}</p>
                      <p className="font-semibold">username</p>
                      <p>Points</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareExperience;
