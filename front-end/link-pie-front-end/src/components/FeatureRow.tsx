import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  image: string;
}

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

function FeatureRow({ feature, index }: FeatureCardProps) {
  const isTextLeft = index % 2 === 0;

  const textVariants = {
    hidden: { x: isTextLeft ? -100 : 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const imageVariants = {
    hidden: { x: isTextLeft ? 100 : -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between my-12 gap-6 md:gap-12">
      <motion.div
        className={`w-full md:w-1/2 ${isTextLeft ? 'order-1' : 'order-2'}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={textVariants}
      >
        <h3 className="text-2xl font-bold mb-4 text-indigo-600">{feature.title}</h3>
        <p className="text-gray-700 text-lg">{feature.description}</p>
      </motion.div>

      <motion.div
        className={`w-full md:w-1/2 ${isTextLeft ? 'order-2' : 'order-1'} flex justify-center`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={imageVariants}
      >
        <img
          src={feature.image}
          alt={feature.title}
          className="w-full max-w-md rounded-2xl shadow-xl"
        />
      </motion.div>
    </div>
  );
}
export default FeatureRow;