
"use client"
import './Home.css';
import { useState } from 'react';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';

const items = [
  {
    name: "Home",
    href: "/"
  },
  {
    name: "About",
    href: "/about"
  },
  {
    name: "Blog",
    href: "/blog"
  },
  {
    name: "Projects",
    href: "/projects"
  },
  {
    name: "Contact",
    href: "/contact"
  }
];

const Header = () => {



  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header min-w-fit overflow-hidden mb-2">
      <div className="flex justify-between items-center ">
        <div className="flex items-center">
          <Link href="/">
            <p className="text-4xl xl:text-4xl 2xl:text-5xl my-5 font-bold hover:text-slate-600 duration-300">Lucas Yu</p>
          </Link>
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-8">
            {items.map((item, index) => (
              <Link href={item.href} key={index}>
                <li className=" text-underline-animation my-1 text-xl hover:text-slate-800 cursor-pointer w-max whitespace-nowrap transition-all duration-300 border-b-2 border-transparent">{item.name}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="md:hidden">
          <button className="outline-none mobile-menu-button transition duration-200" onClick={toggleMenu}>
            {isMenuOpen ? <IoMdClose className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
          <div className={`mobile-menu ${isMenuOpen ? " transition duration-300 absolute" : "hidden"} flex-col items-center justify-center`}>
            {items.map((item, index) => (
              <Link href={item.href} key={index}>
                <ul className="my-1 text-gray-700 text-xl hover:text-slate-200 w-max whitespace-nowrap transition-all duration-300">{item.name}</ul>
              </Link>
            ))}
          </div>
        </div>
      </div>



    </div>
  );
};


export default Header;