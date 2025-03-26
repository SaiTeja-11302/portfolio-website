import React from 'react'

function About() {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-col-2 gap-8'>
                <div className='sm:text-left md:text-center pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                        About
                    </p>
                </div>
                <div>
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi there! I'm Sai Teja, a developer passionate about creating things that matter. </p>
                </div>
                <div>
                    <p>a graduate student at the Illinois Institute of Technology with a passion for technology, innovation, and problem-solving. 
                        I hold a bachelor's degree from GITAM University, India, and stay driven by curiosity and continuous learning. 
                        I’m interested in emerging technologies, and current affairs. I enjoy collaborating on impactful projects, growing as a developer, and exploring new cultures. 
                        <br />Let’s work together to create something remarkable!.</p>
                </div>

            </div>
            

        </div>

    </div>
  )
}

export default About