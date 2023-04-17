import React from "react";
import lostfinder from "../assets/lostfinder.PNG";
import multisteps from "../assets/multishot.PNG";
import todo from "../assets/todoshot.PNG";


export const Projects = () => {
  const projects = [
    {
      name: "Lostfinder",
      detail:
        "This is a website that enables users to report lost or found items. Found items can be returned to the rightful owners and vice-versa.",
      tools: ["React.js", "SASS", "Styled-Components"],
      link: "#",
      image: lostfinder
    },
    {
      name: "Multi-steps Form",
      detail:
        "A game subscription form, with different steps. It shows the summary of your choices at the end.",
      tools: ["React.js", "Redux-toolkit", "Tailwind CSS"],
      link: "https://subscription-form-multi-steps.vercel.app",
      image: multisteps
    },
    {
      name: "Todo",
      detail: "A simple todo application with light and dark themes.",
      tools: ["React.js", "Tailwind CSS", "Redux-Toolkit"],
      link: "https://todo-app-redux-toolkit-opal.vercel.app",
      image: todo
    },
  ];
  return (
    <div id="projects" className="p-12 bg-lightBg">
      <div className="flex items-center content-center gap-4 my-3">
        <div className="w-[50px] h-[4px] bg-body"></div>
        <p className="py-2 font-bold text-white">Skills & Tools</p>
      </div>
      <p className="text-white font-bold text-[18px]">
        Hand-picked projects for you to see.
      </p>

      <div className="flex flex-col gap-[45px] mt-8"  >
        {projects.map(project => (
            <div key={project.image} className="flex flex-col gap-6 text-white lg:flex-row lg:justify-between" data-aos = "slide-up">
                <div className="flex flex-col gap-2">
                    <h5 className="text-btn font-[900] text-[20px]">{project.name}</h5>
                    <p className="text-gray-300 lg:w-3/4">{project.detail}</p>
                    <p className="border-b-[5px] pb-1 border-b-btn w-fit">Tools</p>
                    <ul>
                        {project.tools.map(item => (
                            <li key={item} className="my-3 text-gray-300">{item}</li>
                        ))}
                    </ul>
                    <a href={project.link} className="bg-btn p-2 cursor-pointer w-[120px]">View Project</a>
                </div>
                <img className="w-[200px] h-[100px] lg:min-w-[300px] lg:w-[300px] lg:h-[150px] rounded-[10px] object-cover" src={project.image} alt="" />
            
                </div>
        ))}
 
      </div>
    </div>
  );
};