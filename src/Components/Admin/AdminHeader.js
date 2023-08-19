import React from 'react'
import logoimg from './../../images/logo.jpg'
import classes from './AdminHeader.module.css';
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <nav className={classes.header}>
            <div className={classes.img_container}>
                <Link to='/' style={{textDecoration:'none',marginLeft:'15%'}}><img src={logoimg} className={classes.header_img} alt='' /></Link>
                <Link to='/' style={{textDecoration:'none',marginTop:'5%',marginLeft:'8%',color:'black'}}><h4 className={classes.logo_text}> Placement Cell</h4></Link>
            </div>
            <div className={classes.header_content}>
                <h5><Link to="/admin" style={{textDecoration:'none',color:'rgb(10, 18, 30,0.75)'}}>Admin Home</Link></h5>
                <h5><Link to="/admincompanylist" style={{textDecoration:'none',color:'rgb(10, 18, 30,0.75)'}}>All COMPANIES</Link></h5>
                <h5 ><Link to="/adminstudentlist" style={{textDecoration:'none',color:'rgb(10, 18, 30,0.75)'}}>All STUDENTS</Link></h5>
                <h5><Link to="/adminjoblist" style={{textDecoration:'none',color:'rgb(10, 18, 30,0.75)'}}>All Jobs</Link></h5>
            </div>
        </nav>
    )
}

export default Header