import React, { useState } from 'react'
import { motion, useAnimation} from 'framer-motion'
function Box1() {
    const [animation,setanimation] = useState(false)
    const [title,settitle] = useState('start')
    const animate=()=>{
        setanimation(!animation)
        if (title==='start'){
            settitle('end')
        }
        else{
            settitle('start')
        }
    }
    const ashwin={
        animation:{
            scale:animation?[1,1.2,1.1,.7,1.2,1]:[1,1,1,1,1,1],
            rotate:animation?[30,60,30,180,90,60]:[0,0,0,0,0,0],
            borderRadius:animation?['20%','30%','50%','20%','30%','50%']:[0,0,0,0,0,0],
            transition:{
                yoyo:'Infinity',
                duration:1.5,
            }
        },

    }
  return (
    <div>
        <motion.button drag onClick={animate} >{title}</motion.button>
        {[1,2,3,4,5].map(()=>(
            <motion.div
            drag
            variants={ashwin}
            animate='animation'
           className='box1'
           ></motion.div>
        ))}
        {[1,2,3,4,5].map((card)=>(
            <motion.div
            drag 
            variants={ashwin}
            animate='animation'
           className='box2'
           ></motion.div>
        ))}
        {/* <motion.img src="/eligibility.svg" alt="" className='img'
        drag
        dragConstraints={{
            left:0,
            right:0,
            top:0,
            bottom:0,
        }}
        animate={{
            scale:1.2,
        }}
        transition={{
            yoyo:'Infinity',
            duration:5,
        }}
        /> */}
    </div>
  )
}

function Box2(){
    const control = useAnimation()
    const animate ={
        view:{
            opacity:1,
            transition:{
                delay:.1
            }
        },
        initial:{
            opacity:0,
        }
    }
    return(
        <div>
            <div className='buttons'>
                <motion.button 
                    variants={animate}
                    whileInView='view'
                    initial='initial'
                 onClick={()=>{
                    control.start({
                        x:650,
                    })
                }
                } >Move right</motion.button>
                <motion.button 
                   variants={animate}
                   whileInView='view'
                   initial='initial'
                 onClick={()=>{
                    control.start({
                        x:-500,
                    })
                }} >Move left</motion.button>
                <motion.button 
                    variants={animate}
                    whileInView='view'
                    initial='initial'
                 onClick={()=>{
                    control.start({
                        rotate:3600,
                    })
                }} >Rotate</motion.button>
                <motion.button 
                    variants={animate}
                    whileInView='view'
                    initial='initial'
                 onClick={()=>{
                    control.start({
                        rotate:0,
                    })
                }} >Reset rotate</motion.button>
                <motion.button 
                   variants={animate}
                   whileInView='view'
                   initial='initial'
                 onClick={()=>{
                    control.start({
                        borderRadius:"50%",
                    })
                }} >Circle</motion.button>
                <motion.button 
                   variants={animate}
                   whileInView='view'
                   initial='initial'
                 onClick={()=>{
                    control.start({
                        borderRadius:0,
                    })
                }} >Square</motion.button>
                <motion.button 
                    variants={animate}
                    whileInView='view'
                    initial='initial'
                 onClick={()=>{
                    control.start({
                        y:-250,
                        stdDeviation:2
                    })
                }} >Go to top</motion.button>
                <motion.button 
                    variants={animate}
                    whileInView='view'
                    initial='initial'
                onClick={()=>{
                    control.start({
                    y:250 ,
                    })
                }} >Go down</motion.button>
                <motion.button 
                   variants={animate}
                   whileInView='view'
                   initial='initial'
                 onClick={()=>{
                    control.stop()
                }} >Stop</motion.button>
                <motion.button 
                    variants={animate}
                    whileInView='view'
                    initial='initial'
                 onClick={()=>{
                    control.start({
                        x:0,
                        y:0,
                        borderRadius:0,
                        rotate:0,
                        transition:{
                            duration:5
                        }
                    })
                }}>Reset</motion.button>
            </div>
            <motion.div className='box' animate={control}  
            transition={{duration:2}} 
            drag 
            dragConstraints={{
                x:0,
                y:0,
            }} >
            </motion.div>
        </div>
    )
}


export {Box1,Box2}