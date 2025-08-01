const images = [
  { src: "/creator1.jpg", label: "Musicians" },
  { src: "/creator2.jpg", label: "Artists" },
  { src: "/creator3.jpg", label: "Animators" },
  { src: "/creator7.jpg", label: "Writers" },
];

export default function CreatorsIntro() {
  return (
    <div className="relative pt-28 px-6 sm:px-12 lg:px-20 overflow-hidden text-center flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-5xl md:text-6xl font-semibold leading-none">
        <span className="block">Built for rising creators</span>
        <span className="block">Driven by passion, purpose.</span>
      </h2>
      {/* Subtext */}
      <p className="mt-6 max-w-2xl text-lg text-gray-400">
        We bring creators and fans together—through music, art, videos,
        and digital stories. Share, grow, and connect with a community that
        values your creativity.
      </p>
      {/* Creator Images with Labels */}
      <div className="relative mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 mx-auto max-w-6xl">
        {images.map(({ src, label }, i) => (
          <div
            key={i}
            className="relative w-full md:aspect-[2/3] aspect-[3/4] overflow-hidden rounded-lg shadow-md"
          >
            <img
              src={src}
              alt={label}
              className="w-full h-full object-cover rounded-xl"
            />
            {/* Label Overlay */}
            {/* <div className="absolute bottom-0 pb-3 w-full bg-black/90 text-center text-sm font-semibold py-2">
              {label}
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}
