import React from "react";

interface HeroSectionProps {
  CoverImg: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ CoverImg }) => {
  return (
    <div className="relative min-h-screen flex items-center text-left px-40 bg-indigo-600 text-white space-x-5">
      {/* Left Content Section */}
      <div className="w-full md:w-1/2">
        <div className="z-10 space-y-4">
          <p className="text-4xl font-semibold">Link.Pi</p>
          <p className="text-7xl font-semibold">Link your creativity to the world</p>
        </div>

        <div className="mt-8">
          <div className="w-full md:w-1/2 bg-transparent space-y-4">
            <h2 className="text-3xl">
              Creators. Fans.<br />
              No Middlemen.<br/>
              Just You and Them🤝
            </h2>
            <p className="text-md">
              We bring creators and fans together, no barriers in between.
            </p>
            <div className="space-x-2 mt-5">
              <button className="px-6 py-3 text-md font-semibold shadow-lg bg-blue-500 rounded-sm hover:bg-blue-600">
                For Artist
              </button>
              <button className="px-6 py-3 text-md font-semibold rounded-sm shadow-lg bg-violet-500 hover:bg-violet-600">
                Explore & Support
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="relative w-full md:w-1/2 h-full flex justify-center items-center bg-violet-500 rounded-[50%]">
        {/* Shaped Frame */}
        <div className="relative w-full md:w-148 h-full flex justify-center items-center bg-blue-500 rounded-[50%]">
        <div className="w-136 h-128 rounded-[50%] overflow-hidden shadow-lg">
          <img
            src={CoverImg}
            alt="Cover"
            className="object-cover w-full h-full"
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
