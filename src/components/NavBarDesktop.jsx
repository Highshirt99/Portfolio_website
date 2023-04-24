import React from 'react'
import { options } from './NavLists'
import { Link } from 'react-scroll'

const NavBarDesktop = () => {
  return (
    <div className='hidden lg:block'>
      <ul className='flex items-center justify-center gap-[2rem] '>
        {options.map(item => (
          <li
        >
          <Link
          smooth
          to = {item.link}
            key={item.name} className=' text-white cursor-pointer hover:bg-btn hover:text-lightBg text-[16px]  p-1
            w-[100px] text-center rounded-md'>{item.name}
          </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavBarDesktop