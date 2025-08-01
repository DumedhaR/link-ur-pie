import { useCallback, useEffect, useRef } from 'react'
import {
  EmblaCarouselType,
  EmblaEventType,
} from 'embla-carousel'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './sliderArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay';
import '../../styles/slider.css';

type ImgSliderProp = {
  slides: string[]
}

const TWEEN_FACTOR_BASE = 0.2

const ImgSlider = ({ slides }:  ImgSliderProp ) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, skipSnaps: false, align: "center"}, [Autoplay({ delay: 5000, stopOnInteraction: false })])
  const tweenFactor = useRef(0)
  const tweenNodes = useRef<HTMLElement[]>([])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.embla__parallax__layer') as HTMLElement
    })
  }, [])

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])
  const tweenParallax = useCallback(
  (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
    const engine = emblaApi.internalEngine()
    const scrollProgress = emblaApi.scrollProgress()
    const slidesInView = emblaApi.slidesInView()
    const isScrollEvent = eventName === 'scroll'

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress
      const slidesInSnap = engine.slideRegistry[snapIndex]

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target()

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target)

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress)
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress)
              }
            }
          })
        }

        const translate = diffToTarget * (-1 * tweenFactor.current) * 100
        const tweenNode = tweenNodes.current[slideIndex]

        tweenNode.style.transform = `translateX(${translate}%)`

       const opacity = 1 - Math.min(Math.abs(diffToTarget * 3), 0.2)
        tweenNode.style.opacity = opacity.toString()
      })
    })
  },
  []
)

  useEffect(() => {
    if (!emblaApi) return

    setTweenNodes(emblaApi)
    setTweenFactor(emblaApi)
    tweenParallax(emblaApi)

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenParallax)
      .on('scroll', tweenParallax)
      .on('slideFocus', tweenParallax)
  }, [emblaApi, tweenParallax])

  return (
    <div className="embl w-full">
      <div className="overflow-hidden px-2" ref={emblaRef}>
        <div className="embla__con">
          {slides.map((src,i) => (
            <div className="embla__slid" key={i}>
              <div className="embla__parallax rounded-md">
                <div className="embla__parallax__layer">
                  <img src={src} className='w-full h-full object-cover embla__parallax__img'/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 inset-x-0 z-10 px-4 flex justify-between items-center -translate-y-1/2">
        <div className="pointer-events-auto">
          <PrevButton
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
            className="w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center bg-white/30 md:bg-transparent md:hover:bg-white/40 text-white"
          />
        </div>
        <div className="pointer-events-auto">
          <NextButton
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            className="w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center bg-white/30 md:bg-transparent md:hover:bg-white/40 text-white"
          />
        </div>
     </div>
    </div>
  )
}

export default ImgSlider
