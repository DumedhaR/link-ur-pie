/* eslint-disable react/react-in-jsx-scope */
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';


const images = [
  '/slide1.jpg',
  '/slide2.jpg',
  '/slide3.jpg',
  '/slide4.jpg',
];

export default function FadeSlider() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000, stopOnInteraction: false })]);

    return(
    <div className="embla w-full h-full" ref={emblaRef}>
      <div className="embla__container h-full">
        {images.map((src, index) => (
            <div key={index} className="embla__slide">
                <img 
                src={src} 
                alt= {`slide${index}`} 
                className="w-full h-full object-cover"
                />
            </div>
            ) )}
      </div>
    </div>
    );
}