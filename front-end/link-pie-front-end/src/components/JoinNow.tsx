import React from 'react';

const JoinNow: React.FC = () => {
  return (
      <div className="max-w-md text-center flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Create Your Creator Account Now
        </h1>
        <p className="text-gray-600 mb-6">
          Join a platform built for artists, musicians, and creators. Start sharing, selling, and growing — all in one place.
        </p>
        <div className="flex justify-center mb-6">
          <img
            src="/S1.png"
            alt="Create Account Illustration"
            className="w-48 h-48"
          />
        </div>
        <button className="w-3/4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-3xl transition-all duration-200 shadow-md">
          Create My Account
        </button>
      </div>
  );
};

export default JoinNow;
