import React from "react";
import "./App.css";
import Particle from "./components/Particle";
import pfp from "./PFP.jpg";

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
      <section>
        <h1 className="my_name">Thomas Griffin</h1>
      </section>
      <div className="biography">
        <h1>ABOUT ME</h1>
        <img src={pfp} alt="Thomas Griffin" />
        <p></p>
      </div>
      <section>
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
