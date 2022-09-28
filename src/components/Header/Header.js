import React, { useState } from 'react';
import "./Header.css"
const Header =()=>{
    const [dropDwonCompare,setdropDwonCompare]=useState(false)
    const [dropDwonBlog,setdropDwonBlog]=useState(false)
    
    return(
        <header className='header-container'>
            <nav className='nav-menu'>
                <h3 className='nav-logo'>banquee.</h3>
                <ul className='nav-items'>
                    <li className='nav-item'><a className='nav-link' href='#'>Features</a></li>
                    <li  className='nav-item'><a 
                    onMouseOver={()=>setdropDwonCompare(true)} onMouseLeave={()=>setdropDwonCompare(false)} 
                    className='nav-link dropDwon-toggle' href='#'>Compare
                   <svg
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`header-icon ${dropDwonCompare && 'active-icon'}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                    </a>
                    <div className={`dropDwon ${dropDwonCompare && 'active-compare'}`}
                    >
                        <ul className='drop-menu'
                         onMouseOver={()=>setdropDwonCompare(true)} onMouseLeave={()=>setdropDwonCompare(false)}
                        >
                            <li className='drop-item'><a 
                            onMouseOver={()=>setdropDwonCompare(true)} onMouseLeave={()=>setdropDwonCompare(false)}  onClick={()=> setdropDwonCompare(false)}
                            className='drop-link' href='#compare1'>Compare1</a></li>
                            <li className='drop-item'><a
                            onMouseOver={()=>setdropDwonCompare(true)} onMouseLeave={()=>setdropDwonCompare(false)}  onClick={()=> setdropDwonCompare(false)}
                            className='drop-link' href='#compare2'>Compare2</a></li>
                            <li className='drop-item'><a 
                            onMouseOver={()=>setdropDwonCompare(true)} onMouseLeave={()=>setdropDwonCompare(false)}  onClick={()=> setdropDwonCompare(false)}
                            className='drop-link' href='#compare3'>Compare3</a></li>
                            <li className='drop-item'><a 
                            onMouseOver={()=>setdropDwonCompare(true)} onMouseLeave={()=>setdropDwonCompare(false)} onClick={()=> setdropDwonCompare(false)}
                            className='drop-link' href='#compare4'>Compare4</a></li>
                        </ul>
                    </div>
                    </li>
                    <li className='nav-item'><a className='nav-link' href='#'>Support</a></li>
                    <li  className='nav-item'><a 
                    onMouseOver={()=>setdropDwonBlog(true)} onMouseLeave={()=>setdropDwonBlog(false)} 
                    className='nav-link dropDwon-toggle' href='#'>Blog
                   <svg
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`header-icon ${dropDwonBlog && 'active-icon'}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                    </a>
                    <div className={`dropDwon ${dropDwonBlog && 'active-blog'}`}
                    >
                        <ul className='drop-menu'
                         onMouseOver={()=>setdropDwonBlog(true)} onMouseLeave={()=>setdropDwonBlog(false)}
                        >
                            <li className='drop-item'><a 
                            onMouseOver={()=>setdropDwonBlog(true)} onMouseLeave={()=>setdropDwonBlog(false)}  onClick={()=> setdropDwonBlog(false)}
                            className='drop-link' href='#blog1'>Blog1</a></li>
                            <li className='drop-item'><a
                            onMouseOver={()=>setdropDwonBlog(true)} onMouseLeave={()=>setdropDwonBlog(false)}  onClick={()=> setdropDwonBlog(false)}
                            className='drop-link' href='#blog2'>Blog2</a></li>
                            <li className='drop-item'><a 
                            onMouseOver={()=>setdropDwonBlog(true)} onMouseLeave={()=>setdropDwonBlog(false)}  onClick={()=> setdropDwonBlog(false)}
                            className='drop-link' href='#blog3'>Blog3</a></li>
                            <li className='drop-item'><a 
                            onMouseOver={()=>setdropDwonBlog(true)} onMouseLeave={()=>setdropDwonBlog(false)} onClick={()=> setdropDwonBlog(false)}
                            className='drop-link' href='#blog4'>Blog4</a></li>
                        </ul>
                    </div>
                    </li>
                </ul>
                <div className='nav-login'>
                    <button className='btn login-btn'>Login</button>
                    <button className='btn account-btn'>Open Account</button>
                </div>

            </nav>
        </header>
    );
}
export default Header;