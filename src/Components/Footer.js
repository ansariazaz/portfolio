import React from 'react'
import img1 from "../images/fb.svg";
import img2 from "../images/instagram.png";
import img3 from "../images/twitter.svg";
import img4 from "../images/linkedin.png";
import img5 from "../images/github.png";

const Footer = () => {
    return (
        <div className="footer">
            <div className="socialContainer">
                <div className="icons">
                    <a href="https://www.facebook.com/azaz.ansari.39/"><img src={img1} className="icon" /></a>
                    <a href="https://www.instagram.com/azazansari007/"><img src={img2} className="icon" /></a>
                    <a href="https://twitter.com/AzazAnsari007"><img src={img3} className="icon" /></a>
                    <a href="https://www.linkedin.com/in/azaz-ansari-a006b420a/"><img src={img4} className="icon" /></a>
                    <a href="https://github.com/ansariazaz"><img src={img5} className="icon" style={{backgroundColor:"white"}}/></a>
                </div>
            </div>
        </div>
    )
}

export default Footer
