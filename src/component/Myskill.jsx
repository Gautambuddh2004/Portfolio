import React from 'react'
import landing3 from '../assets/landing3.png'
import html from '../assets/html.png'
import css from '../assets/css-3.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import node from '../assets/nodejs.png'
import git from '../assets/git.png'
import boot from '../assets/bootstrap.png'
import excel from '../assets/sheets.png'
import sql from '../assets/database.png'
import python from '../assets/python.png'
import power from '../assets/powerbi.png'
import tableua from '../assets/tableua.png'


function Myskill() {
  return (
    <div>
               <div className="bg-cover bg-center h-auto sm:h-auto md:h-120 font-['Poppins'] font-semibold text-white"
                  style={{ backgroundImage:  `url(${landing3})`  }}>
        
                    <div className='w-full sm:w-full md:w-280 pt-10 pl-5 sm:pl-8 md:pl-10 pr-5'>
                        <p className=' text-blue-600 text-lg'>MY SKILLS</p>
                        <p className='text-3xl sm:text-3xl md:text-4xl text-white pt-3'>Technologies I work with</p>
                        <p className='text-blue-600 text-lg pt-3'>Web Developer →</p>
                        <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-y-6 p-5'>
                            <div className='text-white flex flex-col items-center gap-2'>
                                <img className='h-10 w-10 object-contain' src={html}/>
                                <p className='text-sm text-center'>HTML</p>
                            </div>

                            <div className='text-white flex flex-col items-center gap-2'>
                                <img className='h-10 w-10 object-contain' src={css}/>
                                <p className='text-sm text-center'>CSS</p>
                            </div>

                            <div className='text-white flex flex-col items-center gap-2'>
                                <img className='h-10 w-10 object-contain' src={js}/>
                                <p className='text-sm text-center'>Js</p>
                            </div>

                            <div className='text-white flex flex-col items-center gap-2'>
                                <img className='h-10 w-10 object-contain' src={react}/>
                                <p className='text-sm text-center'>REACT</p>
                            </div>

                            <div className='text-white flex flex-col items-center gap-2'>
                                <img className='h-10 w-10 object-contain' src={node}/>
                                <p className='text-sm text-center'>NODE.JS</p>
                            </div>
                            <div className='text-white flex flex-col items-center gap-2'>
                                <img className='h-10 w-10 object-contain' src={git}/>
                                <p className='text-sm text-center'>Git & Github</p>
                            </div>
                            
                            <div className='text-white flex flex-col items-center gap-2'>
                                <img className='h-10 w-10 object-contain' src={boot}/>
                                <p className='text-sm text-center'>Bootstrap</p>
                            </div>
                       </div>
                       
                      <p className='pt-5 text-blue-600 text-lg '>Data Analytic →</p>
                      <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-y-6 p-5'>
                          <div className='text-white flex flex-col items-center gap-2'>
                                <img className='h-10 w-10 object-contain' src={excel}/>
                                <p className='text-sm text-center'>Excel</p>
                            </div>

                          <div className='text-white flex flex-col items-center gap-2'>
                                <img className='h-10 w-10 object-contain' src={sql}/>
                                <p className='text-sm text-center'>SQL</p>
                            </div>

                          <div className='text-white flex flex-col items-center gap-2'>
                                <img className='h-10 w-10 object-contain' src={python}/>
                                <p className='text-sm text-center'>Python</p>
                            </div>

                          <div className='text-white flex flex-col items-center gap-2'>
                                <img className='h-10 w-10 object-contain' src={power}/>
                                <p className='text-sm text-center'>PowerBi</p>
                            </div>

                          <div className='text-white flex flex-col items-center gap-2'>
                                <img className='h-10 w-10 object-contain' src={tableua}/>
                                <p className='text-sm text-center'>Tableau</p>
                            </div>
                      </div>
                    <p className='w-full sm:w-full md:w-250 pt-5 text-lg'>Passionate about building modern web applications and transforming data into actionable insights through clean code, interactive dashboards, and user-focused design.</p>
                    
                  </div>
                </div>

    </div>
  )
}

export default Myskill