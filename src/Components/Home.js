import React from "react";
import Navbar from "./Navbar";
import gif from '../images/eat.gif'
import Projects from "./Projects";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="intro">
          <h1> Hello!</h1>
          <h1> I am Azaz.</h1>
          <p>front-end developer.</p>
          <p>I build interactive websites that run across platforms and devices</p>
        </div>
        <div className="gif">
        <img src={gif} alt="loading..." className="eat"/>
        </div>
      </div>
      <Projects/>
    </div>
  );
}

export default Home;
