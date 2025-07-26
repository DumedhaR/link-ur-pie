
const images = ["/creator1.jpg", "/creator2.jpg", "/creator3.jpg", "/creator7.jpg"]
      
export default function CreatorsIntro(){

    return (
    <div className="relative bg-[#f5f5f5] py-26 px-6 sm:px-12 md:px-20 overflow-hidden text-center flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-[3rem] sm:text-[4rem] md:text-6xl font-semibold leading-none text-gray-800">
        <span className="block">Built for Rising Creators.</span>
        <span className="block">Driven by Passion, Purpose.</span>
      </h2>

      {/* Subtext */}
      <p className="mt-6 max-w-2xl text-lg text-gray-700">
        We brings creators and fans together—through music, art, videos,
        and digital stories. Share, grow, and connect with a community that
        values your creativity.
      </p>

      {/* Images */}
      <div className="relative mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {images.map( (src, i) => (
          <div key ={i} className="group relative">
            <img
              src={src}
              alt={`creator-img-${i}`}
              className="rounded-xl shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
    );
}