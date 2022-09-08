import React, { useState } from 'react'
import List from './List'
import { motion ,AnimatePresence, Reorder } from 'framer-motion'
import styles from './to-do-list.module.css'

const animation={
    show:{
        x:0,
        y:0,
        when:'beforeChildren',
        transition:{
            type:'spring',
            stiffness:100,
            bounce:10000,
            damping:15,
            mass:.7,
            delay:.5,
            when:'beforeChildren',
        }
    },
    hidden:{
        x:'-100vw',
    },
    exit:{
        x:'100vw',
        opacity:0,
    }
}
const list_animation={
    show:{
        opacity:1,
        staggerdChildren:1,
        transition:{
            delay:1.2,
        }
    },
    hidden:{
        opacity:0,
    },
    hover:{
        scale:1.2,
    },
    dragConstraints:{
        x:0,
        y:0
    },
    focus:{
        scale:6,
    },
    tap:{
        scale:.9,
    }
}
function ToDoList() {
    const [show,setshow] = useState(false)
    const getlist=()=>{
        setshow(!show)
    }
    const [greet,setgreet] = useState([0,1,2,3,4])
  return (
    <div>
        <button className={styles['get-btn']} onClick={()=>setshow(true)}>Get your Today's to do list</button>
        <AnimatePresence>
            {show && <motion.div
            variants={animation}
            animate='show'
            initial='hidden'
            exit='exit'
            className={styles['list']}
            >  
            <motion.button onClick={()=>setshow(false)} className={styles['close']} >X</motion.button>
            <Reorder.Group axix="y" values={greet} onReorder={setgreet}  >
                {List.map((content)=>(
                            <Reorder.Item
                            // variants={list_animation}
                            // drag
                            // dragConstraints="dragConstraints"
                            // animate='show'
                            // initial='hidden'
                            // whileHover='hover'
                            // whileFocus='focus'
                            // whileTap='tap'
                            value={content}
                            className={styles['list-item']}
                            >
                                {content.greet}
                            </Reorder.Item>
                ))}
            </Reorder.Group>
            </motion.div>}
        </AnimatePresence>
    </div>
  )
}

export default ToDoList