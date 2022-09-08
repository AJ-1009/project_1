import React, { useState } from 'react'
import { motion,AnimatePresence } from 'framer-motion'
import styles from './toggle.module.css'
function Toggle() {
    const [toggle,settoggle] = useState(false)
  return (
    <div className='margin' >
        <AnimatePresence>
            <motion.div
                animate={{
                    x:0,
                }}
                initial={{
                    x:-100,
                }}
                transition={{
                    type:'spring',
                    stiffness:100,
                    duration:1,
                }}
                exit={{
                    x:200,
                    opacity:0,
                }}
                className={styles['nav-content']}
            >
                 <motion.div
            drag
            dragConstraints={{
                left:0,
                right:0,
                top:0,
                bottom:0,
            }}
            className={styles['hamburger']} onClick={() => settoggle(!toggle)} >
            <motion.hr 
                animate={{
                    rotate:toggle? 45:0,
                    y:toggle?10:0,
                }}
                className={styles['burger']} />
            <motion.hr 
                animate={{
                    rotate:toggle?-45:0,
                }}
                className={styles['burger']} />
        </motion.div>
                <ul>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                </ul>
            </motion.div>
        </AnimatePresence>
    </div>
  )
}

export default Toggle