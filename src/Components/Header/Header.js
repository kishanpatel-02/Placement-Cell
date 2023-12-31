import React from 'react'
import logoimg from './../../images/logo.jpg'
import classes from './Header.module.css';
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <nav className={classes.header}>
            <div className={classes.img_container}>
                <Link to='/' style={{textDecoration:'none',marginLeft:'15%'}}><img src={logoimg} className={classes.header_img} alt='' /></Link>
                <Link to='/' style={{textDecoration:'none',marginTop:'5%',marginLeft:'8%',color:'black'}}><h4 className={classes.logo_text}> Placement Cell</h4></Link>
            </div>
            <div className={classes.header_content}>
                <h5>ABOUT CELL</h5>
                <Link to="/company" style={{textDecoration:'none',color:'rgb(10, 18, 30,0.75)'}}><h5>FOR COMPANIES</h5></Link>
                <Link to="/student" style={{textDecoration:'none',color:'rgb(10, 18, 30,0.75)'}}><h5 >FOR STUDENTS</h5></Link>
                <Link to="/adminlogin" style={{textDecoration:'none',color:'rgb(10, 18, 30,0.75)'}}><h5>FOR ADMIN</h5></Link>
            </div>
        </nav>
    )
}

export default Header