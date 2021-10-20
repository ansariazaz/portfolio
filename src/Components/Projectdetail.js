import React from 'react';
import projectData from "../data/projectData";

function Projectdetail() {

    return (
          <div>
            <div className="image">
           </div>
           <div className="description">
           <h2>description:</h2>
           <p>{projectData.description}</p>
           </div>
        </div>
    )

}

export default Projectdetail;

