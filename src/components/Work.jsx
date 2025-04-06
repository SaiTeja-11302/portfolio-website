import React from 'react';
import movieapp from '../assets/projects/movieapp.png';
import todesktop from '../assets/projects/todesktop.png';
import currency from '../assets/projects/currency.png';
import ecommerce from '../assets/projects/Ecommerce.png';
import mybrary from '../assets/projects/mybrary.png';


function Work() {
    return (
        <div name="work" className="w-full h-min text-gray-300 bg-[#0a192f] py-2">
            {/* Container */}
            <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full h-full">

                {/* Section Title */}
                <div className="pb-2 text-center md:text-left">
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600">Work</p>
                    <p className="py-4 text-gray-400">// My recent work</p>
                </div>

                {/* Projects Grid */}
                <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 py-4">
                    



                    {/* Project 1 */}
                    <div className=" bg-[#112240] p-6 rounded-lg shadow-lg hover:scale-105 duration-500">

                        {/* Image on the left (in large screens) and description with links on the right */}
                        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">

                            {/* Image Section */}
                            <div className="w-full md:w-1/2 flex justify-center">
                                <img className="w-full max-w-[300px] mx-auto rounded-lg shadow-lg" src={ecommerce} alt="Ecommerce" />
                            </div>

                            {/* Description and Links Section */}
                            <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                                <h3 className="text-2xl font-bold text-white">E-Commerce Website</h3>
                                <p className="text-gray-400">
                                    ● Built a React-based e-commerce platform with dynamic cart management, product categorization and secure login using Context API for state management.
                                    <br /> ● Utilized React Context API for centralized state management to handle cart operations and ensure consistent UI updates across components.
                                </p>
                                <div className="flex justify-center md:justify-start space-x-6">
                                    <a href="https://clothify113.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">
                                        Live Demo
                                    </a>
                                    <a href="https://github.com/SaiTeja-11302/E-commerce-website.git" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">
                                        GitHub
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>


                    {/* Project 2 */}
                    <div className=" bg-[#112240] p-6 rounded-lg shadow-lg hover:scale-105 duration-500">

                        {/* Image on the left (in large screens) and description with links on the right */}
                        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">

                            {/* Image Section */}
                            <div className="w-full md:w-1/2 flex justify-center">
                                <img className="w-full max-w-[300px] mx-auto rounded-lg shadow-lg" src={mybrary} alt="mybrary" />
                            </div>

                            {/* Description and Links Section */}
                            <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                                <h3 className="text-2xl font-bold text-white">Mybrary - Library Management System</h3>
                                <p className="text-gray-400">
                                    ● Developed a full-stack library management system using Node.js, Express, and MongoDB, enabling CRUD operations for authors with search functionality and form validation.
                                    <br /> ● Designed responsive EJS templates with MVC architecture, using Express middleware for secure forms and dynamic rendering.
                                </p>
                                <div className="flex justify-center md:justify-start space-x-6">
                                    <a href="https://mybrary-1-ne2h.onrender.com/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">
                                        Live Demo
                                    </a>
                                    <a href="https://github.com/SaiTeja-11302/Mybrary-1" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">
                                        GitHub
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>






                    {/* Project 3 */}
                    <div className=" bg-[#112240] p-6 rounded-lg shadow-lg hover:scale-105 duration-500">

                        {/* Image on the left (in large screens) and description with links on the right */}
                        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">

                            {/* Image Section */}
                            <div className="w-full md:w-1/2 flex justify-center">
                                <img className="w-full max-w-[300px] mx-auto rounded-lg shadow-lg" src={movieapp} alt="Movie App" />
                            </div>

                            {/* Description and Links Section */}
                            <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                                <h3 className="text-2xl font-bold text-white">Movies App with React</h3>
                                <p className="text-gray-400">
                                    ● Developed a movie discovery app using React, React Router, and Context API for state management.
                                    <br /> ● Integrated an API to display trending movies, search functionality, and persistent favorites via localStorage.
                                    <br /> ● Designed responsive UI with dynamic grids, hover effects.
                                </p>
                                <div className="flex justify-center md:justify-start space-x-6">
                                    <a href="https://movie-list-113.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">
                                        Live Demo
                                    </a>
                                    <a href="https://github.com/SaiTeja-11302/Movie-List" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">
                                        GitHub
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                    
                    

                    {/* Project 3 */}
                    <div className="bg-[#112240] p-6 rounded-lg shadow-lg hover:scale-105 duration-500">

                        {/* Image on the left (in large screens) and description with links on the right */}
                        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">

                            {/* Image Section */}
                            <div className="w-full md:w-1/2 flex justify-center">
                                <img className="w-full max-w-[300px] mx-auto rounded-lg shadow-lg" src={todesktop} alt="todesktop" />
                            </div>

                            {/* Description and Links Section */}
                            <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                                <h3 className="text-2xl font-bold text-white">ToDesktop Website Clone</h3>
                                <p className="text-gray-400">
                                    ● Developed a responsive clone of the ToDesktop platform using Tailwind CSS, replicating its modern design system and
                                    interactive features while ensuring cross-device compatibility.
                                    <br /> ● Implemented a mobile-first layout with Tailwind's utility classes, including dynamic navigation bars and
                                    scroll-triggered animations for company showcase sections.
                                </p>
                                <div className="flex justify-center md:justify-start space-x-6">
                                    <a href="https://todesktop-demo.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">
                                        Live Demo
                                    </a>
                                    <a href="https://github.com/SaiTeja-11302/todesktop-clone" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">
                                        GitHub
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Project 4 */}
                    <div className="bg-[#112240] p-6 rounded-lg shadow-lg hover:scale-105 duration-500">

                        {/* Image on the left (in large screens) and description with links on the right */}
                        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">

                            {/* Image Section */}
                            <div className="w-full md:w-1/2 flex justify-center">
                                <img className="w-full max-w-[300px] mx-auto rounded-lg shadow-lg" src={currency} alt="Currency Converter" />
                            </div>

                            {/* Description and Links Section */}
                            <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                                <h3 className="text-2xl font-bold text-white">Currency Converter with Real-Time Exchange Rates</h3>
                                <p className="text-gray-400">
                                    ● Developed a dynamic currency converter web application that fetches real-time exchange rates using an API.
                                    <br /> ● Implemented core functionality with JavaScript, including asynchronous API integration, input validation, and DOM
                                    manipulation to enable seamless currency conversion and dynamic UI updates
                                </p>
                                <div className="flex justify-center md:justify-start space-x-6">
                                    <a href="https://currencyconverter113.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">
                                        Live Demo
                                    </a>
                                    <a href="https://github.com/SaiTeja-11302/CurrencyConverter" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">
                                        GitHub
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                    
                    <div className="flex justify-center pt-4">
                        <a href="https://github.com/SaiTeja-11302?tab=repositories" target="_blank" rel="noopener noreferrer">
                            <button className='text-white group border-2 px-6 py-3 my-2 hover:bg-pink-600 hover:border-pink-600'>
                                More projects
                            </button>
                        </a>
                    </div>

                    

                </div>
            </div>
        </div>
    );
}

export default Work;