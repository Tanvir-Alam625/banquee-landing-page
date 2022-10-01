import React from "react";
import './OurTools.css';
import logo1 from "../../images/logo.png"
import logo2 from "../../images/logo (1).png"
import logo3 from "../../images/logo (2).png"
import logo4 from "../../images/logo (3).png"
import logo5 from "../../images/logo (4).png"
import logo6 from "../../images/logo (5).png"
import logo7 from "../../images/logo (6).png"
import logo8 from "../../images/logo (7).png"
import logo9 from "../../images/logo (8).png"
import logo10 from "../../images/logo (9).png"


const OurTools =()=>{

    return(
        <div className="container tools">
            <div className="first-column">
                <img src={logo1} alt="logo-img"/>
                <img src={logo2} alt="logo-img"/>
                <img src={logo3} alt="logo-img"/>
                <img src={logo4} alt="logo-img"/>
            </div>
            <div className="second-column">
                <img src={logo5} alt="logo-img"/>
                <img src={logo6} alt="logo-img"/>
                <img src={logo7} alt="logo-img"/>
                <img src={logo8} alt="logo-img"/>
                <img src={logo9} alt="logo-img"/>
                <img src={logo10} alt="logo-img"/>
            </div>
        </div>
    );

}
export default OurTools;