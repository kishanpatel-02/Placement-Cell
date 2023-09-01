import React from 'react'
import logoimg from './../../images/logo.jpg'
import classes from './AdminHeader.module.css';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logout } from '../../slices/adminSlice';
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handlelogout = (e) => {
        e.preventDefault();
        dispatch(logout());
        navigate('/adminlogin');
    }
    const handlehomelogout = (e) => {
        e.preventDefault();
        dispatch(logout());
        navigate('/');
    }
    return (
        <nav className={classes.header}>
            <div className={classes.img_container}>
                <Link to='/' onClick={(e) => handlehomelogout(e)} style={{textDecoration:'none',marginLeft:'15%'}}><img src={logoimg} className={classes.header_img} alt='' /></Link>
                <Link to='/' onClick={(e) => handlehomelogout(e)} style={{textDecoration:'none',marginTop:'5%',marginLeft:'8%',color:'black'}}><h4 className={classes.logo_text} > Placement Cell</h4></Link>
            </div>
            <div className={classes.header_content}>
                <h5><Link to="/admin" style={{textDecoration:'none',color:'black'}}>Admin Home</Link></h5>
                <h5><Link to="/admincompanylist" style={{textDecoration:'none',color:'black'}}>All COMPANIES</Link></h5>
                <h5 ><Link to="/studentreport" style={{textDecoration:'none',color:'black'}}>All STUDENTS</Link></h5>
                <h5><Link to="/jobreport" style={{textDecoration:'none',color:'black'}}>All Jobs</Link></h5>
                <h5><Link to="/adminlogin" onClick={(e) => handlelogout(e)} style={{textDecoration:'none',color:'black'}}>Log Out</Link></h5>
            </div>
        </nav>
    )
}

export default Header