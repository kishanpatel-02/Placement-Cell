import React from 'react'
import Box from '@mui/material/Box';
import classes from './Recruiterlogin.module.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import linkedin from './../Componentsimages/linkedin.png'
const StudentSignup = () => {
    return (
        <div>
          <div className={classes.linkedin}>
          <Button variant="contained" style={{width:'55%', height:'5%',marginLeft:'23%'}}><img src={linkedin} alt='' style={{width:'5%', height:'5%',marginRight:'5%'}}/>Sign In With LinkedIN</Button>
          </div>
          <p style={{color:'black',marginLeft:'50%'}}>Or</p>
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
                <p className={classes.message}>Don't have an account? <a className={classes.signuplink}>Register</a></p>
            </div>
        </div>
    )
}

export default StudentSignup