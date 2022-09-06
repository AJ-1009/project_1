import React, { useState } from 'react'
import {SignIn,LogIn} from './PopUp'
import styles from './main.module.css'
function Main() {
    const [signin_card,setsignin_card] = useState(false)
    const [login_card,setlogin_card] = useState(false)
    const signup=()=>{
      setsignin_card(!signin_card)
      setlogin_card(false)
    }
    const login=()=>{
      setsignin_card(false)
      setlogin_card(!login_card)
    }
  return (
    <div>
        <button
        className={styles['btn']}
        onClick={signup}
        >
            Sign Up
        </button>
        <button
        className={styles['btn']}
        onClick={login}
        >
            Log In
        </button>
        <SignIn signin={signin_card} />
        <LogIn login={login_card} />
    </div>
  )
}

export default Main