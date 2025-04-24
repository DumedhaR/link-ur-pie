import { Box} from "@mui/material";
import { motion } from "framer-motion";
import { Person, CloudUpload, LockOpen, Favorite } from "@mui/icons-material";

const steps = [
  {
    title: "SIGN UP",
    description: "Create an account as an artist or a fan",
    icon: <Person fontSize="large" sx={{ color: '#fff' }} />,
    bgColor: "bg-pink-600",
  },
  {
    title: "UPLOAD OR UNLOCK",
    description: "Artists upload content. Fans unlock exclusive works.",
    icon: (
      <Box className="flex gap-2 text-white">
        <CloudUpload sx={{ color: '#fff' }} />
        <LockOpen sx={{ color: '#fff' }} />
      </Box>
    ),
    bgColor: "bg-blue-500",
  },
  {
    title: "CONNECT",
    description: "Build your audience and grow your art",
    icon: <Favorite fontSize="large" sx={{ color: '#fff' }} />,
    bgColor: "bg-violet-500",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export default function HowItWorksSection() {
  return (
    <section className="px-4 md:px-40 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">HOW IT WORKS</h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            variants={item}
            className={`rounded-2xl py-16 shadow-xl text-white text-center ${step.bgColor}`}
          >
            <div className="flex justify-center mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-sm">{step.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}