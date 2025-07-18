/* eslint-disable react/react-in-jsx-scope */
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { Person, CloudUpload, LockOpen, Favorite } from "@mui/icons-material";

const steps = [
  {
    title: "SIGN UP",
    description: "Create an account as an creator or a fan",
    icon: (
      <Box className="bg-indigo-500 p-3 rounded-full">
        <Person fontSize="large" sx={{ color: '#fff' }} />
      </Box>
    ),
    bgColor: "bg-indigo-100 text-indigo-800",
  },
  {
    title: "UPLOAD OR UNLOCK",
    description: "Creators upload, Fans unlock contents.",
    icon: (
      <Box className="bg-blue-500 p-3 rounded-full flex gap-1">
        <CloudUpload sx={{ color: '#fff' }} />
        <LockOpen sx={{ color: '#fff' }} />
      </Box>
    ),
    bgColor: "bg-blue-100 text-blue-800",
  },
  {
    title: "CONNECT",
    description: "Build your audience and grow your art",
    icon: (
      <Box className="bg-violet-500 p-3 rounded-full">
        <Favorite fontSize="large" sx={{ color: '#fff' }} />
      </Box>
    ),
    bgColor: "bg-violet-100 text-violet-800",
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
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      {steps.map((step, index) => (
        <motion.div
          key={index}
          variants={item}
          className={`rounded-md py-25 px-5 shadow-lg text-center ${step.bgColor}`}
        >
          <div className="flex justify-center mb-4">{step.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
          <p className="text-sm">{step.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
