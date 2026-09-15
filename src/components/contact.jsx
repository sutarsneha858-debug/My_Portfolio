import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'


const contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true }}
            id="contact"
            className='py-20 bg-dark-200'>
            <div className='container mx-auto px-6'>
                <h2 className='text-3xl font-bold text-center mb-4'>Get in
                    <span className='text-purple'> Touch</span>
                </h2>
                <p className='text-gray-200 text-center max-w-2xl mx-auto mb-16'>Feel free to reach out to me for any inquiries, collaborations, or just to say hello. I'm always open to new opportunities and connections.</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <div>
                        <form className="space-y-6">
                            <div>
                                <lable htmlFor="name" className="block text-sm font-medium text-gray-300"> Your Name</lable>
                                <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md bg-dark-300 border-gray-600 text-white shadow-sm focus:border-purple focus:ring focus:ring-purple focus:ring-opacity-50 sm:text-sm p-2" placeholder="Enter your name" required />
                            </div>
                            <div>
                                <lable htmlFor="email" className="block text-sm font-medium text-gray-300"> Your Email</lable>
                                <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md bg-dark-300 border-gray-600 text-white shadow-sm focus:border-purple focus:ring focus:ring-purple focus:ring-opacity-50 sm:text-sm p-2" placeholder="Enter your email" required />
                            </div>
                            <div>
                                <lable htmlFor="message" className="block text-sm font-medium text-gray-300"> Your Message</lable>
                                <textarea id="message" name="message" rows="4" className="mt-1 block w-full rounded-md bg-dark-300 border-gray-600 text-white shadow-sm focus:border-purple focus:ring focus:ring-purple focus:ring-opacity-50 sm:text-sm p-2" placeholder="Enter your message" required></textarea>
                            </div>
                            <button type="submit" className="w-full bg-purple text-white font-medium py-2 px-4 rounded-md hover:bg-purple-600 transition duration-300">Send Message</button>
                        </form>
                    </div>

                    {/*contact info*/}
                    <div className="space-y-8">
                        <div className="flex items-center space-x-4">
                            <div className="text-purple text-2xl mr-4">
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h3>Location</h3>
                                <p className="text-gray-400">Mumbai,Ambarnath East</p>
                            </div>

                        </div>


                    <div className="space-y-8">
                        <div className="flex items-start space-x-4">
                            <div className="text-purple text-2xl mr-4">
                                <FaEnvelope />
                            </div>
                            <div>
                                <h3>Email</h3>
                                <p className="text-gray-400">sutarsneha858@gmail.com</p>
                            </div>

                        </div>

                    </div>
                    <div className="space-y-8">
                        <div className="flex items-start space-x-4">
                            <div className="text-purple text-2xl mr-4">
                                <FaPhone />
                            </div>
                            <div>
                                <h3>Phone</h3>
                                <p className="text-gray-400">+91 7028378583</p>
                            </div>
                        </div>
                        <div className="pt-4">
                            <h3>Follow Me</h3>
                                
                            <div className="flex space-x-4 mt-2">
                                <a href="https://www.linkedin.com/in/sneha-ganesh-sutar-34a538390" className="h-12 w-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-purple-600 transition duration-300">
                                    <FaLinkedin />
                                </a>
                                <a href="https://github.com/sutarsneha858-debug" className="h-12 w-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-purple-600 transition duration-300">
                                    <FaGithub />
                                </a>
                                
                                <a href="https://instagram.com/snehathesoulartist" className="h-12 w-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-purple-600 transition duration-300">
                                    <FaInstagram />
                                
                                </a>
                                
                            </div>

                        </div>
                   </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}


export default contact
