import React from 'react'
import{motion} from 'framer-motion'
const About = () => {
  return (
    <motion.div
        initial={{opacity:0,y:50}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.6, ease:'easeOut'}}
        viewport={{once:true}}
        id="about"
        className='p-20 bg-dark-200'>
            <div className='container mx-0 px-6'>
                <h2 className='text-3xl font-bold text-center mb-4'>About
                <span className='text-purple'>Me</span>
                </h2>
                
                <p className='text-gray-200 text-center max-w-2xl mx-auto mb-16'>Get to know more about my background and passion.I'm Passionate computer engineering student in my third year,
                    dedicated to crafting robust and user-friendly web applications.
                </p>
                <div className='md-w-1/2 rounded-2xl overflow-hidden'></div>
                <motion.div
                 initial={{opacity:0,y:50}}
                 whileInView={{opacity:1,y:0}}
                 transition={{duration:0.6, ease:'easeOut'}}
                 viewport={{once:true}}
                    className='md-w-1/2'>
                        <div className='rounded-2xl p-8'>
                            <h3 className='text-3xl font-bold text-center mb-4'>My
                            <span className="text-purple">Journey</span></h3>
                            <p className=' max-w-2xl mx-auto font-bold text-white-400 mb-12'>
                                <br/>
                                I am a passionate and driven third-year Computer Engineering student <br/>
                                dedicated to crafting innovative technological solutions.
                                My technical toolkit includes proficiency in languages and frameworks like Python,
                                Java, JavaScript, HTML, and CSS, along with experience in ReactJS and SQL databases.
                                I enjoy bringing concepts to life through hands-on projects, having recently developed an
                                AI voice assistant and a resume analyzer using Python. I'm always looking to expand my knowledge
                                and apply my skills to real-world challenges.
                                <br/>
                                <br/>
                                Beyond coding, I have a keen interest in health and wellness, particularly in eye care.
                                 This passion has inspired me to explore the intersection of technology and well-being,
                                  aiming to create applications that promote healthier digital habits.
                                  <br/>
                                  <br/>

                                <p className='text-gray-300 mb-12'>Looking ahead, my ultimate goal is to bridge health and technology
                                 by developing my own specialized eye-exercise application—turning my conceptual
                                  blueprint into a fully functional tool to promote digital wellness.
                                  </p>
                                  <h3 className='text-3xl font-bold text-center mb-4 text-pink'>Learning</h3>
                                  <p className='text-gray-300 mb-12'>While my core expertise currently lies in React JS, HTML, CSS, Python, and MySQL,
                                     I am highly enthusiastic about broadening my technical capabilities. I am actively planning to explore and acquire knowledge in various other domains,
                                      including advanced Backend Development, Database Management systems, innovative UI/UX Design, Cloud and DevOps practices, Cybersecurity, and Mobile App Development, 
                                      to further enhance my full-stack development skills and tackle modern technological challenges.</p>



                            </p>
                        </div>
                    </motion.div>
            </div>
    </motion.div>
  )
}


export default About
