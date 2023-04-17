import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import { Projects } from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen  font-bodyFont">
    <AboutMe/>
    <Skills/>
    <Projects/>
    <Contact/>
    </div>
  );
}

export default App;
