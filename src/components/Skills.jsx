import React, {useEffect} from 'react'
import {FaCss3, FaGitAlt, FaHtml5, FaJs, FaReact, FaSass} from "react-icons/fa"
import { SiTypescript, SiTailwindcss} from "react-icons/si"
import AOS from 'aos'
import "aos/dist/aos.css"



const Skills = () => {
  useEffect(() => {
    AOS.init({duration:2000});
    
  }, [])
  return (
    <div className='p-12 pb-6 bg-background'>
                <div className="flex content-center items-center gap-4 my-3">
              <div className="w-[50px] h-[4px] bg-body"></div>
              <p   className="text-white font-bold py-2">Skills & Tools</p>
              
          </div>

          <ul className='text-gray-300 grid grid-cols-2 lg:grid-cols-4 gap-6'  data-aos = "slide-up">
            <li className='flex items-center gap-3' data-aos = "zoom-in"><FaHtml5/> HTML</li>
            <li className='flex items-center gap-3' data-aos = "zoom-in"> <FaCss3/> CSS</li>
            <li className='flex items-center gap-3' data-aos = "zoom-in"><SiTailwindcss/>Tailwind CSS</li>
            <li className='flex items-center gap-3' data-aos = "zoom-in"> <FaSass/>SASS</li>
            <li className='flex items-center gap-3' data-aos = "zoom-in"> <FaJs/>JavaScript</li>
            <li className='flex items-center gap-3' data-aos = "zoom-in"> <FaReact/> React.js</li>
            <li className='flex items-center gap-3' data-aos = "zoom-in"><SiTypescript/>TypeScript</li>
            <li className='flex items-center gap-3' data-aos = "zoom-in"> <FaGitAlt/>Git & GitHub</li>
          </ul>
    </div>
  )
}

export default Skills
