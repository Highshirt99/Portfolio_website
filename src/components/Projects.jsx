import React from "react";
import lostfinder from "../assets/lostfinder.PNG";
import multisteps from "../assets/multishot.PNG";
import entertainme from "../assets/entertainme.PNG";
import dashboard from "../assets/dashboard.PNG";
import comments from "../assets/comments.PNG";
import jollyplanner from "../assets/jollyplanner.PNG";
import shop from "../assets/shop.PNG";
import kanban from "../assets/kanban.PNG";
import blog from "../assets/blog.PNG";

const Projects = () => {
  const projects = [
    {
      name: "Lostfinder",
      detail:
        "This is a website that enables users to report lost or found items. Found items can be returned to the rightful owners and vice-versa.",
      tools: ["React.js", "SASS", "Styled-Components"],
      link: "https://lostfinder.com.ng",
      image: lostfinder,
    },
    {
      name: "Ehya Blog Site",
      detail:
        `A blog website that has numerous features, such as an admin panel that involves the creation of posts and management of all activities by the admin. Also, uploading pictures, commenting on posts.`,
      tools: [
        "React.js",
        "Tailwind CSS",
        "React-hook-forms",
        "Redux-toolkit",
        "Tanstack query",
      ],
      link: "https://blogitt.vercel.app/",
      image: blog,
    },
    {
      name: "Kanban Task Management Application",
      detail:
        `A task management application that implements the kanban method. It allows users to create, edit, delete and move tasks between columns.
         Switching between light and dark mode  and draggng and dropping are also possible.`,
      tools: [
        "Next.js",
        "Tailwind CSS",
        "React-hook-forms",
        "Redux-toolkit",
        "React-Beautiful-dnd",
      ],
      link: "https://task-management-app-aishat.vercel.app/",
      image: kanban,
    },

    {
      name: "Interactive Comments Section",
      detail:
        "This is a CRUD application that allows users to add, edit, delete and like comments.",
      tools: ["Next.js", "Redux-toolkit", "TypeScript", "Tailwind CSS"],
      link: "https://commentsSection.vercel.app",
      image: comments,
    },
    {
      name: "Entertain-Me",
      detail:
        "This is a website where users can search for movies and tv series, and getting necessary information about them.",
      tools: ["React.js", "Tailwind CSS", "TypeScript"],
      link: "https://entertain-me.vercel.app/",
      image: entertainme,
    },
    {
      name: "Jollyplanner",
      detail:
        "This is a website that enables users to plan their events/activities and share with friends.",
      tools: ["Next.js", "Firebase", "Redux-toolkit", "Tailwind CSS"],
      link: "https://jollyplanner.vercel.app",
      image: jollyplanner,
    },
    {
      name: "Multi-steps Form",
      detail:
        "A game subscription form, with different steps. It shows the summary of your choices at the end.",
      tools: ["React.js", "Redux-toolkit", "Tailwind CSS"],
      link: "https://subscription-form-multi-steps.vercel.app",
      image: multisteps,
    },
    {
      name: "Shopping Cart",
      detail:
        "A responsive react shopping cart, including product catalogue and cart management, amongst other features.",
      tools: ["React.js", "TypeScript", "Context API", "Tailwind CSS"],
      link: "https://react-shopping-cart-rose.vercel.app/",
      image: shop,
    },
    {
      name: "Dashboard",
      detail: "A dashboard created with next.js.",
      tools: ["Next.js", "Tailwind CSS"],
      link: "https://next-js-dashboard-one.vercel.app/",
      image: dashboard,
    }
  ]
  return (
    <div id="projects" className="p-[2rem] lg:p-[6rem] bg-lightBg">
      <div className="flex items-center content-center gap-4 my-3">
        <div className="w-[50px] h-[4px] bg-body"></div>
        <p className="py-2 font-bold text-white">Projects</p>
      </div>
      <p className="text-white font-bold text-[18px]">
        Hand-picked projects for you to see.
      </p>

      <div className="flex flex-col gap-[4rem] mt-8">
        {projects.map((project) => (
          <div
            key={project.image}
            className="flex flex-col gap-[50px] lg:gap-12 text-white lg:flex-row lg:justify-between"
            data-aos="slide-up"
          >
            <div className="flex flex-col gap-2">
              <h5 className="text-btn font-[900] text-[20px]">
                {project.name}
              </h5>
              <p className="text-gray-300 lg:w-3/4">{project.detail}</p>
              <p className="border-b-[5px] pb-1 mt-4 border-b-btn w-fit">
                Tools
              </p>
              <ul>
                {project.tools.map((item) => (
                  <li key={item} className="my-3 text-gray-300">
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={project.link}
                className="bg-btn p-2 cursor-pointer w-[120px]"
              >
                View Project
              </a>
            </div>
            <img
              className="w-[200px]  h-[100px] lg:min-w-[300px] lg:w-[300px] lg:h-[150px] rounded-[10px] object-cover"
              src={project.image}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
