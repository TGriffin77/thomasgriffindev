import React from "react";

import "./App.css";

import Particle from "./components/Particle";
import PointerDown from "./components/PointerDown";
import ProjectBox from "./components/ProjectBox";

import pfp from "./PFP.jpg";
import py2048 from "./py2048.png";
import thomas from "./ThomasGriffin.png";
import download from "./download.png";

function Hamburger() {
  return (
    <div className="hamburger">
      <input type="checkbox" id="toggle" />
      <label htmlFor="toggle" id="hamburger"></label>
    </div>
  );
}

function SideNav() {
  return (
    <nav className="sidenav">
      {/* Make the nav 30% of the screen, with a minimum of 420px */}
    </nav>
  );
}

function Content() {
  return (
    <div id="content">
      <section className="intro">
        <h1 className="my_name">Thomas Griffin</h1>
      </section>
      <PointerDown />
      <div className="biography">
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
          <ProjectBox
            src={py2048}
            alt="Py-2048"
            link="https://github.com/TGriffin77/Py2048"
            description="A recreation of the famous browser game: 2048 using Python's pygame."
          />
          <ProjectBox
            src={thomas}
            alt="thomasgriffin.dev"
            link="https://github.com/TGriffin77/thomasgriffindev"
            description="My online portfolio website created using Typescript and React.js"
          />
          <ProjectBox
            src={py2048}
            alt="Py-2048"
            link="https://github.com/TGriffin77/Py2048"
            description="A recreation of the famous browser game: 2048 using Python's pygame."
          />
          <ProjectBox
            src={thomas}
            alt="thomasgriffin.dev"
            link="https://github.com/TGriffin77/thomasgriffindev"
            description="My online portfolio website created using Typescript and React.js"
          />
          <ProjectBox
            src={py2048}
            alt="Py-2048"
            link="https://github.com/TGriffin77/Py2048"
            description="A recreation of the famous browser game: 2048 using Python's pygame."
          />
          <ProjectBox
            src={thomas}
            alt="thomasgriffin.dev"
            link="https://github.com/TGriffin77/thomasgriffindev"
            description="My online portfolio website created using Typescript and React.js"
          />
          <ProjectBox
            src={py2048}
            alt="Py-2048"
            link="https://github.com/TGriffin77/Py2048"
            description="A recreation of the famous browser game: 2048 using Python's pygame."
          />
          <ProjectBox
            src={thomas}
            alt="thomasgriffin.dev"
            link="https://github.com/TGriffin77/thomasgriffindev"
            description="My online portfolio website created using Typescript and React.js"
          />
        </div>
        <a id="resume" href="/Resume_Thomas_Griffin.pdf" download>
          Resume
          <img src={download} alt=""></img>
        </a>
      </section>
      <div className="biography">
        <h1>CAREER</h1>
        <p id="career">
          Currently, I am a student attending Florida Polytechnic University
          studying Computer Science with a concentration in software
          engineering. Software Engineering jobs are jobs that I am mainly after
          when looking for work. I am mainly interested in developing systems
          and software to help me and possibly others with everyday life
          problems. I have also been interested in the artificial intelligence
          scene and have been studying it to incorporate it into my own
          skillset. As a student, my main goal is to acquire a knowledge of the
          work that a software engineer must do in the real world. I wish to
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
      <section></section>
    </div>
  );
}

function App() {
  return (
    <div>
      <Hamburger />
      <SideNav />
      <Content />
      <Particle />
    </div>
  );
}

export default App;
