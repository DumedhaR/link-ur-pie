
export default function BuiltForCreators (){
      
    return (
    <div className="relative bg-[#f5f5f5] py-24 px-6 sm:px-12 md:px-20 overflow-hidden text-center flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-[3rem] sm:text-[4rem] md:text-6xl font-semibold leading-none text-gray-800">
        <span className="block">Built for Creators.</span>
        <span className="block">Powered by Passion.</span>
      </h2>

      {/* Subtext */}
      <p className="mt-6 max-w-2xl text-lg text-gray-700">
        Linkur Pie brings creators and fans together—through music, art, videos,
        and digital stories. Share, grow, and connect with a community that
        values your creativity.
      </p>

      {/* Images */}
      <div className="relative mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <div className="group relative">
          <img
            src="/creator1.jpg"
            alt="Singer in studio"
            className="rounded-xl shadow-md transition-transform group-hover:scale-105"
          />
        </div>
        <div className="group relative">
          <img
            src="/creator2.jpg"
            alt="Artist holding drawing"
            className="rounded-xl shadow-md transition-transform group-hover:scale-105"
          />
        </div>
        <div className="group relative">
          <img
            src="/creator3.jpg"
            alt="Gamer streaming"
            className="rounded-xl shadow-md transition-transform group-hover:scale-105"
          />
        </div>
        <div className="group relative">
          <img
            src="/creator7.jpg"
            alt="Fan watching content"
            className="rounded-xl shadow-md transition-transform group-hover:scale-105"
          />
        </div>
      </div>
    </div>
    );
}