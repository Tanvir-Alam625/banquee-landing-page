import React from 'react';
const Header =()=>{
    return(
        <header className='header-container'>
            <nav className='nav-menu'>
                <h3 className='nav-logo'>banquee.</h3>
                <ul className='nav-items'>
                    <li className='nav-item'><a className='nav-link' href='#'>Features</a></li>
                    <li className='nav-item'><a className='nav-link' href='#'>Compare</a></li>
                    <li className='nav-item'><a className='nav-link' href='#'>Support</a></li>
                    <li className='nav-item'><a className='nav-link' href='#'>Blog</a></li>
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