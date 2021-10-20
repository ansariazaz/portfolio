import React from "react";


function Project(props) {
 
  return (
    <div>
      <div className="project">
       <img src={props.data.images} alt="" className="img3" />
        <h2>{props.data.title}</h2>
        <p>
          skill used: 
          {props.data.skills.map(d=>(<span> {d} </span>))}
        </p>
        <button className="detail">Detail</button>
      </div>
    </div>
  );
}

export default Project;
