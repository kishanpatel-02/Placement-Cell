import React from 'react'
import { useState } from 'react';
import classes from './StudentSignupForm.module.css'
import Button from '@mui/material/Button';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom';

const CompanySignupForm = () => {

    const [companydata, setCompanyData] = useState([])
    const [inputvalues, setInputValues] = useState({
        HRemail: '',
        password: '',
        companyname: '',
        contactno: '',
        companylogo: '',
        aboutcompany: ''
    });
    const [isSubmitted, setisSubmitted] = React.useState(false);

    const handleOnChange = event => {
        const target = event.currentTarget

        setInputValues({
            ...inputvalues,
            [target.name]: target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        const newObj = {
            HRemail: inputvalues.HRemail,
            password: inputvalues.password,
            companyname: inputvalues.companyname,
            contactno: inputvalues.contactno,
            companylogo: inputvalues.companylogo,
            aboutcompany: inputvalues.aboutcompany
        }
        setCompanyData([...companydata, newObj])
        console.log(companydata)
        setisSubmitted(true);
        setInputValues({
            HRemail: '',
            password: '',
            companyname: '',
            contactno: '',
            companylogo: '',
            aboutcompany: ''
        })
    }
    return (
        <>
            <Header /><form className={classes.form} onSubmit={handleSubmit}>
                <h2 className={classes.formtitle}> COMPANYS DETAILS</h2>
                <div className={classes.form_containers}>
                    <div className={classes.label_div}>
                        <label htmlFor="fname">HR Email</label>
                        <input onChange={handleOnChange} type='email' name='HRemail' className={classes.inputtext} required />
                    </div>
                    <div className={classes.label_div}>
                        <label htmlFor="fname">Password</label>
                        <input onChange={handleOnChange} type='password' name='password' className={classes.inputtext} required />
                    </div>
                </div>
                <div className={classes.form_containers}>
                    <div className={classes.label_div}>
                        <label htmlFor="fname">Company Name</label>
                        <input onChange={handleOnChange} type='text' name='companyname' className={classes.inputtext} required />
                    </div>
                    <div className={classes.label_div}>
                        <label htmlFor="fname">Contact No.</label>
                        <input onChange={handleOnChange} type='text' name='contactno' className={classes.inputtext} required />
                    </div>
                </div>
                <div className={classes.label_div} style={{ marginBottom: '5%' }}>
                    <label htmlFor="fname">Company Logo</label>
                    <input onChange={handleOnChange} type='file' name='companylogo' />
                </div>
                <div className={classes.form_containers}>
                    <div className={classes.label_div}>
                        <label htmlFor="fname">About Company</label>
                        <input onChange={handleOnChange} type='text' name='aboutcompany' className={classes.inputtext} required />
                    </div>
                </div>
                <Link to='/Company' ><Button variant="contained" style={{ width: '200px', height: '50px', borderRadius: '20px', marginLeft: '35%', marginTop: '5%' }} type='submit' >Register</Button></Link>

            </form>
            <Footer />

        </>

    )
}

export default CompanySignupForm