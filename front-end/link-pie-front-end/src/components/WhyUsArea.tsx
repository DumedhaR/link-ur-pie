import { useEffect, useState, useRef } from "react";
import { getRandomFloat } from "@/utils/mathOp";
import FloatingImages from "./FloatingImages";
import { FloatingImage } from "@/types/types";

const localImages: string[] = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
  "/img5.jpg",
];

interface ContainerSize {
  width: number;
  height: number;
}

export default function WhyUsArea() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerSize, setContainerSize] = useState<ContainerSize>({
    width: 0,
    height: 0,
  });
  const [images, setImages] = useState<FloatingImage[]>([]);
  const [allLoaded, setAllLoaded] = useState(false);
  
  // Set container size on mount and resize.
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setContainerSize({ width: rect.width, height: rect.height });
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Making sure images are preloaded and 
  // generate their random positions after container size is set.
  useEffect(() => {
    if (!containerSize.width || !containerSize.height) return;

    const marginTop = 375;
    const maxY = containerSize.height * 0.6;
    const spacingX = containerSize.width / (localImages.length + 1);

    const sizeMin = 140;
    const sizeMax = 220;

    const imgs: FloatingImage[] = localImages.map((src, i) => {
      return {
        x: spacingX * (i + 1),
        y: getRandomFloat(marginTop, maxY),
        size: getRandomFloat(sizeMin, sizeMax),
        delay: getRandomFloat(0, 2),
        src: src,
      }
    });

    setImages(imgs);

    let loaded = 0;

    imgs.forEach(({ src }) => {
      const img = new Image();
      img.src = src;
      img.onload = img.onerror = () => {
        loaded++;
        if (loaded === imgs.length) {
          setAllLoaded(true);
        }
      };
    });

  }, [containerSize]);

  return (
    <div
      ref={containerRef}
      className="relative py-20 overflow-visible w-full min-h-[750px] flex flex-col font-semibold items-center text-primary-foreground"
    >
      {/* BG Color Layer */}
      <div className="absolute inset-0 -z-20 animated-gradient" />

      {/* Floating Images Layer */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {allLoaded &&
          images.map((props, index) => (
            <FloatingImages key={index} {...props} />
          ))}
      </div>

      {/* Top Heading */}
      <h1 className="absolute top-25 left-20 max-w-2xl text-5xl z-20 pointer-events-none text-left">
        We let creators link all their social accounts, downloadable files, and media in one place.
      </h1>

      {/* Bottom Heading */}
      <h2 className="absolute bottom-25 right-20 max-w-sm text-xl z-20 pointer-events-none text-right">
        Grow your audience, share anywhere, and stay in control. Your content, your rules.
      </h2>
    </div>
  );
}
