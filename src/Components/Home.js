import React from "react";
import gif from '../images/eat.gif'
import Projects from "./Projects";

function Home() {
  return (
    <div>
      <div className="container">
        <div className="intro">
          <h1> Hello!</h1>
          <h2> I am Azaz.</h2>
          <h3>front-end developer.</h3>
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
