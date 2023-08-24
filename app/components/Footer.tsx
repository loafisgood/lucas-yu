"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import
{
    faInstagram,
    faLinkedin,
    faGithub,
} from '@fortawesome/free-brands-svg-icons'



const Footer = () => {
    return (
        <footer className="footer text-black">
            <div className="flex flex-row justify-center">
                <motion.a href="https://github.com/loafisgood" target="_blank" rel="noopener noreferrer" className="mr-2" whileFocus={{ scale: 1 }} 
                whileHover={{ scale: 1.1 }} whileTap = {{ scale: 0.9 }}>
                    <FontAwesomeIcon icon={ faGithub } className="text-5xl" />
                </motion.a>
                <motion.a  href="https://www.linkedin.com/in/lucas-yu-678397218/" target="_blank" rel="noopener noreferrer" className="mx-2" whileFocus={{ scale: 1 }}
                whileHover={{ scale: 1.1 }} whileTap = {{ scale: 0.9 }}>
                    <FontAwesomeIcon icon={ faLinkedin } className="text-5xl" />
                </motion.a>
                <motion.a  href="https://www.instagram.com/_lucasyu_/" target="_blank" rel="noopener noreferrer" className="mx-2" whileFocus={{ scale: 1 }}
                whileHover={{ scale: 1.1 }} whileTap = {{ scale: 0.9 }}>
                    <FontAwesomeIcon icon={ faInstagram } className="text-5xl" />
                </motion.a>
            </div>
            <div className="content has-text-centered min-w-full py-4 text-center w-full ">
                <p className="text-black font-bold">Lucas Yu © 2023</p>
            </div>
        </footer>         
    )
}

export default Footer