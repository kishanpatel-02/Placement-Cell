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
        clgemailid: '',
        password: '',
        name: '',
        rollno: '',
        profilepic: '',
        mobileno: '',
        backlogs: '',
        cpi: '',
        about: '',
        branch: ''
    });

    const handleSubmit = event => {
        event.preventDefault()
        const newObj = {
            clgemailid: inputvalues.clgemailid,
            password: inputvalues.password,
            name: inputvalues.name,
            rollno: inputvalues.rollno,
            profilepic: inputvalues.profilepic,
            mobileno: inputvalues.mobileno,
            backlogs: inputvalues.backlogs,
            cpi: inputvalues.cpi,
            about: inputvalues.about,
            branch: inputvalues.branch
        }
        // console.log(newObj)
        setStudentData([...studentdata, newObj])
        setInputValues({
            clgemailid: '',
            password: '',
            name: '',
            rollno: '',
            profilepic: '',
            mobileno: '',
            backlogs: '',
            cpi: '',
            about: '',
            branch: ''
        })
        // console.log(studentdata)
    }
    return (
        <>
            <Header /><form className={classes.form} onSubmit={handleSubmit}>
                <h2 className={classes.formtitle}> STUDENTS DETAILS</h2>
                <div className={classes.form_containers}>
                    <div className={classes.label_div}>
                        <label htmlFor="fname">College Email Id</label>
                        <input onChange={(e) => { setInputValues({ ...inputvalues, clgemailid: e.target.value }) }} type='email' value={inputvalues.clgemailid} name='clgemailid' className={classes.inputtext} required />
                    </div>
                    <div className={classes.label_div}>
                        <label htmlFor="fname">Password</label>
                        <input onChange={(e) => { setInputValues({ ...inputvalues, password: e.target.value }) }} type='password' value={inputvalues.password} name='password' className={classes.inputtext} required />
                    </div>
                </div>
                <div className={classes.form_containers}>
                    <div className={classes.label_div}>
                        <label htmlFor="fname">Full Name</label>
                        <input onChange={(e) => { setInputValues({ ...inputvalues, name: e.target.value }) }} type='text' value={inputvalues.name} name='name' className={classes.inputtext} required />
                    </div>
                    <div className={classes.label_div}>
                        <label htmlFor="fname">Roll No</label>
                        <input onChange={(e) => { setInputValues({ ...inputvalues, rollno: e.target.value }) }} type='text' value={inputvalues.rollno} name='rollno' className={classes.inputtext} required />
                    </div>
                </div>
                <div className={classes.label_div} style={{ marginBottom: '5%' }}>
                    <label htmlFor="fname">Profile Pic</label>
                    <input onChange={(e) => { setInputValues({ ...inputvalues, profilepic: e.target.value }) }} type='file' value={inputvalues.profilepic} name='profilepic' />
                </div>
                <div className={classes.form_containers}>
                    <div className={classes.label_div}>
                        <label htmlFor="fname">Mobile No.</label>
                        <input onChange={(e) => { setInputValues({ ...inputvalues, mobileno: e.target.value }) }} type='text' value={inputvalues.mobileno} name='mobileno' className={classes.inputtext} required />
                    </div>
                    <div className={classes.label_div}>
                        <label htmlFor="fname">Active Backlogs</label>
                        <input onChange={(e) => { setInputValues({ ...inputvalues, backlogs: e.target.value }) }} type='text' value={inputvalues.backlogs} name='backlogs' className={classes.inputtext} required />
                    </div>
                </div>
                <div className={classes.form_containers}>
                    <div className={classes.label_div}>
                        <label htmlFor="fname">CPI</label>
                        <input onChange={(e) => { setInputValues({ ...inputvalues, cpi: e.target.value }) }} type='text' value={inputvalues.cpi} name='cpi' className={classes.inputtext} required />
                    </div>
                    <div className={classes.label_div}>
                        <label htmlFor="fname">About Yourself</label>
                        <input onChange={(e) => { setInputValues({ ...inputvalues, about: e.target.value }) }} type='text' value={inputvalues.about} name='about' className={classes.inputtext} required />
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
                        <input onChange={(e) => { setInputValues({ ...inputvalues, branch: e.target.value }) }} type='text' value={inputvalues.branch} name='branch' className={classes.inputtext} required />
                    </div>
                </div>
                <Link to='/Student' >
                    <Button variant="contained" style={{ width: '200px', height: '50px', borderRadius: '20px', marginLeft: '35%', marginTop: '5%' }} type='submit' >Register</Button>
                </Link>

            </form>
            <Footer />
        </>


    )
}

export default StudentSIgnupForm