import React from "react"
import myImage from "../assets/suman.jpg";



import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

import { ReactTyped } from "react-typed";





function Home() {
  return (
    <>
    <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col sm:flex-row">
        <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
        <span className="text-xl">Welcome to my portfolio!</span>
        <div className="flex space-x-1 text-2xl md:text-4xl">
          <h1>Hello, I am a</h1>
          {/* <span className="text-red-700 font-bold">Developer</span> */}
          <ReactTyped
          className="text-red-700 font-bold"
          strings={["Developer.", "programer.", "Coder."]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
        </div>
        <br />
        <p className="text-sm md:text-md text-justify">
        I specialize in crafting modern, scalable, and user-centric web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). With a strong passion for clean code, intuitive design, and innovative solutions, I aim to bridge the gap between ideas and impactful digital experiences. Take a look at my projects to see how I bring concepts to life!
        </p>
        <br />
        {/* socialmedia icon */}
        <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
        <div className="space-y-1">
        <h1 className="font-bold text-center">Avail on</h1>
        <ul className="flex space-x-5">
          <li className="text-2xl cursor-pointer">
            <a href="https://www.facebook.com/" target="_blank">
            <FaSquareFacebook />
            </a>
          </li>
          <li className="text-2xl cursor-pointer">
            <a href="https://www.linkedin.com/in/suman-kumar-80938631a" target="_blank">
            <FaLinkedin />
            </a>
          </li>
          <li className="text-2xl cursor-pointer">
            <a href="https://www.instagram.com/invites/contact/?igsh=16rewmyh9s28z&utm_content=ngjsiwe " target="_blank">
            <FaInstagramSquare />
            </a>
          </li>
        </ul>
        </div>
        <div className="space-y-2">
        <h1 className="font-bold">Curently working on</h1>
        <div className="flex space-x-5">
        <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
        <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
        <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
        <FaNodeJs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
          </div>
          
        </div>
        </div>
        </div>
        <div className="md:w-1/2 md:ml-60 md:mt-20 mt-8 order-1">
        <img src={myImage} className="rounded-full md:w-[450px] md:h-[450px]" alt="Loading" />
        </div>
        </div>
    </div>
    <hr />
    </>
  )
}

export default Home
