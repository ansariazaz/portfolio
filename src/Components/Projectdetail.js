import React from "react";
import { Link, useParams } from "react-router-dom";
import projectData from "../data/projectData";

function Projectdetail() {
  let { id } = useParams();
  const data = projectData.filter((f) => {
    return f.id == id;
  });
  console.log(data);
  return (
    <div className="proj-det">
      <Link to="/">Back</Link>
      <div className="detail-container">
        <div className="image">
          <img src={data[0].images}  className="det-img"/>
        </div>
        <div className="description">
            <h1>{data[0].title}</h1>
          <h2>description:</h2>
          <p>{data[0].description}</p>
          <p>Skill Used:{data[0].skills.map((d) => (
            <span> {d} </span>
          ))}</p>
          <p> Live Link:<a href={data[0].link}>{data[0].link}</a></p>
        </div>
      </div>
    </div>
  );
}

export default Projectdetail;
