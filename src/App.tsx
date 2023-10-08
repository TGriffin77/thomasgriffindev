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
      <div className="biography" id="aboutme">
        <h1>ABOUT ME</h1>

        <img src={pfp} alt="Thomas Griffin" />
        <p id="bio">
          I was born and raised in the Garden State: New Jersey! I have moved
          once I turned 18 and currently reside in Northern Florida with my
          family. I am attending Florida Polytechnic University to receive my
          Bachelor of Science in Computer Science. I always find myself trying
          to fix and automate many of the problems I have in my life with
          programming, which is why I chose to pursue further education in
          Computer Science. Programming has been my passion for the past several
          years and I am excited to continue to be so as I learn more through
          school. Although programming takes up majority of my free time, I do
          enjoy a nice adventure and exploring new places that I have never been
          to before. I also enjoy photography and videography, especially when
          out exploring the places that I go. I really wish to someday explore
          the European continent and all of its beautiful geographical features.
        </p>
      </div>
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
      <div className="biography">
        <h1>CAREER</h1>
        <p id="career">
          Currently, I am a student attending Florida Polytechnic University
          studying Computer Science with a concentration in software
          engineering. I also currently am a Teacher's Assistant for Chemistry
          classes and math classes. Software Engineering jobs are jobs that I am
          mainly after when looking for work. I am mainly interested in
          developing systems and software to help me and possibly others with
          everyday life problems. I have also been interested in the artificial
          intelligence scene and have been studying it to incorporate it into my
          own skillset. As a student, my main goal is to acquire a knowledge of
          the work that a software engineer must do in the real world. I wish to
          help significantly within the company I will be employed in and to
          create a foundation for my own personal projects and ventures. My
          overall professional goal for the next ten years is to receive
          certifications in several topics related to computer science and to
          find myself in positions that place me within a leadership role. Some
          skills that I have learnt that may provide useful for my career
          include: Python, Java, JavaScript, HTML and CSS, React, SQL, MongoDB,
          and other OOP languages.
        </p>
      </div>
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
