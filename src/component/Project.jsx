import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import health from '../assets/health.png'
import shop from '../assets/myshop.png'
import job from '../assets/job.png'
import linked from '../assets/linkedin.png'
import insta from '../assets/instagram.png'
import git from '../assets/github.png'

function Project() {
  return (
    <div className='bg-black min-h-screen'>
      <Navbar />

      {/* Landing / Greeting section - no image, plain dark background */}
      <div className="bg-gradient-to-b from-blue-950/40 via-black to-black">
        <div className='px-5 sm:px-10 md:px-20 pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-20 font-["Poppins"] text-white flex flex-col gap-4 max-w-4xl'>
          <p className='text-blue-500 text-lg'>👋🏻 Hey, glad you're here</p>
          <p className='text-4xl sm:text-5xl md:text-6xl font-bold leading-tight'>
            A closer look at <span className='text-blue-500'>what I've built</span>
          </p>
          <p className='text-gray-300 text-base sm:text-lg max-w-2xl'>
            Every project below started as a problem worth solving. From hospital
            booking systems to online stores and job platforms, here's the story
            behind each build — the stack, the thinking, and the outcome.
          </p>
        </div>
      </div>

      {/* Projects section - 3 detailed cards */}
      <div className='px-5 sm:px-10 md:px-20 pb-20 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-8'>

        {/* Card 1 */}
        <div className='flex flex-col border-2 border-blue-800/40 bg-blue-500/5 rounded-2xl shadow-lg shadow-blue-500/10 overflow-hidden hover:shadow-blue-500/30 transition'>
          <img src={health} className='w-full h-48 sm:h-52 object-cover' alt='HealthTech project' />
          <div className='p-6 flex flex-col gap-3 font-["Poppins"] text-white flex-1'>
            <p className='text-blue-500 text-sm uppercase tracking-wide'>Web Application</p>
            <p className='text-2xl font-semibold'>HealthTech</p>
            <p className='text-gray-300 text-sm leading-relaxed'>
              HealthTech is a full-stack appointment booking platform built to close
              the gap between patients and hospitals. Patients can search doctors by
              specialization, check real-time slot availability, book appointments,
              and get instant confirmation — no phone calls, no waiting rooms. On the
              admin side, hospitals manage doctor schedules, track daily bookings, and
              handle cancellations through a dedicated dashboard. I built the entire
              flow with a focus on reducing no-shows: automated reminders, clear
              slot-locking logic to prevent double-booking, and a clean, distraction-free
              UI so booking takes under a minute. Authentication is role-based,
              separating patient, doctor, and admin views, and the backend is
              structured around a normalized schema that keeps appointment history
              queryable and fast even as data grows.
            </p>
            <div className='flex flex-wrap gap-3 pt-2 mt-auto'>
              <span className='bg-blue-200/20 text-xs px-3 py-1 rounded-lg'>MongoDB</span>
              <span className='bg-blue-200/20 text-xs px-3 py-1 rounded-lg'>Express</span>
              <span className='bg-blue-200/20 text-xs px-3 py-1 rounded-lg'>React</span>
              <span className='bg-blue-200/20 text-xs px-3 py-1 rounded-lg'>Node.js</span>
              <span className='bg-blue-200/20 text-xs px-3 py-1 rounded-lg'>Tailwind</span>
            </div>
            <Link to='' className='text-blue-500 text-sm font-medium pt-3 inline-block hover:underline'>
              View Project →
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className='flex flex-col border-2 border-blue-800/40 bg-blue-500/5 rounded-2xl shadow-lg shadow-blue-500/10 overflow-hidden hover:shadow-blue-500/30 transition'>
          <img src={shop} className='w-full h-48 sm:h-52 object-cover' alt='MyShop project' />
          <div className='p-6 flex flex-col gap-3 font-["Poppins"] text-white flex-1'>
            <p className='text-blue-500 text-sm uppercase tracking-wide'>E-commerce</p>
            <p className='text-2xl font-semibold'>MyShop</p>
            <p className='text-gray-300 text-sm leading-relaxed'>
              MyShop is a complete online store built from the ground up — product
              catalog, cart, checkout, and order tracking, all in one place. Users can
              browse by category, filter and sort products, add items to a persistent
              cart, and check out securely with real-time order status updates. I
              designed the product schema to support variants like size and color
              without duplicating listings, and built a search experience that stays
              fast even with a large catalog by indexing on the fields users actually
              filter by. The cart state syncs between local storage and the backend so
              nothing is lost on refresh or across devices. On the business side,
              there's a seller dashboard for adding products, managing stock levels,
              and viewing sales — built so a non-technical shop owner could run it day
              to day without help.
            </p>
            <div className='flex flex-wrap gap-3 pt-2 mt-auto'>
              <span className='bg-blue-200/20 text-xs px-3 py-1 rounded-lg'>MongoDB</span>
              <span className='bg-blue-200/20 text-xs px-3 py-1 rounded-lg'>Express</span>
              <span className='bg-blue-200/20 text-xs px-3 py-1 rounded-lg'>React</span>
              <span className='bg-blue-200/20 text-xs px-3 py-1 rounded-lg'>Node.js</span>
              <span className='bg-blue-200/20 text-xs px-3 py-1 rounded-lg'>Tailwind</span>
            </div>
            <Link to='' className='text-blue-500 text-sm font-medium pt-3 inline-block hover:underline'>
              View Project →
            </Link>
          </div>
        </div>

        {/* Card 3 */}
        <div className='flex flex-col border-2 border-blue-800/40 bg-blue-500/5 rounded-2xl shadow-lg shadow-blue-500/10 overflow-hidden hover:shadow-blue-500/30 transition'>
          <img src={job} className='w-full h-48 sm:h-52 object-cover' alt='JobBoard project' />
          <div className='p-6 flex flex-col gap-3 font-["Poppins"] text-white flex-1'>
            <p className='text-blue-500 text-sm uppercase tracking-wide'>Job Portal</p>
            <p className='text-2xl font-semibold'>JobBoard</p>
            <p className='text-gray-300 text-sm leading-relaxed'>
              JobBoard connects job seekers with employers through a clean, two-sided
              platform. Seekers can create a profile, upload a resume, search
              openings by role or location, and track every application's status in
              one place. Employers get a posting dashboard where they can list
              openings, review incoming applications, shortlist candidates, and
              message them directly without leaving the platform. I paid close
              attention to the matching experience — filters that actually narrow
              results meaningfully, and a saved-search feature that notifies
              candidates when a matching role goes live. Applications are tracked
              through a status pipeline (applied → shortlisted → interview →
              hired/rejected) so both sides always know where things stand, which was
              the biggest gap I noticed in existing job boards.
            </p>
            <div className='flex flex-wrap gap-3 pt-2 mt-auto'>
              <span className='bg-blue-200/20 text-xs px-3 py-1 rounded-lg'>MongoDB</span>
              <span className='bg-blue-200/20 text-xs px-3 py-1 rounded-lg'>Express</span>
              <span className='bg-blue-200/20 text-xs px-3 py-1 rounded-lg'>React</span>
              <span className='bg-blue-200/20 text-xs px-3 py-1 rounded-lg'>Node.js</span>
              <span className='bg-blue-200/20 text-xs px-3 py-1 rounded-lg'>Tailwind</span>
            </div>
            <Link to='' className='text-blue-500 text-sm font-medium pt-3 inline-block hover:underline'>
              View Project →
            </Link>
          </div>
        </div>
    
      </div>
      <hr className='border-2 border-white'/>
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

export default Project