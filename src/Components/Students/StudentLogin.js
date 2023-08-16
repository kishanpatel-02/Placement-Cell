import React from 'react'
import Box from '@mui/material/Box';
import classes from './StudentLogin.module.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
const StudentSignup = () => {
    return (
        <div>
            <Box className={classes.inputfields}>
                <TextField
                    id="standard-search"
                    label="Email"
                    type="Email"
                    variant="standard"
                    className={classes.TextField}
                />
                <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                    className={classes.TextField}
                />
            </Box>
            <div className={classes.signin_btn}>
                <Button variant="contained" style={{ marginLeft: '25%', marginTop: '1%', width: '15%', height: '15%' }}>SIGN IN</Button>
                <p style={{ color: '#007bff', marginLeft: '18%' }}>Forgot Password</p>
            </div>
            <div className={classes.footer_signup}>
                <p className={classes.message}>Don't have an account? <a className={classes.signuplink}><Link to="/SignupStudent">Register</Link></a></p>
            </div>
        </div>
    )
}

export default StudentSignup