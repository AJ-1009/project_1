import React, { useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import styles from './pop-up.module.css'
const animation={
    show:{
        y:0,
        transition:{
            type:'spring',
            stiffness:50,
        }
    },
    hidden:{
        y:'-100vw',
    },
    exit:{
        y:'-100vw',
        opacity:0,
    }
}
// var sign
// var log
// var setlog
// var selo
// const Account = ({signin,login}) => {
//     const [sign,setsign] = useState(signin)
//     const [log,setlog] = useState(login)
//     SignIn(sign)
//     Login(log)
// }
function SignIn({signin}) {
    // const change =()=>{
    //     setlog(!login)
    //     setsign(!signin)
    // }
    // console.log(signin)
    const [sign,setsign] = useState(signin)
  return (
    <AnimatePresence>
    {signin && 
        <motion.div
        drag
        variants={animation}
        animate='show'
        initial='hidden'
        exit="exit"
        className={styles['card']}
        >
        <motion.p 
        animate={{
            scale:1.2,
            color:'rgb(2, 2, 132)'
        }}
        transition={{
            yoyo:'Infinity',
        }}
        >SIGN UP</motion.p>
        <div>
            <label htmlFor="">Name</label>
            <motion.input 
            type="text" 
            placeholder='Enter your name' 
            autoComplete='off' 
            required 
            className={styles['input']}
            />
        </div>
        <div>
            <label htmlFor="">Email</label>
            <motion.input 
            type="text" 
            placeholder='Enter your email' 
            autoComplete='off' 
            required 
            className={styles['input']}
            />
        </div>
        <div>
            <label htmlFor="">Number</label>
            <motion.input 
            type="text" 
            placeholder='Enter your mobile number' 
            autoComplete='off' 
            required 
            className={styles['input']}
            />
        </div>
        <div>
            <label htmlFor="">Password</label>
            <motion.input 
            type="text" 
            placeholder='Enter your password' 
            autoComplete='off' 
            required 
            className={styles['input']}
            />
            </div>
        <div>
            <label htmlFor="">Confirm password</label>
            <motion.input 
            type="text" 
            placeholder='Re-enter password to confirm' 
            autoComplete='off' 
            required 
            className={styles['input']}
            />
        </div>
        <motion.button
        whileHover={{
            scale:1.05,
        }}
        whileTap={{
            scale:.9,
        }}
        className={styles['account-btn']}
        >CREATE ACCOUNT</motion.button>
        <div className={styles['line']} >
            <hr /> <span>Or</span> <hr />
        </div>
        <div>Already a user? <button className={styles['button']}>Login</button>  </div>
        </motion.div>}
    </AnimatePresence>
  )
}
function LogIn({login}){
    console.log(login)
    const [forgot,setforgot] = useState(false)
    const pass=()=>{
        setforgot(!forgot)
        login=!login
    }
    console.log(login)
    return(
        <div>
            {login && 
                <motion.div
                drag
                variants={animation}
                animate='show'
                initial='hidden'
                exit="exit"
                className={styles['card']}
                >
                <motion.p 
                animate={{
                    scale:1.2,
                    color:'rgb(2, 2, 132)'
                }}
                transition={{
                    yoyo:'Infinity',
                }}
                >LOG IN</motion.p>
                <div>
                    <label htmlFor="">username</label>
                    <motion.input 
                    type="text" 
                    placeholder='Enter your username' 
                    autoComplete='off' 
                    required 
                    className={styles['input']}
                    />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <motion.input 
                    type="text" 
                    placeholder='Enter your password' 
                    autoComplete='off' 
                    required 
                    className={styles['input']}
                    />
                </div>
                <motion.button
                whileHover={{
                    scale:1.05,
                }}
                whileTap={{
                    scale:.9,
                }}
                className={styles['account-btn']}
                >LOG IN</motion.button>
                <button className={styles['forgot-btn']} onClick={pass} >Forgot password?</button>
                <div className={styles['line']} >
                    <hr /> <span>Or</span> <hr />
                </div>
                <div>Need an account? <button className={styles['button']} >Sign up</button> </div>
                </motion.div>
            }
            {(login && forgot) && 
                <motion.div
                drag
                variants={animation}
                animate='show'
                initial='hidden'
                exit="exit"
                className={styles['card']}
                >
                <motion.p 
                animate={{
                    color:'rgb(2, 2, 132)'
                }}
                transition={{
                    yoyo:'Infinity',
                }}
                >Forgot password</motion.p>
                <div>
                    
                </div>
                <div>
                    <label htmlFor="">usename / email</label>
                    <motion.input 
                    type="text" 
                    placeholder='Enter your username or email id' 
                    autoComplete='off' 
                    required 
                    className={styles['input']}
                    />
                </div>
                <motion.button
                whileHover={{
                    scale:1.05,
                }}
                whileTap={{
                    scale:.9,
                }}
                className={styles['account-btn']}
                >Send OTP</motion.button>
                <button className={styles['forgot-btn']} onClick={pass} >login</button>
                
                </motion.div>
            }
        </div>
    )
}
export {SignIn,LogIn}