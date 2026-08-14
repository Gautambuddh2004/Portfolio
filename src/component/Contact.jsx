import React from 'react'
import Navbar from './Navbar'
import contact from '../assets/contact12.png'
import linked from '../assets/linkedin.png'
import insta from '../assets/instagram.png'
import git from '../assets/github.png'

function Contact() {
  return (
    <div className="bg-cover bg-center h-auto sm:h-auto md:h-80 "
              style={{ backgroundImage:  `url(${contact})`  }}>

        <div className='p-5 sm:p-8 md:p-10 font-["Poppins"] font-semibold text-white flex flex-col sm:flex-col md:flex-row gap-6 sm:gap-10 md:gap-30'>
          {/* first part */}
          <div className='flex gap-2 flex-col'> 
            <p className='text-blue-600 text-xl'>Get in Touch</p>
            <p className='text-3xl sm:text-3xl md:text-4xl '>Let's work together</p>
            <p>Have a project in mind or just want to say hello? I'm always open to discussing new opportunities, freelance work, and creative collaborations. Feel free to reach out through WhatsApp, email, or social media—I'll get back to you as soon as possible.</p>
            <a className="inline-flex items-center gap-3 rounded-xl bg-green-500 w-40 px-6 py-3 text-white font-semibold hover:bg-green-600 transition" href="https://wa.me/918318196791">Contact me</a>
          </div>

          {/* second part */}
          
        </div>
         <hr className='border-2' />

         <div className='text-white flex flex-col sm:flex-col md:flex-row justify-around items-center gap-3 md:gap-0 text-center'>
            <p>© 2025 Gautam Budh Gupta. All Rights Reserved.</p>
             <div className='flex items-center pt-2 gap-5'>
                    <a href="https://www.linkedin.com/in/gautam-budh-gupta/"target="_blank"rel="noopener noreferrer">
                     <img src={linked} className="h-8" alt="LinkedIn" />
                    </a>
                    <a href='https://www.instagram.com/iamgautambudh?igsh=amJ0czlqZ3UzMG84'><img src={insta} className='h-8'/></a>
                    <a href='https://github.com/Gautambuddh2004'><img src={git} className='h-8'/></a>
               </div>
               <p>Designed & Made with ❤️</p>
         </div>
      
    </div>
  )
}

export default Contact