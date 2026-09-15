import React from 'react'
import { motion } from 'framer-motion'
// import {FaReact} from 'react-icons/fa'
// import{FaDatabase} from 'react-icons/fa'
// import{FaMobile} from 'react-icons/fa'
// import{FaCloud} from 'react-icons/fa'

const Skills = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true }}
            id="skills"
            className='py-20 bg-dark-100'>
            <div className='container mx-auto px-6'>
                <h2 className='text-3xl font-bold text-center mb-4'>My
                    <span className='text-purple'>Skills</span>
                </h2>
                <p className='text-gray-200 text-center max-w-2xl mx-auto mb-16'>Technologies I Work With to bring ideas to life</p>
            

                    <div className="grid grid-cols-1 md:grid-cols-3  gap-6 mt-10">
                        <div className="bg-white/10 p-6 rounded-lg text-center transition duration-300 ease-in-out transform hover:scale-105">
                            <h3 className="text-xl font-bold mb-2 text-white-200">Fronted Development</h3>
                            <p className="text-gray-300">Buliding responsive and interactive user interfaces with modern framework</p>
                            <div className="flex flex-wrap gap-2 mt-4" justify="center">
                                <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">HTML</span>
                                <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">CSS</span>
                                <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">Javascript</span>
                                <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">React</span>
                                <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">Next.js</span>
                               
                                
                                
                            </div>
                        </div>

                        <div className="bg-white/10 p-6 rounded-lg text-center transition duration-300 ease-in-out transform hover:scale-105">
                            <h3 className="text-xl font-bold text-white-200 mb-2">Backend Development</h3>
                            <p className="text-gray-300">Building robust and scalable server-side applications with modern frameworks</p>
                            <div className="flex flex-wrap gap-2 mt-4" justify="center">
                                <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">Node.js</span>
                                <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">Django</span>
                                <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">Express</span>
                                <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">Flask</span>
                                <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">Spring Boot</span>
                                <span className="bg-pink-500/20 text-white px-3 py-1 rounded-full text-sm">Learning</span>
                            </div>
                        </div>

                        <div className="bg-white/10 p-6 rounded-lg text-center transition duration-300 ease-in-out transform hover:scale-105">
                            <h3 className="text-xl font-bold text-white-200 mb-2">Database Management</h3>
                            <p className="text-gray-300">Designing and managing efficient database systems for data storage and retrieval</p>
                            <div className="flex flex-wrap gap-2 mt-4" justify="center">
                                <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">MySQL</span>
                                <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">Fiber</span>
                                <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">MongoDB</span>
                                <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">SQLite</span>
                                <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">Redis</span>
                                <span className="bg-pink-500/20 text-white px-3 py-1 rounded-full text-sm">Learning</span>
                            </div>
                        </div>

                        

                        <div className="bg-white/10 p-6 rounded-lg text-center transition duration-300 ease-in-out transform hover:scale-105">
                            <h3 className="text-xl font-bold text-white-200 mb-2">Cloud & DevOps</h3>
                            <p className="text-gray-300">Implementing cloud solutions and DevOps practices for efficient deployment and scalability</p>
                            <div className="flex flex-wrap gap-2 mt-4" justify="center">
                                <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">AWS</span>
                                <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">Azure</span>
                                <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">Docker</span>
                                <span className="bg-pink-500/20 text-white px-3 py-1 rounded-full text-sm">Learning</span>
                                
                            </div>
                        </div>

                        <div className="bg-white/10 p-6 rounded-lg text-center transition duration-300 ease-in-out transform hover:scale-105">
                            <h3 className="text-xl font-bold text-white-200 mb-2">AI & Data Science</h3>
                            <p className="text-gray-300">Leveraging artificial intelligence and data science techniques for insights and predictions</p>
                            <div className="flex flex-wrap gap-2 mt-4" justify="center">
                                <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">Python</span>  
                                <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">R</span>
                                <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">Pandas</span>
                                <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">PyTorch</span>
                                <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">Scikit-learn</span>
                                <span className="bg-pink-500/20 text-white px-3 py-1 rounded-full text-sm">Learning</span>
                            </div>
                        </div>

                        <div className="bg-white/10 p-6 rounded-lg text-center transition duration-300 ease-in-out transform hover:scale-105">
                            <h3 className="text-xl font-bold text-white-200 mb-2">Cyber Security</h3>
                            <p className="text-gray-300">Implementing security measures to protect systems and data from cyber threats</p>
                            <div className="flex flex-wrap gap-2 mt-4" justify="center">
                                <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">Network Security</span>
                                <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">Cryptography</span>
                                <span className="bg-purple-500/20 text-white px-3 py-1 rounded-full text-sm">Ethical Hacking</span>
                                <span className="bg-pink-500/20 text-white px-3 py-1 rounded-full text-sm">Learning</span>
                            </div>
                        </div>

                       
                        











                    </div>
                </div>
            

        </motion.div >
    )
}

export default Skills
