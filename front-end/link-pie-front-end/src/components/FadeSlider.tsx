/* eslint-disable react/react-in-jsx-scope */
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';

const images = [
  '/slide1.jpg',
  '/slide2.jpg',
  '/slide3.jpg',
  '/slide4.jpg',
];

export default function FadeSlider() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Fade(), Autoplay({ delay: 5000, stopOnInteraction: false })]);

    return(
    <div className="embla w-full h-full" ref={emblaRef}>
      <div className="embla__container h-full">
        {images.map((src, index) => (
            <div key={index} className="embla__slide">
                <img 
                src={src} 
                alt= {`slide${index}`} 
                className="embla__slide__img w-full h-full"
                />
            </div>
            ) )}
      </div>
    </div>
    );
}