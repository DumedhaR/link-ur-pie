import { motion } from 'framer-motion';

interface Feature {
  title: string;
  forArtist: string;
  forFans: string;
  artistImage: string;
  fanImage: string;
}

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

function FeatureRow({ feature }: FeatureCardProps) {
  const headingVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const artistVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut', delay: 0.3 },
    },
  };

  const fanVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut', delay: 0.6 },
    },
  };

  return (
    <div className="my-12">
      {/* Heading */}
      <motion.h3
        className="text-2xl font-bold text-indigo-600 mb-10 text-left capitalize"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.9 }}
        variants={headingVariants}
      >
        {feature.title}
      </motion.h3>

      <div className="flex flex-col md:flex-row justify-between items-start">
        {/* Artist Side */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={artistVariants}
        >
          <div className="w-full rounded-xl overflow-hidden max-w-xs shadow-sm bg-neutral-50">
            <img
              src={feature.artistImage}
              alt="Artist feature"
              className="w-full shadow-sm"
            />
            <div className='m-8'>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">For Artists</h4>
              <p className="text-gray-700 text-base">{feature.forArtist}</p>
            </div>
          </div>
        </motion.div>

        {/* Fan Side */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col items-end text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fanVariants}
        >
          <div className="w-full rounded-xl max-w-xs overflow-hidden shadow-sm bg-neutral-50">
            <img
              src={feature.fanImage}
              alt="Fan feature"
              className="w-full shadow-sm"
            />
            <div className='m-8'>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">For Fans</h4>
              <p className="text-gray-700 text-base">{feature.forFans}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default FeatureRow;
