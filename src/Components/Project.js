import React from "react";
import { Link } from "react-router-dom";



function Project(props) {
  return (
    <div>
      <div className="project">
        <img src={props.data.images} alt="" className="img3" />
        <h2>{props.data.title}</h2>
        <p>
          Skill Used:
          {props.data.skills.map((d) => (
            <span> {d} </span>
          ))}
        </p>
        <Link to={`/projects/${props.data.id}`}>Detail</Link>
      </div>
    </div>
  );
}

export default Project;
