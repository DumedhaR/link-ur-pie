import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const images = [
  { src: "/creator1.jpg", alt: "Singer in studio" },
  { src: "/creator2.jpg", alt: "Artist holding drawing" },
  { src: "/creator3.jpg", alt: "Gamer streaming" },
  { src: "/creator7.jpg", alt: "Fan watching content" },
];

export default function BuiltForCreators() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 2000); 
    return () => clearInterval(interval);
  }, []);

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
        {images.map((img, index) => (
          <motion.div
            key={img.src}
            animate={{
              scale: activeIndex === index ? 1.04 : 1,
            }}
            transition={{ duration: 0.3}}
            className="rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover pointer-events-none"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
