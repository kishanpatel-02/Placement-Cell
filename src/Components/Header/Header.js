import React from 'react'
import logoimg from './../../images/logo.jpg'
import './Header.css';


const Header = () => {
    return (
        <nav className='header'>
            <div className='img-container'>
                <img src={logoimg} className='header-img' alt='' />
                <h4 className='logo-text'> Placement Cell</h4>
            </div>
            <div className='header-content'>
                <h5>ABOUT CELL</h5>
                <h5>FOR COMPANIES</h5>
                <h5>FOR STUDENTS</h5>
                <h5>CONTACT</h5>
            </div>
        </nav>
    )
}

export default Header