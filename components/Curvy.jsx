import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 0;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 2.5, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  },
};

export default function Curvy() {
  return (
    <motion.svg
      width="600"
      height="600"
      viewBox="0 0 600 -100"
      initial="hidden"
      animate="visible"
      className='curvy'
    >
        {/* T */}
    <motion.line
        x1="0"
        y1="30"
        x2="80"
        y2="30"
        stroke="black"
        variants={draw}
        custom={1}
        className='line'
      />
      <motion.line
        x1="40"
        y1="30"
        x2="40"
        y2="100"
        stroke="black"
        variants={draw}
        custom={1}
      />
      {/* A */}
      <motion.line
        x1="138"
        y1="30"
        x2="185"
        y2="100"
        stroke="black"
        variants={draw}
        custom={3.5}
      />
      <motion.line
        x1="105"
        y1="100"
        x2="142"
        y2="30"
        stroke="black"
        variants={draw}
        custom={3.5}
      />
      <motion.line
        x1="120"
        y1="70"
        x2="163"
        y2="70"
        stroke="black"
        variants={draw}
        custom={3.5}
      />
      {/* T */}
      <motion.line
        x1="210"
        y1="30"
        x2="290"
        y2="30"
        stroke="black"
        variants={draw}
        custom={6}
      />
      <motion.line
        x1="250"
        y1="30"
        x2="250"
        y2="100"
        stroke="black"
        variants={draw}
        custom={6}
      />
      {/* H */}
      <motion.line
        x1="330"
        y1="30"
        x2="330"
        y2="100"
        stroke="black"
        variants={draw}
        custom={8.5}
      />
      <motion.line
        x1="390"
        y1="100"
        x2="390"
        y2="30"
        stroke="black"
        variants={draw}
        custom={8.5}
      />
      <motion.line
        x1="330"
        y1="65"
        x2="390"
        y2="65"
        stroke="black"
        variants={draw}
        custom={8.5}
      />
      {/* V */}
       <motion.line
        x1="680"
        y1='30'
        x2="750"
        y2='170'
        stroke="black"
        variants={draw}
        custom={11}
      />
      <motion.line
        x1="820"
        y1="30"
        x2="750"
        y2="170"
        stroke="black"
        variants={draw}
        custom={11}
      />
      {/* A */}
      <motion.line
        x1="930"
        y1="30"
        x2="1005"
        y2="170"
        stroke="black"
        variants={draw}
        custom={13.5}
      />
      <motion.line
        x1="865"
        y1="170"
        x2="930"
        y2="30"
        stroke="black"
        variants={draw}
        custom={13.5}
      />
      <motion.line
        x1="975"
        y1="110"
        x2="892"
        y2="110"
        stroke="black"
        variants={draw}
        custom={13.5}
      />
    </motion.svg>
  );
}
