import React from "react";

import "./App.css";

import Particle from "./components/Particle";
import PointerDown from "./components/PointerDown";
import ProjectBox from "./components/ProjectBox";

import pfp from "./PFP.jpg";
// import py2048 from "./py2048.png";
// import thomas from "./ThomasGriffin.png";
import download from "./download.png";
import resume from "./Thomas_Griffin_Resume.pdf";
import linkedin from "./linkedin.png";

const projectsData = [
  {
    name: "py2048",
    src: "./py2048.png",
    alt: "Py-2048",
    link: "https://github.com/TGriffin77/Py2048",
    description:
      "A recreation of the famous browser game: 2048 using Python's pygame.",
  },
  {
    name: "thomasgriffindev",
    src: "./ThomasGriffin.png",
    alt: "thomasgriffin.dev",
    link: "https://github.com/TGriffin77/thomasgriffindev",
    description:
      "My online portfolio website created using Typescript and React.js",
  },
  {
    name: "US Migration Map",
    src: "./usmig.png",
    alt: "US-Migration-Map",
    link: "https://tgriffin77.github.io/US-Migration-Map/",
    description: "Data visualization of USA Citizen Migrants"
  }
];

function Hamburger() {
  return (
    <div className="hamburger">
      <input type="checkbox" id="toggle" />
      <label htmlFor="toggle" id="hamburger"></label>
    </div>
  );
}

function Content() {
  return (
    <div id="content">
      <section className="intro">
        <h1 className="my_name">Thomas Griffin</h1>
      </section>
      <PointerDown />
      
      <section className="projects">
        <h1>PROJECTS</h1>
        <div className="projects-container">
          {projectsData.map((project) => (
            <ProjectBox
              src={require(`${project.src}`)}
              alt={project.alt}
              link={project.link}
              description={project.description}
            />
          ))}
        </div>
        <a href={resume} download="Thomas_Griffin_Resume.pdf">
          <div id="resume">
            Resume
            <img src={download} alt=""></img>
          </div>
        </a>
      </section>
      
      <section className="contact">
        <h1>CONTACT ME</h1>
        <div className="contact-form">
          <form>
            <label htmlFor="user-name">Name</label>
            <input
              type="text"
              id="user-name"
              name="name"
              placeholder="Enter your name."
            />

            <label htmlFor="user-email">Email</label>
            <input
              type="email"
              id="user-email"
              name="email"
              placeholder="Enter your email address."
            />

            <label htmlFor="user-subject">Subject</label>
            <textarea
              id="user-subject"
              name="subject"
              placeholder="Enter the message you would like to send."
            ></textarea>

            <input type="submit" value="Submit" id="submit"></input>
          </form>
        </div>
        <div className="socials">
          <a
            href="https://www.linkedin.com/in/thomas-griffin-899117252/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="linkedin" id="linkedin" />
          </a>
        </div>
      </section>
    </div>
  );
}

function App() {
  return (
    <div>
      <Hamburger />
      <Content />
      <Particle />
    </div>
  );
}

export default App;
