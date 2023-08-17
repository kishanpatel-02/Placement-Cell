import React from 'react'
import { useState } from 'react';
import classes from './StudentSignupForm.module.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom';
const StudentSIgnupForm = () => {

    const [programme, setProgramme] = React.useState('Choose');
    const handleChange = (event) => {
        setProgramme(event.target.value);
    };

    const [studentdata, setStudentData] = useState([])
    const [inputvalues, setInputValues] = useState({
        email: '',
        password: '',
        name: '',
        rollno: '',
        profilepic: '',
        mobileno: '',
        backlogs: '',
        cpi: '',
        about: '',
        programme: '',
        branch: ''
    });

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
            email: inputvalues.email,
            password: inputvalues.password,
            name: inputvalues.name,
            rollno: inputvalues.rollno,
            profilepic: inputvalues.profilepic,
            mobileno: inputvalues.mobileno,
            backlogs: inputvalues.backlogs,
            cpi: inputvalues.cpi,
            about: inputvalues.about,
            programme: inputvalues.programme,
            branch: inputvalues.branch
        }
        setStudentData([...studentdata, newObj])
        setInputValues({
            email: '',
            password: '',
            name: '',
            rollno: '',
            profilepic: '',
            mobileno: '',
            backlogs: '',
            cpi: '',
            about: '',
            programme: '',
            branch: ''
        })
    }
    return (
        <>
            <Header /><form className={classes.form} onSubmit={handleSubmit}>
                <h2 className={classes.formtitle}> STUDENTS DETAILS</h2>
                <div className={classes.form_containers}>
                    <div className={classes.label_div}>
                        <label htmlFor="fname">College Email Id</label>
                        <input onChange={handleOnChange} type='email' name='clgemailid' className={classes.inputtext} required />
                    </div>
                    <div className={classes.label_div}>
                        <label htmlFor="fname">Password</label>
                        <input onChange={handleOnChange} type='password' name='password' className={classes.inputtext} required />
                    </div>
                </div>
                <div className={classes.form_containers}>
                    <div className={classes.label_div}>
                        <label htmlFor="fname">Full Name</label>
                        <input onChange={handleOnChange} type='text' name='name' className={classes.inputtext} required />
                    </div>
                    <div className={classes.label_div}>
                        <label htmlFor="fname">Roll No</label>
                        <input onChange={handleOnChange} type='text' name='rollno' className={classes.inputtext} required />
                    </div>
                </div>
                <div className={classes.label_div} style={{ marginBottom: '5%' }}>
                    <label htmlFor="fname">Profile Pic</label>
                    <input onChange={handleOnChange} type='file' name='profilepic' />
                </div>
                <div className={classes.form_containers}>
                    <div className={classes.label_div}>
                        <label htmlFor="fname">Mobile No.</label>
                        <input onChange={handleOnChange} type='text' name='mobileno' className={classes.inputtext} required />
                    </div>
                    <div className={classes.label_div}>
                        <label htmlFor="fname">Active Backlogs</label>
                        <input onChange={handleOnChange} type='text' name='backlogs' className={classes.inputtext} required />
                    </div>
                </div>
                <div className={classes.form_containers}>
                    <div className={classes.label_div}>
                        <label htmlFor="fname">CPI</label>
                        <input onChange={handleOnChange} type='text' name='cpi' className={classes.inputtext} required />
                    </div>
                    <div className={classes.label_div}>
                        <label htmlFor="fname">About Yourself</label>
                        <input onChange={handleOnChange} type='text' name='about' className={classes.inputtext} required />
                    </div>
                </div>

                <div className={classes.form_containers}>
                    <div className={classes.label_div}>
                        <InputLabel id="demo-simple-select-label" className={classes.muiinput}>Programme</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={programme}
                            label="Programme"
                            onChange={handleChange}
                            className={classes.select}
                            required
                            name='programme'
                        >
                            <MenuItem value={10}>B.Tech</MenuItem>
                            <MenuItem value={20}>M.Tech</MenuItem>
                            <MenuItem value={30}>PHD</MenuItem>
                            <MenuItem value={30}>B.Des</MenuItem>
                        </Select>
                    </div>
                    <div className={classes.label_div}>
                        <label htmlFor="fname">Discipline</label>
                        <input onChange={handleOnChange} type='text' name='discipline' className={classes.inputtext} required />
                    </div>
                </div>
                <Link to='/Student' ><Button variant="contained" style={{ width: '200px', height: '50px', borderRadius: '20px', marginLeft: '35%', marginTop: '5%' }} type='submit' >Register</Button></Link>

            </form>
            <Footer />
        </>


    )
}

export default StudentSIgnupForm