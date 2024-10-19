import React, { useState } from 'react'
import SignIn from '../Component/SignIn'
import SignUp from '../Component/Signup'
import GeekRoom from '../assests/GeekRoomLogo.3576ad97.svg'
import './Auth.css'
import { motion } from 'framer-motion'
const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className='h-screen bg-zinc-800 min-w-screen flex flex-col justify-center items-center'>
        <div className='h-full md:h-5/6 w-5/6 flex  bg-white rounded-2xl login-box md:overflow-hidden'>
          {isLogin ?<>
            <motion.div 
              initial={{x:500,
                rotateZ:180
              }}
              animate={{
                x:0,
                rotateZ:0
              
              }}
              transition={{
                duration:0.5
              }}
              key={0}
              className='left-a w-3/5 h-1/6 md:h-full bg-zinc-600 flex items-center justify-center geekroom'>
             <img src={GeekRoom} alt="geekroom" className='w-3/5 h-full'/></motion.div>
            <motion.div
            initial={{x:-500}}
            animate={{
              x:0
            }}
            transition={{
              duration:0.5
            }}
            key={4}
            
            
            className='right-a w-3/5 h-full  p-6 md:pr-20 z-0 signin'>
            <SignIn onclick={() => setIsLogin(false)}/>
            </motion.div>
          </>:<>
            <motion.div 
            initial={{x:500}}
            animate={{
              x:0
            }}
            transition={{ 
              duration:0.5
            }}
            
            key={1}
            className='right-a h-[90%] md:w-3/6 p-3 md:pl-10'>
              <SignUp onclick={() => setIsLogin(true)}/>
            </motion.div>
            <motion.div
            initial={{x:-500,
              rotateZ:-180
            }}
            animate={{
              x:0,
              rotateZ:0
            }}
            transition={{
              duration:0.5
            }}  
            key={6}
            className=' w-full h-1/5 left-b md:w-3/6 md:h-full bg-zinc-600 flex items-center justify-center geekroom'>
            <img src={GeekRoom} alt="geekroom" className=' md:w-3/5'/></motion.div>
          </>}
            

        </div>
        <p className="text-sm text-white">© made by yash vardhan rawat</p>
    </div>
  )
}

export default Auth
