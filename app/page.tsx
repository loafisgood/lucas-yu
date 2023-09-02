"use client"; 
import Image from 'next/image'
import './components/Home.css'
import lake from '../public/lake.png'
import lake2 from '../public/lake2.png'
import night from '../public/night.png'
import night2 from '../public/night2.png'
import sea from '../public/sea.png'
import sea2 from '../public/sea2.png'
import sea3 from '../public/sea3.jpg'
import mirror from '../public/mirror.png'


import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
  const Images = [
    {
      name: 'lake',
      img: lake,
    },
    {
      name: 'lake2',
      img: lake2,
    },
    {
      name: 'sea',
      img: sea,
    },
    {
      name: 'sea2',
      img: sea2,
    },
    {
      name: 'sea3',
      img: sea3,
    },
    {
      name: 'night',
      img: night,
    },
    {
      name: 'night2',
      img: night2,
    },
    {
      name: 'mirror',
      img: mirror,
    }
  ]




  return (
    <div className="bg-white min-h-screen overflow-hidden flex flex-col text-center align-center justify-center mt-14 text-black">
      <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='flex flex-col justify-center items-center  mt-48'>
        <div className="flex flex-col">
          <motion.div initial={{ scale: 1 }}>
            <span className="text-8xl xs:text-7xl lg:text-8xl font-bold cursor-pointer hover:text-slate-800 duration-300">
              Lucas Yu
            </span>
            <p className="text-gray-700 text-xl my-4">
              Hey, learn more about me or contact me below!
            </p>
          </motion.div>
          <div className=" text-lg my-2">
            <div className="flex justify-center flex-row items-center gap-8 mt-4">
              <Link href="/about">
                <span className="text-2xl md:text-3xl font-bold cursor-pointer hover:text-slate-800 duration-500">
                  <span className="text-underline-animation">About me</span>
                </span>
              </Link>
              <Link href="/contact">
                <span className="text-2xl md:text-3xl font-bold cursor-pointer hover:text-slate-800 duration-500">
                  <span className="text-underline-animation">Contact Me</span>
                </span>
              </Link>
            </div>
            <div className={`yinyang justify-center align-center text-center ml-24 mt-5`}></div>
          </div>
        </div>
      </motion.div>
      <div className="flex flex-col justify-center items-center mt-10">
        <FontAwesomeIcon
          icon={faCircleArrowDown}
          className="text-5xl font-bold text-start text-slate-600 hover:text-slate-700 transition cursor-pointer"
          onClick={() => { window.scrollTo({ top: window.innerHeight, behavior: 'smooth' }) } }
        />
      </div>
      <div id="photos" className="flex flex-col justify-center items-center mt-40" >
        <h1 className='text-4xl font-bold text-start text-slate-900 hover:text-slate-700 transition cursor-pointer'>
          My Collection of Photos
        </h1>
        <hr className='mt-4 mb-10'></hr>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-4 gap-y-4 mb-20'>
          {Images.map((image, index) => (
            <div key={index} className="relative">
              <Image src={image.img} alt={image.name} className="rounded-sm" layout="responsive" width={500} height={500} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home;