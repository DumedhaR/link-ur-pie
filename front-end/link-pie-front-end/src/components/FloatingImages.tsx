import { motion, useAnimation } from "framer-motion";
import { useEffect} from "react";
import { getRandomFloat } from "@/utils/mathOp";
import { FloatingImage } from "@/types/types";

export default function FloatingImages({ src, x, y, size, delay }: FloatingImage) {
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
