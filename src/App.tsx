import React from "react";
import "./App.css";
import Particle from "./components/Particle";
import pfp from "./PFP.jpg";
import PointerDown from "./components/PointerDown";

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
        <p>
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
        <div className="projects-container"></div>
      </section>
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
