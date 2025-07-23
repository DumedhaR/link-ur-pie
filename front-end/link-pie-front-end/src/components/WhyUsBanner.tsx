import { motion, useAnimation } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const NUM_IMAGES = 5;

const getRandomFloat = (min: number, max: number): number =>
  Math.random() * (max - min) + min;

const localImages: string[] = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
  "/img5.jpg",
];

interface FloatingImageProps {
  src: string;
  x: number;
  y: number;
  size: number;
  delay: number;
}

interface ContainerSize {
  width: number;
  height: number;
}

interface ImageConfig extends FloatingImageProps {
  id: number;
}

export default function WhyUsSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerSize, setContainerSize] = useState<ContainerSize>({
    width: 0,
    height: 0,
  });
  const [images, setImages] = useState<ImageConfig[]>([]);
  const [allLoaded, setAllLoaded] = useState(false);

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

  useEffect(() => {
    if (!containerSize.width || !containerSize.height) return;

    const marginTop = 350;
    const maxY = containerSize.height * 0.58;
    const spacingX = containerSize.width / (NUM_IMAGES + 1);

    const sizeMin = 140;
    const sizeMax = 230;

    const imgs: ImageConfig[] = [];

    for (let i = 0; i < NUM_IMAGES; i++) {
      const size = getRandomFloat(sizeMin, sizeMax);
      const x = spacingX * (i + 1);
      const y = getRandomFloat(marginTop, maxY);

      imgs.push({
        id: i,
        x,
        y,
        size,
        delay: getRandomFloat(0, 2),
        src: localImages[i],
      });
    }

    setImages(imgs);
  }, [containerSize]);

  // Preload local images
  useEffect(() => {
    if (images.length === 0) return;

    let loadedCount = 0;

    images.forEach(({ src }) => {
      const img = new Image();
      img.src = src;
      img.onload = img.onerror = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          setAllLoaded(true);
        }
      };
    });
  }, [images]);

  return (
    <div
      ref={containerRef}
      className="relative py-20 overflow-visible w-full min-h-[700px] flex flex-col font-semibold items-center text-[#9ab5f0]"
    >
      {/* Light Blue BG */}
      <div className="absolute inset-0 -z-20 bg-black" />

      {/* Floating Images Layer */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {allLoaded &&
          images.map(({ id, ...props }) => (
            <FloatingImage key={id} {...props} />
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

function FloatingImage({ src, x, y, size, delay }: FloatingImageProps) {
  const controls = useAnimation();

  useEffect(() => {
    let isMounted = true;

    const animate = async () => {
      await new Promise((res) => setTimeout(res, delay * 1000));

      while (isMounted) {
        await controls.start({
          x: getRandomFloat(-size * 0.1, size * 0.1),
          y: getRandomFloat(-size * 0.1, size * 0.1),
          transition: {
            duration: getRandomFloat(4, 7),
            ease: "easeInOut",
          },
        });
      }
    };

    animate();

    return () => {
      isMounted = false;
    };
  }, [controls, delay, size]);

  return (
    <motion.img
      src={src}
      alt=""
      className="absolute rounded-xl object-cover shadow-md opacity-60"
      style={{
        width: size,
        height: size,
        top: y - size / 2,
        left: x - size / 2,
        userSelect: "none",
      }}
      initial={{ x: 0, y: 0 }}
      animate={controls}
      draggable={false}
    />
  );
}
