import React from "react";
import "./AppSection.css";
import Badge from "../../images/badge.png"
import Badge1 from "../../images/badge1.png"
import Badge2 from "../../images/badge2.png"
import Badge3 from "../../images/badge3.png"
import Badge4 from "../../images/badge4.png"
import Badge5 from "../../images/badge5.png"
import AppImg from "../../images/app.jpg"
const AppSection =()=>{
    return(
        <div className="container app-section">
            <div className="app-info">
                <h2 className="section-heading">One App <br/> One Banking</h2>
                <div className="app-items">
                    <div className="app-item">
                        <img src={Badge} alt="badge-img" />
                        <h5>Instant <br/> transactions</h5>
                        <p>
                            Odio euismod lacinia at quis amet purus gravida quis blandit turpis.
                        </p>
                    </div>
                    
                    <div className="app-item">
                        <img src={Badge1} alt="badge-img" />
                        <h5>Saving <br/> accounts</h5>
                        <p>
                            Odio euismod lacinia at quis amet purus gravida quis blandit turpis.
                        </p>
                    </div>
                    <div className="app-item">
                        <img src={Badge2} alt="badge-img" />
                        <h5>Mobile <br/> banking</h5>
                        <p>
                            Odio euismod lacinia at quis amet purus gravida quis blandit turpis.
                        </p>
                    </div>
                    <div className="app-item">
                        <img src={Badge3} alt="badge-img" />
                        <h5>Advanced <br/> statistics</h5>
                        <p>
                            Odio euismod lacinia at quis amet purus gravida quis blandit turpis.
                        </p>
                    </div>
                    <div className="app-item">
                        <img src={Badge4} alt="badge-img" />
                        <h5>Virtuai <br/> cards</h5>
                        <p>
                            Odio euismod lacinia at quis amet purus gravida quis blandit turpis.
                        </p>
                    </div>
                    <div className="app-item">
                        <img src={Badge5} alt="badge-img" />
                        <h5>Contactless <br/> payments</h5>
                        <p>
                            Odio euismod lacinia at quis amet purus gravida quis blandit turpis.
                        </p>
                    </div>
                </div>
            </div>
            <div className="app-img-container">
                <img src={AppImg} alt="app-img" />
            </div>
        </div>
    );
}
export default AppSection;