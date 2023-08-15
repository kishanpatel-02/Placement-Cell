import React from 'react'
import logoimg from './../../images/logo.jpg'
import classes from './Header.module.css';
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <nav className={classes.header}>
            <div className={classes.img_container}>
                <img src={logoimg} className={classes.header_img} alt='' />
                <h4 className={classes.logo_text}> Placement Cell</h4>
            </div>
            <div className={classes.header_content}>
                <h5>ABOUT CELL</h5>
                <h5>FOR COMPANIES</h5>
                <h5 ><Link to="/student" style={{textDecoration:'none',color:'rgb(10, 18, 30,0.75)'}}>FOR STUDENTS</Link></h5>
                <h5>CONTACT</h5>
            </div>
        </nav>
    )
}

export default Header