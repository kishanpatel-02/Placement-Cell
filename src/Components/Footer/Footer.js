import React from 'react'
import classes from './Footer.module.css';
import linkedin from './../../images/footer-linkedin.png'
import facebook from './../../images/footer-facebook.png'

const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.footer_content}>
                <div className={classes.footer_item}>
                    <h3><b>IITK Links</b></h3>
                    <span>
                        <p>IITK Homepage</p>
                        <p>DoAA</p>
                        <p>DoSA</p>
                        <p>Student's Gymkhana</p>
                    </span>
                </div>
                <div className={classes.footer_item}>
                    <h3><b>For Companies</b></h3>
                    <span>
                        <p>Steps-Registration</p>
                        <p>Recruitment Procedure</p>
                        <p>Brochures</p>
                        <p>FAQ's</p>
                    </span>
                </div>
                <div className={classes.footer_item}>
                    <h3><b>For Students</b></h3>
                    <span>
                        <p>Steps-Registration</p>
                        <p>Policy</p>
                        <p>Insights</p>
                        <p>FAQ's</p>'
                    </span>
                </div><div className={classes.footer_item}>
                    <h3><b>Contact</b></h3>
                    <span>
                        <p>IIIT DM Jabalpur</p>
                        <p>Phone no: +91 8849413478</p>
                        <p>Email: kishan292002@gmail.com</p>
                        <p>Student's Gymkhana</p>
                    </span>
                </div>
            </div>
            <div className={classes.footer_links}>
                <img src={linkedin} alt='' className={classes.linkedin_img}/>
                <img src={facebook} alt='' className={classes.facebook_img}/>
                <p className={classes.footer_last}>&copy;Copyright 2023 SPO,Kishan</p>
            </div>
        </div>
    )
}

export default Footer