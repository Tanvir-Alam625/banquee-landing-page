import React from "react";
import "./Banner.css";
import { bannerRightIcon, bannerArrowRightIcon } from "../Icon/Icon";
import Cards from "../../images/cards.png"

const Banner =()=>{
    return(
        <div className="container banner">
            <div className="banner-info">
                <h2 className="banner-heading">
                Banking <br/> Starts Here.
                </h2>
                <p className="text-b">
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                </p>
                <div className="services">
                    <div className="service-item">
                        <div className="service-icon">
                            {bannerRightIcon}
                        </div>
                        <div className="service-info">
                           <p> Instant Trnasfer</p>
                        </div>
                    </div>
                    <div className="service-item">
                        <div className="service-icon">
                            {bannerRightIcon}
                        </div>
                        <div className="service-info">
                            <p>Saving accounts</p>
                        </div>
                    </div>
                    <div className="service-item">
                        <div className="service-icon">
                            {bannerRightIcon}
                        </div>
                        <div className="service-info">
                           <p> Payments worldwide</p>
                        </div>
                    </div>
                    <div className="service-item">
                        <div className="service-icon">
                            {bannerRightIcon}
                        </div>
                        <div className="service-info">
                            <p>100% mobile banking</p>
                        </div>
                    </div>
                </div>
                <div className="banner-btn-container">
                    <button className="btn account-btn">Open Account</button>
                    <button className="btn compare-btn">Compare Cards  <span className="arrow">{bannerArrowRightIcon}</span></button>
                </div>

            </div>
            <div className="banner-img">
                <img className="card-img" src={Cards} alt="card-img"/>
            </div>

        </div>
    );

}
export default Banner;