import React from 'react'
import classes from './StudentSignupForm.module.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

const StudentSIgnupForm = () => {
    const [programme, setProgramme] = React.useState('Choose');

    const handleChange = (event) => {
        setProgramme(event.target.value);
    };
    return (
        <form className={classes.form}>
            <h2 className={classes.formtitle}> STUDENTS DETAILS</h2>
            <div className={classes.form_containers}>
                <div className={classes.label_div}>
                    <label for="fname">College Email Id</label>
                    <input type='text' className={classes.inputtext} />
                </div>
                <div className={classes.label_div}>
                    <label for="fname">Password</label>
                    <input type='password' className={classes.inputtext} />
                </div>
            </div>
            <div className={classes.form_containers}>
                <div className={classes.label_div}>
                    <label for="fname">Full Name</label>
                    <input type='text' className={classes.inputtext} />
                </div>
                <div className={classes.label_div}>
                    <label for="fname">Roll No</label>
                    <input type='text' className={classes.inputtext} />
                </div>
            </div>
            <div className={classes.label_div} style={{marginBottom:'5%'}}>
                <label for="fname">Profile Pic</label>
                <input type='file'  />
            </div>
            <div className={classes.form_containers}>
                <div className={classes.label_div}>
                    <label for="fname">Mobile No.</label>
                    <input type='text' className={classes.inputtext} />
                </div>
                <div className={classes.label_div}>
                    <label for="fname">Active Backlogs</label>
                    <input type='text' className={classes.inputtext} />
                </div>
            </div>
            <div className={classes.form_containers}>
                <div className={classes.label_div}>
                    <label for="fname">CPI</label>
                    <input type='text' className={classes.inputtext} />
                </div>
                <div className={classes.label_div}>
                    <label for="fname">About Yourself</label>
                    <input type='text' className={classes.inputtext} />
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
                    >
                        <MenuItem value={10}>B.Tech</MenuItem>
                        <MenuItem value={20}>M.Tech</MenuItem>
                        <MenuItem value={30}>PHD</MenuItem>
                        <MenuItem value={30}>B.Des</MenuItem>
                    </Select>
                </div>
                <div className={classes.label_div}>
                    <label for="fname">Discipline</label>
                    <input type='text' className={classes.inputtext} />
                </div>
            </div>
            <Button variant="contained" style={{width:'200px',height:'50px', borderRadius:'20px',marginLeft:'35%',marginTop:'5%'}} >Register</Button>

        </form>

    )
}

export default StudentSIgnupForm