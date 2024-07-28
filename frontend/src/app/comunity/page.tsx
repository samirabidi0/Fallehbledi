import React from "react";
import data from "../../../data/posts.json"; // Adjust the path if your data.json is in a different location

const ShareExperience = () => {
  const { posts, topCreators } = data;

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="pt-36 pb-8 text-center">
        <h1 className="text-2xl font-semibold">Share your experience.</h1>
        <h2 className="text-xl font-medium mt-2">
          Express your opinion and thoughts with our community members.
        </h2>
      </div>

      <div className="w-full max-w-5xl p-4 flex-grow flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <div className="md:col-span-2">
            <div className="bg-white p-4 rounded-lg shadow flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Conversations</h2>
              <h2 className="text-lg font-semibold">Categories</h2>
            </div>

            <div className="space-y-4">
              {posts.map((post) => (
                <div key={post.id} className="bg-white p-4 rounded-lg shadow">
                  <div className="flex items-start space-x-4">
                    <img
                      src={post.image}
                      alt="User Avatar"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-lg font-semibold">{post.userName}</p>
                      <p className="text-sm font-medium text-gray-500">
                        {post.title}
                      </p>
                      <p className="text-gray-700">{post.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <p className="text-lg font-semibold mb-2">
                Want to be part of this community?
              </p>
              <button className="bg-gray-600 text-white py-2 px-4 rounded">
                Express your thoughts
              </button>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-4">Top creators</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <p>Week</p>
                  <p>Points</p>
                </div>
                <div className="space-y-2">
                  {topCreators.map((creator) => (
                    <div key={creator.rank} className="flex justify-between items-center">
                      <p>{creator.rank}</p>
                      <p className="font-semibold">{creator.userName}</p>
                      <p>{creator.points}</p>
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
