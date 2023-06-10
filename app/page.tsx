"use client"; 

import Image from 'next/image'
import './components/Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 
{
  faInstagram,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'



const Home  = () => {
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth >= 768 && window.innerWidth < 1024);
    }
    handleResize(); 
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    };
  }, []);


  return (
    <div className="bg-white min-h-screen overflow-hidden flex flex-col text-center align-center justify-center -mt-100">
      <motion.div exit={{ opacity:0 }} initial={{ opacity:0 }} animate={{ opacity:1 }} className='flex flex-col justify-center items-center -mb-24 -mt-48'>
        <div className="flex flex-col">
          <motion.div initial={{scale : 1 }}>
            <span className="text-6xl md:text-8xl font-bold cursor-pointer hover:text-slate-900 duration-300">
              Lucas Yu
            </span>
            <p className="text-gray-700 text-xl my-4">
              Hey, learn more about me or contact me below!
            </p>
            
          </motion.div>
          <div className=" text-lg my-2">
            <div className="flex justify-center flex-row items-center gap-8 mt-4">
              <Link href="/about">
                <span className="text-xl md:text-3xl font-bold cursor-pointer hover:text-slate-800 duration-500">
                  <span className="text-underline-animation">About me</span>
                </span>
              </Link>
            
              <Link href="/contact">
                <span className="text-xl md:text-3xl font-bold cursor-pointer hover:text-slate-800 duration-500">
                  <span className="text-underline-animation">Contact Me</span>
                </span>
              </Link>
            </div>
            <div className={`yinyang justify-center align-center text-center ml-32 mt-4`}></div>
          </div> 
        </div>
      </motion.div>
    </div>
  )
}
export default Home


