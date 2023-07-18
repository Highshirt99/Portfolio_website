import React, {useEffect} from 'react'
import {FaCss3, FaGitAlt, FaHtml5, FaJs, FaReact, FaSass} from "react-icons/fa"
import { SiTypescript, SiTailwindcss} from "react-icons/si"
import {TbBrandFirebase, TbBrandNextjs} from "react-icons/tb"
import AOS from 'aos'
import "aos/dist/aos.css"



const Skills = () => {
  useEffect(() => {
    AOS.init({duration:2000});
    
  }, [])
  return (
    <div className='p-[2rem] lg:p-[6rem]  bg-background' id = "skills">
                <div className="flex items-center content-center gap-4 mb-8">
              <div className="w-[50px] h-[4px] bg-body"></div>
              <p   className="py-2 font-bold text-white">Skills & Tools</p>
              
          </div>

          <ul className='flex flex-wrap items-center justify-center gap-3 text-black lg:gap-5'  data-aos = "slide-up">
            <li className='list' data-aos = "zoom-in"><FaHtml5 className='text-[2rem] text-html'/> HTML</li>
            <li className='list' data-aos = "zoom-in"> <FaCss3  className='text-[2rem] text-css'/> CSS</li>
            <li className='list' data-aos = "zoom-in"><SiTailwindcss  className='text-[2rem] text-blue-400'/>Tailwind CSS</li>
            <li className='list' data-aos = "zoom-in"> <FaSass  className='text-[2rem] text-sass'/>SASS</li>
            <li className='list' data-aos = "zoom-in"> <FaJs  className='text-[2rem] text-js'/>JavaScript</li>
            <li className='list' data-aos = "zoom-in"> <FaReact  className='text-[2rem] text-react'/> React.js</li>
            <li className='list' data-aos = "zoom-in"><SiTypescript  className='text-[2rem] text-ts'/>TypeScript</li>
            <li className='list' data-aos = "zoom-in"><TbBrandNextjs  className='text-[2rem] text-black'/>Next.js</li>
            <li className='list' data-aos = "zoom-in"><TbBrandFirebase  className='text-[2rem] text-yellow-400'/>Firebase</li>
            <li className='list' data-aos = "zoom-in"> <FaGitAlt className='text-[2rem] text-git' />Git & GitHub</li>
          </ul>
    </div>
  )
}

export default Skills
