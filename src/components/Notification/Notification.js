import React from "react";
import Badge from "../../images/badge (1).png"
import AppIcon from "../../images/app-icon.png"
import {  ArrowRightIcon } from "../Icon/Icon";
import "./Notification.css"
const Notification=()=>{
    const Data=  [
        {
            id:1,
            heading:"Banko.",
            subHeading:'You payment of 49€ has been processed!',
            img:AppIcon,         
        },
        {
            id:2,
            heading:"Banko.",
            subHeading:'You got a new support message!',
            img:AppIcon,         
        },
        {
            id:3,
            heading:"Banko.",
            subHeading:'You payment was declined!',
            img:AppIcon,         
        },
        {
            id:4,
            heading:"Banko.",
            subHeading:'Please verify your payment of 99€!',
            img:AppIcon,         
        },
        {
            id:5,
            heading:"Banko.",
            subHeading:'New account statistics are available!',
            img:AppIcon,         
        },

    ]
    return(
        <div className="container notification-container">
        <div className="notification-info">
            <span className="sub">Notifications</span>
            <h2 className="section-heading"> Stay notified</h2>
            <p className="text-b send-text">
            You payment of 49€ has been processed!
            Banko.
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
            <div className="notification-items">
                <div className="item">
                    <div className="item-img">
                    <img src={Badge} alt="notification-img"/>
                    </div>
                    <p>Malesuada Ipsum</p>
                </div>
                <div className="item">
                    <div className="item-img">
                    <img src={Badge} alt="notification-img"/>
                    </div>
                    <p>Vestibulum</p>
                </div>
                <div className="item">
                    <div className="item-img">
                    <img src={Badge} alt="notification-img"/>
                    </div>
                    <p>Parturient Lorem</p>
                </div>
            </div>
            <div className="noti-btn">
                <button className="btn compare-btn">Compare Cards  <span className="arrow">{ArrowRightIcon}</span></button>
            </div>
        </div>
        <div className="notification-right">
           {
            Data?.map(notified=>{
                return(
                    <div key={notified?.id} className="notified">
                        <img src={notified?.img} alt="notified-img"/>
                        <div className="notified-info">
                            <h6>{notified?.heading}</h6>
                            <p>{notified?.subHeading}</p>
                        </div>
                    </div>
                )
            })
           }
        </div>    
    </div>
    );

}
export default Notification;