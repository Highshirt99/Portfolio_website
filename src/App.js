import React, {useState} from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import  Projects from "./components/Projects";
import Skills from "./components/Skills";
import { FaBars } from "react-icons/fa";
import NavBar from "./components/Navbar";
import NavBarDesktop from "./components/NavBarDesktop";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="min-h-screen font-bodyFont">
        <div className="bg-lightBg p-[1rem] sticky top-0 z-[100000]">
          <NavBarDesktop/>
      <div className=" text-white cursor-pointer text-[1rem] lg:hidden">
       
          <FaBars onClick={toggleIsOpen} />
      
      </div>
    </div>
    <AboutMe/>
    <Skills/>
    <Projects/>
    <Contact/>
    {  isOpen && <NavBar handleClose = {toggleIsOpen}/>}
    </div>
  );
}

export default App;
