import React, { useState } from 'react'
import { NavLink,Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-500 font-medium underline underline-offset-8 decoration-2"
      : "text-white font-medium"

  return (
    <div>
        <div className='grid grid-cols-2 md:grid-cols-2 font-["Poppins"] font-bold flex items-center h-20 relative' >
            <div className='pl-5 sm:pl-10 md:pl-40 flex justify-around w-full sm:w-full md:w-80 items-center'>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/20   text-xl    font-bold text-white shadow-lg shadow-blue-500/30">G.
                </div>
              <Link to="/"><p className='text-2xl text-white'>Gautam</p></Link>
            </div>

            {/* desktop links - hidden on small screens */}
            <div className="hidden md:flex justify-center gap-10 w-180 text-base" >
                  <NavLink to="/" className={linkClass}>Home</NavLink>
                  <NavLink to="/project" className={linkClass}>Project</NavLink>
            </div>

            {/* hamburger button - only on small screens */}
            <div className='flex md:hidden justify-end pr-5 sm:pr-10'>
                <button onClick={() => setIsOpen(!isOpen)} className='text-white'>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
       </div>

        {/* mobile dropdown */}
        {isOpen && (
            <div className='flex md:hidden flex-col items-center gap-4 bg-black/80 text-base font-["Poppins"] font-bold py-5'>
                  <NavLink to="/" className={linkClass} onClick={() => setIsOpen(false)}>Home</NavLink>
                  <NavLink to="/project" className={linkClass} onClick={() => setIsOpen(false)}>Project</NavLink>
            </div>
        )}

    </div>
  )
}

export default Navbar