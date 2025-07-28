const images = [
  { src: "/creator1.jpg", label: "Musician" },
  { src: "/creator2.jpg", label: "Digital Artist" },
  { src: "/creator3.jpg", label: "Animator" },
  { src: "/creator7.jpg", label: "Writer" },
];

export default function CreatorsIntro() {
  return (
    <div className="relative py-25 px-6 sm:px-12 md:px-20 overflow-hidden text-center flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-[3rem] sm:text-[4rem] md:text-6xl font-semibold leading-none">
        <span className="block">Built for Rising Creators.</span>
        <span className="block">Driven by Passion, Purpose.</span>
      </h2>

      {/* Subtext */}
      <p className="mt-6 max-w-2xl text-lg">
        We bring creators and fans together—through music, art, videos,
        and digital stories. Share, grow, and connect with a community that
        values your creativity.
      </p>

      {/* Creator Images with Labels */}
      <div className="relative mt-12 mb-6 grid grid-cols-2 md:grid-cols-4 gap-6 mx-auto">
        {images.map(({ src, label }, i) => (
          <div
            key={i}
            className="relative w-full aspect-[3/4] overflow-hidden rounded-xl shadow-md"
          >
            
            <img
              src={src}
              alt={`creator-img-${i}`}
              className="w-full h-full object-cover rounded-lg"
            />
            {/* Label Overlay */}
            <div className="absolute bottom-0 pb-3 w-full bg-black text-white text-center text-sm font-medium py-2">
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
