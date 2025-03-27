import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'


const Home = () => {
    return (
        <>
            <div name='home' className='w-full h-screen bg-[#0a192f]'>
                {/* container */}
                <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                    <p className='text-white md:text-xl'>Hi, my name is</p>
                    <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Sai Teja Janga</h1>
                    <p className='text-[#8892b0] py-4 max-w-[700px]'>
                        Graduate Computer Science Student at Illinois Tech, driven by a passion for building impactful projects that enrich people’s lives.
                        I am eager to tackle real-world challenges and develop innovative solutions that bring value and efficiency to everyday experiences.
                        <br />I’m excited to collaborate, innovate, and continue my journey of learning to contribute meaningfully to the tech world.
                    </p>

                    {/* Container for button and icons */}
                    <div className='flex flex-row items-center'>
                        <Link to="work" smooth={true} duration={500} offset={-80}>
                            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                                View Work
                                <span className='group-hover:rotate-90 duration-300'>
                                    <HiArrowNarrowRight className='ml-3' />
                                </span>
                            </button>
                        </Link>

                        {/* Icons container - visible only on mobile */}
                        <div className='flex space-x-4 ml-4 md:hidden'>
                            <a href="https://www.linkedin.com/in/saitejareddyjanga/" target="_blank" rel="noreferrer" className='w-[40px] h-[40px] flex justify-center items-center bg-[#0B65C2] text-gray-300 hover:text-white rounded-full'>
                                <FaLinkedin size={20} />
                            </a>
                            <a href="https://github.com/SaiTeja-11302" target="_blank" rel="noreferrer" className='w-[40px] h-[40px] flex justify-center items-center bg-[#333333] text-gray-300 hover:text-white rounded-full'>
                                <FaGithub size={20} />
                            </a>
                            <a href="/SaiTejaJangaResume.pdf" target="_blank" rel="noreferrer" className='w-[40px] h-[40px] flex justify-center items-center bg-[#565f69] text-gray-300 hover:text-white rounded-full'>
                                <BsFillPersonLinesFill size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home