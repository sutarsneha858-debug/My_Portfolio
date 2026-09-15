import React from 'react'
import { motion } from 'framer-motion'
import web from '../assets/web.png'
import cafe from '../assets/cafe.png'
import stopwatch from '../assets/stopwatch.png'
import global from '../assets/global.png'
import ProjectImage5 from '../assets/project5.png'
import ProjectImage6 from '../assets/project6.png'

const Projects = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true }}
            id="projects"
            className='py-20 bg-dark-200'>
            <div className='container mx-auto px-6'>
                <h2 className='text-3xl font-bold text-center mb-4'>My
                    <span className='text-purple'>Projects</span>
                </h2>
                <p className='text-gray-200 text-center max-w-2xl mx-auto mb-16'>Here are some of the projects I have worked on, showcasing my skills and expertise in web development.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                   
                    {/* Project 1 */}
                    <div className="bg-white/10 p-6 rounded-lg text-center transition duration-300 ease-in-out cursor-pointer hover:transform hover:scale-105 hover:bg-white/20">
                        <img src={web} alt="Project 1" className="w-full h-48 object-cover mb-4 rounded-md" />
                        <h3 className="text-xl font-bold mb-2">Shree Samarth Saree Website</h3>
                        <p className="text-gray-300 mb-4">
                            An elegant e-commerce platform for browsing and purchasing traditional sarees, featuring a user-friendly interface and seamless shopping experience.Build with modern and responsivedesign.HTML,CSS,javascript.The interface is optimized for both mobile and desktop users.
                        </p>
                        <div className="flex flex-wrap text-pink gap-2 mt-4" justify="center">
                            
                            <a href="https://saree-website-tau.vercel.app/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-purple-500 text-white px-4 py-2 rounded-full font-semibold">Live Project</a> 
                            


                        <div className="flex flex-wrap gap-2 mt-4" justify="center">
                        <span className="bg-purple-500/20 text-white px-8 py-2 rounded-full text-sm">HTML</span>
                        <span className="bg-purple-500/20 text-white px-9 py-2 rounded-full text-sm">CSS</span>
                        <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">Javascript</span>
                         </div> 
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="bg-white/10 p-6 rounded-lg text-center transition duration-300 ease-in-out cursor-pointer hover:transform hover:scale-105 hover:bg-white/20">
                        <img src={cafe} alt="Project 1" className="w-full h-48 object-cover mb-4 rounded-md" />
                        <h3 className="text-xl font-bold mb-2">Cafe Website</h3>
                        <p className="text-gray-300 mb-4">
                            Discover our full menu and easily find our location with this modern,responsive website designed for the ultimate cafe experience.The interface is optimized for both mobile and dekstop users, ensuring a seamless browsing experience across all devices.
                                                  </p>
                        <div className="flex flex-wrap text-pink gap-2 mt-4" justify="center">
                                <a href="https://cafe-website-indol-phi.vercel.app/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-purple-500 text-white px-4 py-2 rounded-full font-semibold">Live Project</a>
                                
                                <div className="flex flex-wrap gap-2 mt-4" justify="center">
                                <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">HTML</span>
                                <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">CSS</span>
                                <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">Javascript</span>
                                </div>
                            </div>
                    </div>

                    {/* Project 3 */}
                    <div className="bg-white/10 p-6 rounded-lg text-center transition duration-300 ease-in-out cursor-pointer hover:transform hover:scale-105 hover:bg-white/20">
                        <img src={stopwatch} alt="Project 1" className="w-full h-48 object-cover mb-4 rounded-md" />
                        <h3 className="text-xl font-bold mb-2">Stopwatch</h3>
                        <p className="text-gray-300 mb-4">
                          I've built responsive stopwatch application using React, HTML, CSS, and JavaScript. It allows users to start, stop, and reset the timer with ease. The design is clean and user-friendly, making it a practical tool for timing various activities.
                                                  </p>
                        <div className="flex flex-wrap text-pink gap-2 mt-4" justify="center">
                                <a href="https://stopwatch-two-orcin.vercel.app/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-purple-500 text-white px-4 py-2 rounded-full font-semibold">Live Project</a>
                                
                                <div className="flex flex-wrap gap-2 mt-4" justify="center">
                                <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">React</span>
                                <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">HTML</span>
                                <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">CSS</span>
                                <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">Javascript</span>
                                </div>
                                
                            </div>
                    </div>

                     {/* Project 4*/}
                    <div className="bg-white/10 p-6 rounded-lg text-center transition duration-300 ease-in-out cursor-pointer hover:transform hover:scale-105 hover:bg-white/20">
                        <img src={global} alt="Project 1" className="w-full h-48 object-cover mb-4 rounded-md" />
                        <h3 className="text-xl font-bold mb-2">ECO-ROUTE AI</h3>
                        <p className="text-gray-300 mb-4">
                        An innovative platform that leverages AI and computer vision for inteligent waste identification ,geotagged reporting and real-time analytics to optimize municipal cleaning operations and promote cleaner urban environments.                                              </p>
                        <div className="flex flex-wrap text-pink gap-2 mt-4" justify="center">
                            <a href="https://india-s-garbage-problem.vercel.app/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-purple-500 text-white px-4 py-2 rounded-full font-semibold">Live Project</a>

                                <div className="flex flex-wrap gap-2 mt-4" justify="center">
                                <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">Html</span>
                                <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">Css</span>
                                <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">Javascript</span>
                                </div>
                                
                                
                            </div>
                    </div>

                    {/* Project 5*/}
                    <div className="bg-white/10 p-6 rounded-lg text-center transition duration-300 ease-in-out cursor-pointer hover:transform hover:scale-105 hover:bg-white/20">
                        <img src={ProjectImage5} alt="Project 1" className="w-full h-64 object-contain mb-4 rounded-md" />
                        <h3 className="text-xl font-bold mb-2">Calculator</h3>
                        <p className="text-gray-300 mb-4">
                          A clean and practical calculator interface for everyday use.Easily handle your basic math needs with straightforward tool.
                                                  </p>
                        <div className="flex flex-wrap text-pink gap-2 mt-4" justify="center">
                                
                                <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">Html</span>
                                <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">Css</span>
                                <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">Javascript</span>
                            </div>
                    </div>

                       {/* Project 6*/}
                    <div className="bg-white/10 p-6 rounded-lg text-center transition duration-300 ease-in-out cursor-pointer hover:transform hover:scale-105 hover:bg-white/20">
                        <img src={ProjectImage6} alt="Project 1" className="w-full h-64 object-contain mb-4 rounded-md" />
                        <h3 className="text-xl font-bold mb-2">Interactive light bulb</h3>
                        <p className="text-gray-300 mb-4">
                           An interactive light bulb toggle application that showcases basic DOM manipulation and event handling in javascript.Engaging user interfaces by seamlessly integrating core front-end technologies.                                                   </p>
                        <div className="flex flex-wrap text-pink gap-2 mt-4" justify="center">
                                
                                <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">Html</span>
                                <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">Css</span>
                                <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">Javascript</span>
                            </div>
                    </div>













                   
                </div>
            </div>
        </motion.div>
    )
}

export default Projects
