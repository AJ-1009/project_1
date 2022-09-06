import { motion } from "framer-motion";
import styles from './project.module.css'
import React from 'react'

function project() {
  return (
    <motion.div
    >
      <motion.img src="/globe.svg" alt="" 
       animate={{
        rotateY:60,
    }}
    transition={{
      yoyo:Infinity,
      duration:.1,
    }}
    className={styles['img']}
      />
      <motion.img src="/hand.svg" alt="" 
      whileHover={{
        rotate:20,
      }}
      drag
     WhileTap={{
      scale:20,
     }}
      // animate={{
      //   rotate:10,
      // }}
      transition={{
        yoyo:10,
      }}
      className={styles['img']}
      />
    </motion.div>
  )
}

export default project