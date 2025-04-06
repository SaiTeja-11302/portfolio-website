import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import GitHub from '../assets/github.png';
import Git from '../assets/git.png';
import python from '../assets/python.png';
import Tailwind from '../assets/tailwind.png';
import Node from '../assets/njs.png'
import Express from '../assets/ejs.png'
import Mongo from '../assets/MongoDB.png'
import mysql from '../assets/mysql.png'


function Skills() {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>{`< Skills />`}</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML Icon" />
                    <p>HTML</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS Icon" />
                    <p>CSS</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript Icon" />
                    <p>JAVASCRIPT</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={ReactImg} alt="React Icon" />
                    <p>REACT</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind Icon" />
                    <p>TAILWIND</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 h-20 mx-auto object-contain p-2' src={Node} alt="Node Icon" />
                    <p>NODE.JS</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 h-20 mx-auto object-contain p-2' src={Express} alt="Node Icon" />
                    <p>EXPRESS.JS</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 h-20 mx-auto object-contain p-2' src={Mongo} alt="MongoDB Icon" />
                    <p>MONGO DB</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 h-20 mx-auto object-contain p-2' src={mysql} alt="Mysql Icon" />
                    <p>MYSQL</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={Git} alt="Git Icon" />
                    <p>GIT</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={GitHub} alt="GitHub Icon" />
                    <p>GITHUB</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={python} alt="Python Icon" />
                    <p>PYTHON</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Skills