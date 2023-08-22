import React from 'react'
import { useState } from 'react';
import classes from './StudentSignupForm.module.css'
import Button from '@mui/material/Button';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { useNavigate } from 'react-router-dom';
const CompanySignupForm = () => {
    const navigate = useNavigate();
    const [inputvalues, setInputValues] = useState({
        HRemail: '',
        password: '',
        companyname: '',
        contactno: '',
        companylogo: '',
        aboutcompany: ''
    });

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
        const isvalidcontactno = inputvalues.contactno.length === 10;
        if (isvalidcontactno) {
            navigate('/company');
            setInputValues({
                HRemail: '',
                password: '',
                companyname: '',
                contactno: '',
                companylogo: '',
                aboutcompany: ''
            })
        } else {
            alert("Please enter valid contact number")
            setInputValues({
                contactno: '',
            })
        }

    }
    return (
        <>
            <Header /><form className={classes.form} onSubmit={handleSubmit}>
                <h2 className={classes.formtitle}> COMPANYS DETAILS</h2>
                <div className={classes.form_containers}>
                    <div className={classes.label_div}>
                        <label htmlFor="fname">HR Email</label>
                        <input onChange={(e) => { setInputValues({ ...inputvalues, HRemail: e.target.value }) }} value={inputvalues.HRemail} type='email' name='HRemail' className={classes.inputtext} required />
                    </div>
                    <div className={classes.label_div}>
                        <label htmlFor="fname">Password</label>
                        <input onChange={(e) => { setInputValues({ ...inputvalues, password: e.target.value }) }} value={inputvalues.password} type='password' name='password' className={classes.inputtext} required />
                    </div>
                </div>
                <div className={classes.form_containers}>
                    <div className={classes.label_div}>
                        <label htmlFor="fname">Company Name</label>
                        <input onChange={(e) => { setInputValues({ ...inputvalues, companyname: e.target.value }) }} value={inputvalues.companyname} type='text' name='companyname' className={classes.inputtext} required />
                    </div>
                    <div className={classes.label_div}>
                        <label htmlFor="fname">Contact No.</label>
                        <input onChange={(e) => { setInputValues({ ...inputvalues, contactno: e.target.value }) }} value={inputvalues.contactno} type='text' name='contactno' className={classes.inputtext} required />
                    </div>
                </div>
                <div className={classes.label_div} style={{ marginBottom: '5%' }}>
                    <label htmlFor="fname">Company Logo</label>
                    <input onChange={(e) => { setInputValues({ ...inputvalues, companylogo: e.target.value }) }} value={inputvalues.companylogo} type='file' name='companylogo' />
                </div>
                <div className={classes.form_containers}>
                    <div className={classes.label_div}>
                        <label htmlFor="fname">About Company</label>
                        <input onChange={(e) => { setInputValues({ ...inputvalues, aboutcompany: e.target.value }) }} value={inputvalues.aboutcompany} type='text' name='aboutcompany' className={classes.inputtext} required />
                    </div>
                </div>
                <Button variant="contained" style={{ width: '200px', height: '50px', borderRadius: '20px', marginLeft: '35%', marginTop: '5%' }} type='submit' >Register</Button>

            </form>
            <Footer />

        </>

    )
}

export default CompanySignupForm