import React from 'react'
import { useState } from 'react';
import classes from './StudentSignupForm.module.css'
import Button from '@mui/material/Button';
import Header from './../Admin/AdminHeader'
import Footer from './../Footer/Footer'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// import Company from './../Admin/companydata'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const AddCompanyForm = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [inputvalues, setInputValues] = useState({
        companyname: '',
        email: '',
        phone: '',
        city: '',
        state: '',
        country: '',
        website: '',
        logo: '',
        companydesc: ''
    });
    const [isSubmitted, setisSubmitted] = React.useState(false);
    let newObj={}
    const handleSubmit = event => {
        event.preventDefault()
         newObj = {
            companyname: inputvalues.companyname,
            email: inputvalues.email,
            phone: inputvalues.phone,
            city: inputvalues.city,
            state: inputvalues.state,
            country: inputvalues.country,
            website: inputvalues.website,
            logo: inputvalues.logo,
            companydesc: inputvalues.companydesc
        }
        // console.log(newObj)
        setisSubmitted(true);
        setInputValues({
            companyname: '',
            email: '',
            phone: '',
            city: '',
            state: '',
            country: '',
            website: '',
            logo: '',
            companydesc: ''
        })
    }
    
    return (
        <>
            <Header /><form className={classes.form} onSubmit={handleSubmit}>
                <h2 className={classes.formtitle}>Add Company Details</h2>
                <div className={classes.form_containers}>
                    <div className={classes.label_div}>
                        <label htmlFor="fname">Company Name</label>
                        <input onChange={(e) => {setInputValues({...inputvalues,companyname:e.target.value})}} value={inputvalues.companyname} type='text' name='companyname' className={classes.inputtext} required />
                    </div>
                    <div className={classes.label_div}>
                        <label htmlFor="fname">Email</label>
                        <input onChange={(e) => {setInputValues({...inputvalues,email:e.target.value})}} value={inputvalues.email} type='email' name='email' className={classes.inputtext} required />
                    </div>
                </div>
                <div className={classes.form_containers}>
                    <div className={classes.label_div}>
                        <label htmlFor="fname">Company Phone Number</label>
                        <input onChange={(e) => {setInputValues({...inputvalues,phone:e.target.value})}} value={inputvalues.phone} type='text' name='phone' className={classes.inputtext} required />
                    </div>
                    <div className={classes.label_div}>
                        <label htmlFor="fname">City</label>
                        <input onChange={(e) => {setInputValues({...inputvalues,city:e.target.value})}} value={inputvalues.city} type='text' name='city' className={classes.inputtext} required />
                    </div>
                </div>
                <div className={classes.form_containers}>
                    <div className={classes.label_div}>
                        <label htmlFor="fname">State</label>
                        <input onChange={(e) => {setInputValues({...inputvalues,state:e.target.value})}} value={inputvalues.state} type='text' name='state' className={classes.inputtext} required />
                    </div>
                    <div className={classes.label_div}>
                        <label htmlFor="fname">Country</label>
                        <input onChange={(e) => {setInputValues({...inputvalues,country:e.target.value})}} value={inputvalues.country} type='text' name='country' className={classes.inputtext} required />
                    </div>
                </div>
                <div className={classes.form_containers}>
                    <div className={classes.label_div}>
                        <label htmlFor="fname">Website</label>
                        <input onChange={(e) => {setInputValues({...inputvalues,website:e.target.value})}} value={inputvalues.website} type='text' name='website' className={classes.inputtext} required />
                    </div>
                </div>
                <div className={classes.label_div} style={{ marginBottom: '5%' }}>
                    <label htmlFor="fname">Company Logo</label>
                    <input onChange={(e) => {setInputValues({...inputvalues,logo:e.target.value})}} value={inputvalues.logo} type='file' name='logo' />
                </div>
                <div className={classes.form_containers}>
                    <div className={classes.label_div}>
                        <label htmlFor="fname">About Company</label>
                        <input onChange={(e) => {setInputValues({...inputvalues,companydesc:e.target.value})}} value={inputvalues.companydesc} type='text' name='companydesc' className={classes.inputtext} required />
                    </div>
                </div>
                <Button  type='submit'onClick={handleOpen} variant="contained" style={{ width: '200px', height: '50px', borderRadius: '20px', marginLeft: '35%', marginTop: '5%' }} >Register</Button>
                {isSubmitted && 
                // <Company  {...newObj}/> &&
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Company is Added Successfully
                            </Typography>
                        </Box>
                    </Modal>

                }
            </form>
            <Footer />
        </>

    )
}

export default AddCompanyForm