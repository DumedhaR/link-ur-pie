import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import '../../styles/slider.css';

type PropType = {
  slides: string[]
  options?: EmblaOptionsType
}

const ImgSlider: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <div className="embl w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="embla__con">
          {slides.map((src,i) => (
            <div className="embla__slid" key={i}>
              <img src={src} className='w-full h-full object-cover'/>
            </div>
          ))}
        </div>
      </div>
      <div className="embla__controls z-10 bottom-4 left-4">
        <div className="embla__buttons">
          <div className='rounded-full border-2 border-[#2c2c2c]/70 bg-white/10 hover:bg-white/25 backdrop-blur-sm cursor-pointer'>
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          </div>
          <div className='rounded-full border-2 border-[#2c2c2c]/70 bg-white/10 hover:bg-white/25 backdrop-blur-sm cursor-pointe'>
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
         </div>
        </div>
      </div>
    </div>
  )
}

export default ImgSlider
