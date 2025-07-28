import { useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import { motion, AnimatePresence } from 'motion/react';

const images = [
  '/slide1.jpg',
  '/slide2.jpg',
  '/slide3.jpg',
  '/slide4.jpg',
];

const headers = [
  {
    heading: 'Link your creativity to the world',
    sub: 'We empowers artists to share, sell, and grow with their fans directly.',
  },
  {
    heading: 'Support the creators you love',
    sub: 'Help creators make more of what you love by backing their passion.',
  },
  {
    heading: 'Unlock exclusive content',
    sub: 'Get behind-the-scenes access, perks, and digital downloads.',
  },
  {
    heading: 'Join the community',
    sub: 'Share your thoughts and be part of something meaningful.',
  },
];

export default function HeroFadeSlider() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Fade(), Autoplay({ delay: 5000, stopOnInteraction: false })]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      if (!emblaApi) return undefined;
      const onSelect = () => setCurrentIndex(emblaApi.selectedScrollSnap());
      emblaApi.on('select', onSelect);
      onSelect();

      return () => {
        emblaApi.off('select', onSelect);
      };
    }, [emblaApi]);


    return(
     <div className="relative w-full h-screen overflow-hidden">

      {/* Background image fade slider */}
      <div className="absolute inset-0 z-0" ref={emblaRef}>
        <div className="embla__container h-full">
          {images.map((src, i) => (
            <div key={i} className="embla__slide">
              <img
                src={src}
                alt={`slide${i}`}
                className="embla__slide__img w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 z-5" />

      {/* Heading block */}
      <div className="absolute inset-0 z-10 flex items-center px-10 md:px-20">
         <div className="relative max-w-3xl text-white overflow-visible text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <h1 className="text-4xl md:text-7xl font-semibold mb-3">
                {headers[currentIndex].heading}
              </h1>
              <p className="text-lg md:text-xl">{headers[currentIndex].sub}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
    );
}