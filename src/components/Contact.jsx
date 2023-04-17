import React, {useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
import contact from "../assets/contact.svg";
import isEmail from "validator/lib/isEmail";
import {FaGithub, FaLinkedin} from "react-icons/fa"
import { Link } from "react-router-dom";

const Contact = () => {

  const [error, setError] = useState(null)
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const form = useRef();

  const validateForm = (e) => {
    const errorMsg = {};
    if (e.target.user_email.value.length === 0){
   errorMsg.email = "Email cannot be empty."
    }

   else if(!isEmail(e.target.user_email.value)){
      e.target.user_email.value = ""
      errorMsg.email = "Invalid email!"
    }

     if(e.target.user_name.value.length === 0){
      errorMsg.name = "Name cannot be empty."
    }
    if(e.target.organization.value.length === 0){
      errorMsg.organization = "Organization cannot be empty."
    }
    if(e.target.message.value.length === 0){
      errorMsg.message = "Message cannot be empty."
    }

    setError(errorMsg)

    if(Object.keys(errorMsg).length === 0) {
      emailjs
      .sendForm(
        "service_mw7rs9q",
        "template_vjlt0rs",
        form.current,
        "ILsnYKeXg6__nISQH"
      )
      .then(
        (result) => {
          swal("Success", "Message sent", "success", {
            button: "Close",
          });
        },
        (error) => {
          swal("error", "Something went wrong.", "error");
        }
      );
    }

  };

  const sendEmail = (e) => {
    e.preventDefault();
    validateForm(e)
  };
  return (
    <div className="p-12 bg-background relative">
      <div className="flex items-center content-center gap-4 mt-3">
        <div className="w-[50px] h-[4px] bg-body"></div>
        <p className="py-2 font-bold text-white">Contact me</p>
      </div>
      <div className="justify-between lg:flex" data-aos="flip-up">
        <form onSubmit={sendEmail} ref={form}>
          <label className="block mb-2 text-sm text-white" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="user_name"
            placeholder={error?.name}
            className="p-2 outline-none focus:border
             focus:border-body rounded-md w-[100%] lg:w-[350px]
             placeholder:text-redCol font-bodyFont placeholder:font-bodyFont"
          />
          <label className="block mb-2 text-sm text-white" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="user_email"
            placeholder={error?.email}
            className="p-2 outline-none focus:border focus:border-body rounded-md w-[100%] lg:w-[350px]
            placeholder:text-redCol font-bodyFont placeholder:font-bodyFont"
          />
          <label
            className="block mb-2 text-sm text-white"
            htmlFor="organization"
          >
            Organization
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            placeholder={error?.organization}
            className="p-2 outline-none focus:border focus:border-body rounded-md w-[100%] lg:w-[350px]
            placeholder:text-redCol font-bodyFont placeholder:font-bodyFont"
            
          />
          <label className="block mb-2 text-sm text-white" htmlFor="message">
            Message
          </label>
          <textarea
          name="message"
          placeholder={error?.message}
            rows={5}
            className="p-2 w-[100%] lg:w-[350px] outline-none  focus:border focus:border-body rounded-md
            placeholder:text-redCol font-bodyFont placeholder:font-bodyFont"
          />

          <button className="bg-btn outline-none p-2 rounded-md text-white w-[100%] lg:w-[350px] lg:block  hover:bg-body cursor-pointer mt-3">
            Send Message
          </button>
        </form>

        <img src={contact} alt="" className="hidden lg:block w-[40%]" />
      </div>
<div className="flex flex-col gap-4 absolute left-2 bottom-[50%] cursor-pointer " data-aos = "flip-up">
  
    <a href = "https://github.com/Highshirt99" className='text-white text-[20px] hover:text-body' >  <FaGithub/> </a>
    <a href = "https:/linkedin.com/in/aishatomololaakinyemi" className="text-white text-[20px] w-4 hover:text-body">  <FaLinkedin/> </a>
</div>

    </div>
  );
};

export default Contact;
