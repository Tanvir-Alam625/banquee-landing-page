import React from "react";
import "./SendMoney.css";
import SendBadge from "../../images/send-badge.png"
import RangeBadge from "../../images/range-badge.png"
const SendMoney=()=>{
    const allRandeData=  [
        {
            id:1,
            heading:"Apple",
            subHeading:'Macbook',
            img:RangeBadge,
            price:-999           
        },
        {
            id:2,
            heading:"Amazon",
            subHeading:'Electronics',
            img:RangeBadge,
            price:-49           
        },
        {
            id:3,
            heading:"Twitter",
            subHeading:'Ads',
            img:RangeBadge,
            price:-29           
        },
        {
            id:4,
            heading:"Microsoft",
            subHeading:'Office Suite',
            img:RangeBadge,
            price:-149           
        },
        {
            id:5,
            heading:"Dropbox",
            subHeading:'Cloud',
            img:RangeBadge,
            price:-14           
        },
        {
            id:6,
            heading:"Paypal",
            subHeading:'Shoping',
            img:RangeBadge,
            price:-200           
        },
        {
            id:7,
            heading:"Apple",
            subHeading:'Macbook',
            img:RangeBadge,
            price:-999           
        },
        {
            id:8,
            heading:"Apple",
            subHeading:'Macbook',
            img:RangeBadge,
            price:-999           
        }

    ]
    return(
        <div className="send-money">
            <div className="container sendMoney-container">
            <div className="sendMoney-info">
                <h2 className="section-heading">Send & receive money instantly</h2>
                <p className="text-b send-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                </p>
                <div className="sendMoney-items">
                    <div className="item">
                        <div className="item-img">
                        <img src={SendBadge} alt="sendmoney-img"/>
                        </div>
                        <p>Malesuada Ipsum</p>
                    </div>
                    <div className="item">
                        <div className="item-img">
                        <img src={SendBadge} alt="sendmoney-img"/>
                        </div>
                        <p>Vestibulum</p>
                    </div>
                    <div className="item">
                        <div className="item-img">
                        <img src={SendBadge} alt="sendmoney-img"/>
                        </div>
                        <p>Parturient Lorem</p>
                    </div>
                </div>

            </div>
            <div className="sendMoney-range">
               {
                allRandeData?.map(range=>{
                    return(
                        <div key={range.id} className="range">
                        <img src={range.img} alt="apple-img"/>
                        <div className="range-info">
                        <div className="range-name">
                            <h6>{range.heading}</h6>
                            <p>{range.subHeading}</p>
                        </div>
                        <span>
                            {range.price}€
                        </span>
                        </div>
                    </div>
                    )
                })
               }
            </div>          
        </div>
        </div>
    );

}
export default SendMoney;