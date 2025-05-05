import React from "react";

interface HeroProps {
  CoverImg: string;
}

const Hero: React.FC<HeroProps> = ({ CoverImg }) => {
  return (
    <div className="h-full relative flex items-center text-left px-40 bg-indigo-600 text-white gap-x-10">
      {/* Left Content Section */}
      <div className="w-full md:w-1/2">
        <div className="z-10 space-y-3">
          <p className="text-4xl font-semibold leading-tight">Link.Pi</p>
          <p className="text-5xl font-semibold leading-tight">Link your creativity <br/>to the world</p>
        </div>

        <div className="mt-5">
          <div className="w-full bg-transparent space-y-4">
            <h2 className="text-xl">
              Creators. Fans.<br/>
              No Middlemen 🤝
            </h2>
            <p className="text-md">
              We bring creators and fans together, no <br/>
              barriers in between.
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
      <div className="relative w-full md:w-1/2 h-full md:h-3/4 flex justify-center items-center bg-violet-500 rounded-[50%]">
        <div className="relative w-full md:w-19/20 h-full flex justify-center items-center bg-blue-500 rounded-[50%]">
        <div className="w-28/30 h-full rounded-[50%] overflow-hidden shadow-lg">
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

export default Hero;
