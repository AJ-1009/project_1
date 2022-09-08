import React from 'react'
import {motion} from'framer-motion'
const animation = {
    show:{
        opacity:10,
        transition:{
            duration:10,
        }
    },
    hidden:{
        opacity:0,
    },
    hover:{
        scale:1.2,
            transition:{
                duration:1,
            }
    },
    tap:{
        scale:.8,
        transition:{
            duration:1,
        }
    },
    drag:{
        scale:.7,
    }
}
function Svg2() {
  return (
    <div>
        <motion.img src="/tathva-logo.svg" alt="" 
        drag
       variants={animation}
       animate="show"
       initial="hidden"
       whileHover="hover"
       whileTap="tap"
       whileDrag="drag"
        />
        <div></div>
    </div>
  )
}

export default Svg2