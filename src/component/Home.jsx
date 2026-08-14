import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import linked from '../assets/linkedin.png'
import insta from '../assets/instagram.png'
import git from '../assets/github.png'
import landing from '../assets/Landing.png'
import Profile from '../assets/Profile.png'
import landing2 from '../assets/landing2.png'
import clean from '../assets/cleancode.png'
import responsive from '../assets/responsive-design.png'
import analytics from '../assets/analytics.png'
import health from '../assets/health.png'
import shop from '../assets/myshop.png'
import Myskill from './Myskill'
import job from '../assets/job.png'
import Contact from './Contact'

function Home() {
  return (
    <div  className="bg-cover bg-center h-auto sm:h-auto md:h-150"
          style={{ backgroundImage:  `url(${landing})`  }}>
      <Navbar/>
      
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2'>
              <div>
                  <div className='text-white pl-5 pr-5 pt-8 w-full sm:pl-10 sm:pr-10 sm:pt-10 sm:w-full md:pl-30 md:pr-10 md:pt-15 md:w-200 flex flex-col gap-3 '>
                      <p className='text-lg sm:text-lg md:text-xl text-blue-500'>👋🏻 Hi, I'm</p>
                      <p className='text-3xl sm:text-4xl md:text-5xl'>Gautam Budh Gupta</p>
                      <p className='text-base sm:text-lg md:text-xl text-blue-500'>Full Stack Developer | Data Analyst</p>
                      <p>I’m a Full Stack Developer and Data Analyst passionate about building modern, scalable web applications and turning data into meaningful insights. I work across the MERN stack to create responsive, user-focused applications while using data analytics to uncover patterns, solve problems, and support smarter decisions.
</p>

                    <div className='flex items-center justify-between w-full sm:w-full md:w-85'>
                         <div className='bg-blue-500 flex justify-center items-center h-10 w-35 border-2 border-black sm:w-36 md:w-40 rounded-xl shadow-lg shadow-blue-500/50 font-extralight'><Link to='/project' >
                           View My Work →</Link>
                           </div>
                      <div className='border-blue-500 border-2 h-10 w-32 sm:w-36 md:w-40 flex items-center justify-center rounded-xl'>
                         <Link to=''>Download CV</Link>
                      </div>
                    </div>

            
                     <p>Follow me</p>
                  <div className='flex gap-5'>
                      <a href="https://www.linkedin.com/in/gautam-budh-gupta/"target="_blank"rel="noopener noreferrer">
                        <img src={linked} className="h-10" alt="LinkedIn" />
                      </a>
                      <a href='https://www.instagram.com/iamgautambudh?igsh=amJ0czlqZ3UzMG84'><img src={insta} className='h-10'/></a>
                      <a href='https://github.com/Gautambuddh2004'><img src={git} className='h-10'/></a>
                  </div>
                </div></div>

              <div className='hidden md:flex justify-center items-center px-5 sm:px-10 md:px-10'> <img src={Profile} className='h-60 w-60 sm:h-80 sm:w-80 md:h-130 md:w-110'/></div>
        </div>
        
{/* second portion */}
        <div className="bg-cover bg-center h-auto sm:h-auto md:h-90"
          style={{ backgroundImage:  `url(${landing2})`  }}>

              <div className='pt-10 pl-5 sm:pl-10 md:pl-10 text-blue-600 text-lg'>About Me</div>  
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 pl-5 pr-5 sm:pl-10 sm:pr-10 md:pl-10 md:pr-10 flex gap-5 sm:gap-10 md:gap-15 w-full sm:w-full md:w-full '>
                  <div className='w-full sm:w-full md:w-90 flex gap-4 flex-col'>
                      <p className='text-2xl sm:text-3xl md:text-4xl font-["Poppins"] font-bold text-white'>Building Digital Experiences</p>
                      <p className='text-white'>I'm a passionate Frontend Developer and Data Analyst with expertise in building modern, responsive web applications and transforming data into meaningful insights.</p>
                      {/* <div className='border-2 text-white rounded-lg h-10 flex justify-center items-center bg-blue-500/20       border-blue-500/30 w-40 shadow-lg shadow-amber-500/20'><Link to='/about'>Know more →</Link>
                      </div> */}
                  </div>

                  <div className='border-2 border-blue-500/30 p-5 bg-blue-500/5 rounded-2xl shadow-lg shadow-blue-500/20 h-auto sm:h-auto md:h-50'>
                        <img className='h-15 w-15 ' src={clean}/>
                        <p className='font-bold text-red-500/80 text-2xl'>Clean Code</p>
                        <p className='text-white font-["Poppins"]'>I write clean, maintainable and scalable code for better   performence.</p>
                  </div>

                  <div className='border-2 border-blue-500/30 p-5 bg-blue-500/5 rounded-2xl shadow-lg shadow-blue-500/20 h-auto sm:h-auto md:h-50'>
                        <img className='h-15 w-15' src={responsive}/>
                        <p className='font-bold text-red-500/80 text-2xl'>Responsive Design</p>
                        <p className='text-white font-["Poppins"]'>I build website that look great on all devices and sizes.</p>
                  </div>
                  
                  <div className='border-2 border-blue-500/30 p-5 bg-blue-500/5 rounded-2xl shadow-lg shadow-blue-500/20 h-auto sm:h-auto md:h-50'>
                        <img className='h-15 w-15' src={analytics}/>
                        <p className='font-bold text-red-500/80 text-2xl'>Data Analytics</p>
                        <p className='text-white font-["Poppins"]'>Analyzing data in meaningful patterns, trends that help businesses make smarter.</p>
                  </div>
               </div>
            </div>
{/* third partition */}
       <Myskill/>
 {/* fourth portion */}

                <div className="bg-cover bg-center h-auto sm:h-auto md:h-180"
                 style={{ backgroundImage:  `url(${landing2})`  }}>

                    <div className='p-5 sm:p-8 md:p-10 font-["Poppins"]  text-white flex flex-col gap-3'>
                        <p className='text-blue-600 text-lg'>FEATURED PROJECTS</p>
                        <p className='text-3xl sm:text-3xl md:text-4xl'>Some of my recent works</p>
                        <p className='w-full sm:w-full md:w-120'>Here are a few selected projects that showcase my skills in design and development.</p>

                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 flex gap-5 sm:gap-8 md:gap-10 h-auto sm:h-auto md:h-100 '>
                              {/* first part 4.1 */}
                              <div className='border-2 border-blue-800/50 shadow-blue-500 shadow-md rounded-xl p-2'>
                                  <img className='rounded-lg' src={health}/>
                                  <div className='p-5'>
                                      <p className='text-blue-600'>Web Application</p>
                                      <p className='text-2xl font-semibold'>HealthTech</p>
                                      <p>One platform to book hospital appointments and connect with doctors anytime.</p>
                                      <div className='flex gap-5 pt-2'>
                                         <p className='bg-blue-200/20 h-8 rounded-lg w-15 flex justify-center items-center'>MERN</p>
                                         <p className='bg-blue-200/20 h-8 rounded-lg w-20 flex justify-center items-center'>Tailwind</p>
                                      </div>
                                  </div>
                              </div>

                              {/* second part 4.2 */}
                              <div className='border-2 border-blue-800/50 shadow-blue-500 shadow-md rounded-3xl p-3'>
                                    <img className='rounded-lg h-auto w-full sm:h-auto sm:w-full md:h-50 md:w-125' src={shop}/>
                                  <div className='p-5'>
                                      <p className='text-blue-600'>E-commerce</p>
                                      <p className='text-2xl font-semibold'>MyShop</p>
                                      <p>A one-stop online store to browse, shop, and get products delivered easily.</p>
                                      <div className='flex gap-5 pt-2'>
                                         <p className='bg-blue-200/20 h-8 rounded-lg w-15 flex justify-center items-center'>MERN</p>
                                         <p className='bg-blue-200/20 h-8 rounded-lg w-20 flex justify-center items-center'>Tailwind</p>
                                      </div>
                                  </div>
                              </div>
                              {/* third part 4.3 */}
                                 <div className='border-2 border-blue-800/50 shadow-blue-500 shadow-md rounded-3xl p-3'>
                                    <img className='rounded-lg h-auto w-full sm:h-auto sm:w-full md:h-50 md:w-125' src={job}/>
                                  <div className='p-5'>
                                      <p className='text-blue-600'>Job Portal</p>
                                      <p className='text-2xl font-semibold'>JobBoard</p>
                                      <p>A modern Job Portal web application that connects job seekers with employers.</p>
                                      <div className='flex gap-5 pt-2'>
                                         <p className='bg-blue-200/20 h-8 rounded-lg w-15 flex justify-center items-center'>MERN</p>
                                         <p className='bg-blue-200/20 h-8 rounded-lg w-20 flex justify-center items-center'>Tailwind</p>
                                      </div>
                                  </div>
                              </div>

                        </div>
                     </div>
                  <div className='pl-5 sm:pl-8 md:pl-10 flex justify-center'><Link className='text-white bg-blue-500 w-50 h-10 flex justify-center items-center rounded-xl shadow-xl shadow-red-500/20' to='/project'>View Project Details →</Link></div>
                </div>
              <Contact/>
             


    </div>
  )
}

export default Home