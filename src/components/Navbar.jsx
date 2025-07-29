import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  // const [] // This line is commented out and can be removed if not used

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          <img className='w-9 object-contain' src={logo} alt="" />
          {/* Changed text from "react developer" to "Full-stack developer" */}
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>Ishant &nbsp; <span className='sm:block hidden'>| Full-stack developer</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) =>
          (
            <li key={link.id} className={` ${active === link.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] cursor-pointer font-medium`} onClick={() => setActive(link.title)}><a href={`#${link.id}`}>{link.title}</a></li>
          )
          )}
        </ul>
        
        <div className='sm:hidden flex flex-1 items-center justify-end'>
          <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() =>
            setToggle(!toggle)
          } />
          <div
            className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 max-w-[140px] mx-4 my-2 z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 gap-5 flex-col'>
              {navLinks.map((link) =>
              (
                <li key={link.id} className={` ${active === link.title ? 'text-white' : 'text-secondary'
                  } font-poppins text-[16px] cursor-pointer font-medium`} onClick={() => {
                    setActive(link.title)
                    setToggle(!toggle)
                  }}><a href={`#${link.id}`}>{link.title}</a></li>
              )
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
