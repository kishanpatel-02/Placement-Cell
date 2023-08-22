import React from 'react'
import classes from './Adminlogin.module.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Adminlogin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const adminemail =  "kishan292002@gmail.com";
    const adminpassword = "292002";
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === adminemail && adminpassword === password) {
            navigate("/Admin");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Box className={classes.inputfields}>

                    <TextField
                        id="standard-search"
                        label="Email"
                        type="Email"
                        variant="standard"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={classes.TextField}
                    />
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="standard"
                        onChange={(e) => setpassword(e.target.value)}
                        value={password}
                        className={classes.TextField}
                    />

                </Box>
                <div className={classes.signin_btn}>
                    <Button variant="contained" type='submit' style={{marginLeft:'42%'}}>SIGN IN</Button>
                </div>
            </div>
        </form>
    )
}

export default Adminlogin