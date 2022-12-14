import React from 'react'
import "./Features.css";
import {  ArrowRightIcon } from "../Icon/Icon";
import Features1 from '../../images/Frame 8.png'
import Features2 from '../../images/Frame 8 (1).png'
import Features3 from '../../images/Frame 8 (2).png'
import Features4 from '../../images/Frame 8 (3).png'
import Features5 from '../../images/Frame 8 (4).png'

const Features =()=>{
    const featuresItems = [
        {
            id:1,
            img:Features1,
            name:"New Laptop",
            sub: '400'
        },
        {
            id:2,
            img:Features2,
            name:"Bream bik",
            sub: '200'
        },
        {
            id:3,
            img:Features3,
            name:"Holiday",
            sub: '14000'
        },
        {
            id:4,
            img:Features4,
            name:"Camera",
            sub: '100'
        },
        {
            id:5,
            img:Features5,
        },
    ]
    return (
        <div className='container features'>
            <span className='account-type'>Saving Accounts</span>
            <h2 className='section-heading'>Organize your<br/> money the right way</h2>
            <div className='features-des'>
                <div className='description'>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    </p>
                </div>
                <div className='features-btn'>
                    <button className='btn transparent-btn'>All Features <span>{ArrowRightIcon}</span>
                    </button>
                </div>
            </div>
            <div className='features-items'>
                {
                    featuresItems?.map(feature=> {
                        return (
                            <div className='feature' key={feature.id}>
                                <img src={feature?.img} alt='feature-img'/>
                               {
                                feature.name &&  <h4 className='fetures-name'>{feature?.name}</h4>
                               }
                                {
                                    feature.sub && <p> {feature?.sub}$</p>
                                }
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}
export default Features;