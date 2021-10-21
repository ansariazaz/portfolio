import React from "react";
import Project from "./Project.js";
import '../index.css';
import projectData from "../data/projectData";


function Projects() {
    
  return (
    <div className="project-container">
     
        <h1>Projects</h1>
        <div className="project-wrap">
            {projectData.map(p=>(<Project data={p} />))}
         </div>
    </div>
  );
}

export default Projects;
