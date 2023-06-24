import React from "react";
import lostfinder from "../assets/lostfinder.PNG";
import multisteps from "../assets/multishot.PNG";
import entertainme from "../assets/entertainme.PNG";
import todo from "../assets/todoshot.PNG";
import dashboard from "../assets/dashboard.PNG";
import comments from "../assets/comments.PNG";


 const Projects = () => {
  const projects = [
    {
      name: "Lostfinder",
      detail:
        "This is a website that enables users to report lost or found items. Found items can be returned to the rightful owners and vice-versa.",
      tools: ["React.js", "SASS", "Styled-Components"],
      link: "https://copycat.com.ng",
      image: lostfinder
    },
    {
      name: "Entertain-Me",
      detail:
        "This is a website where users can search for movies and tv series, and getting necessary information about them.",
      tools: ["React.js", "Tailwind CSS", "TypeScript"],
      link: "https://entertain-me.vercel.app/",
      image: entertainme
    },
    {
      name: "Interactive Comments Section",
      detail:
      "This is a CRUD application that allows users to add, edit, delete and like comments.",
      tools: ["Next.js", "Redux-toolkit", "TypeScript", "Tailwind CSS"],
      link: "https://commentsSection.vercel.app",
      image: comments
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
      name: "Dashboard",
      detail:
        "A dashboard created with next.js.",
      tools: ["Next.js", "Tailwind CSS"],
      link: "https://next-js-dashboard-one.vercel.app/",
      image: dashboard
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
    <div id="projects" className="p-[2rem] lg:p-[6rem] bg-lightBg">
      <div className="flex items-center content-center gap-4 my-3">
        <div className="w-[50px] h-[4px] bg-body"></div>
        <p className="py-2 font-bold text-white">Projects</p>
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

export default Projects;