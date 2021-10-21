import React from "react";
import profile from "../images/azaz.jpg";
import img1 from "../images/fb.svg";
import img2 from "../images/instagram.png";
import img3 from "../images/twitter.svg";
import img4 from "../images/linkedin.png";
import img5 from "../images/github.png";
import {Link} from 'react-router-dom';
import resume from '../resume/resume.pdf';


function About() {
  return (
    <div className="about">
      <div className="about-section">
        <div className="profile-image">
          <img src={profile} className="pic" />
        </div>
        <div className="about-profile">
          <h1>Azaz Ansari</h1>
          <h3>Front-end developer</h3>
          <p>I build interactive websites that run across platforms and devices.</p>
          <p>
            My abundant energy fuels me in the pursuit of many interests,
            hobbies, areas of study and artistic endeavors. I’m a fast learner,
            able to pick up new skills and juggle different projects and roles
            with relative ease.
          </p>
          <p>
            You can read more about my biography, experience, skills, education
            and much more in the PDF attached below:
          </p>
          <Link to={resume} target="_blank"download>Resume(86 kb)</Link>
        </div>
      </div>
      <div className="social-media">
       <h1>Get in Touch!</h1>
       <a href="https://www.facebook.com/azaz.ansari.39/"><img src={img1} className="icon"/></a> 
       <a href="https://www.instagram.com/azazansari007/"><img src={img2} className="icon"/></a>
       <a href="https://twitter.com/AzazAnsari007"><img src={img3} className="icon"/></a>
       <a href="https://www.linkedin.com/in/azaz-ansari-a006b420a/"><img src={img4} className="icon"/></a>
       <a href="https://github.com/ansariazaz"><img src={img5} className="icon"/></a> 
      </div>
    </div>
  );
}

export default About;
