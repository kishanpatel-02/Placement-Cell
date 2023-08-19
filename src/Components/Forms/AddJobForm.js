import React from 'react'
import { useState } from 'react';
import classes from './StudentSignupForm.module.css'
import Button from '@mui/material/Button';
import Header from './../Admin/AdminHeader'
import Footer from './../Footer/Footer'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CompanyData from './../Admin/companydata'
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};
const cmpdata = CompanyData;
const names = cmpdata.map((item) => item.companyname);

function getStyles(name, companyname , theme) {
    return {
        fontWeight:companyname.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}


const AddJobForm = () => {
    const theme = useTheme();
    // const [companyname , setcompanyname ] = React.useState('');

    // const handleSelectChange = (event) => {
    //     setcompanyname (event.target.value);
    // };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [inputvalues, setInputValues] = useState({
        jobtitle: '',
        jobtype: '',
        jobpostdate: '',
        skills: '',
        city: '',
        jobdesc: '',
        companyname:''
    });
    const [isSubmitted, setisSubmitted] = React.useState(false);
    let newObj = {}
    const handleSubmit = event => {
        event.preventDefault()
        newObj = {
            jobtitle: inputvalues.jobtitle,
            jobtype: inputvalues.jobtype,
            jobpostdate: inputvalues.jobpostdate,
            skills: inputvalues.skills,
            city: inputvalues.city,
            jobdesc: inputvalues.jobdesc,
            companyname : inputvalues.companyname 
        }
        console.log(newObj)
        setisSubmitted(true);
        setInputValues({
            jobtitle: '',
            jobtype: '',
            jobpostdate: '',
            skills: '',
            city: '',
            companyname : '',
            jobdesc: ''
        })
    }

    return (
        <>
            <Header /><form className={classes.form} onSubmit={handleSubmit}>
                <h2 className={classes.formtitle}>Add Job Details</h2>
                <div className={classes.form_containers}>
                    <div className={classes.label_div}>
                        <label htmlFor="fname">Job Title</label>
                        <input onChange={(e) => { setInputValues({ ...inputvalues, jobtitle: e.target.value }) }} value={inputvalues.jobtitle} type='text' name='jobtitle' className={classes.inputtext} required />
                    </div>
                    <div className={classes.label_div}>
                        <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
                            <Select
                                // multiple
                                displayEmpty
                                value={inputvalues.companyname }
                                onChange={(e) => { setInputValues({ ...inputvalues, companyname: e.target.value }) }}
                                input={<OutlinedInput />}
                                renderValue={(selected) => {
                                    if (selected.length === 0) {
                                        return <em>Company Name</em>;
                                    }

                                    return selected
                                }}
                                MenuProps={MenuProps}
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem disabled value="">
                                    <em>None</em>
                                </MenuItem>
                                {names.map((name) => (
                                    <MenuItem
                                        key={name}
                                        value={name}
                                        style={getStyles(name, inputvalues.companyname , theme)}
                                    >
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                    </div>
                </div>
                <div className={classes.form_containers}>
                    <div className={classes.label_div}>
                        <label htmlFor="fname">Job Type</label>
                        <input onChange={(e) => { setInputValues({ ...inputvalues, jobtype: e.target.value }) }} value={inputvalues.jobtype} type='text' name='jobtype' className={classes.inputtext} required />
                    </div>
                    <div className={classes.label_div}>
                        <label htmlFor="fname">Job Post Date</label>
                        <input onChange={(e) => { setInputValues({ ...inputvalues, jobpostdate: e.target.value }) }} value={inputvalues.jobpostdate} type='date' name='jobpostdate' className={classes.inputtext} required />
                    </div>
                </div>
                <div className={classes.form_containers}>
                    <div className={classes.label_div}>
                        <label htmlFor="fname">Skills Required</label>
                        <input onChange={(e) => { setInputValues({ ...inputvalues, skills: e.target.value }) }} value={inputvalues.skills} type='text' name='skills' className={classes.inputtext} required />
                    </div>
                    <div className={classes.label_div}>
                        <label htmlFor="fname">City</label>
                        <input onChange={(e) => { setInputValues({ ...inputvalues, city: e.target.value }) }} value={inputvalues.city} type='text' name='city' className={classes.inputtext} required />
                    </div>
                </div>
                <div className={classes.form_containers}>
                    <div className={classes.label_div}>
                        <label htmlFor="fname">Job Description</label>
                        <input onChange={(e) => { setInputValues({ ...inputvalues, jobdesc: e.target.value }) }} value={inputvalues.jobdesc} type='text' name='jobdesc' className={classes.inputtext} required />
                    </div>
                </div>
                <Button type='submit' onClick={handleOpen} variant="contained" style={{ width: '200px', height: '50px', borderRadius: '20px', marginLeft: '35%', marginTop: '5%' }} >ADD</Button>
                {isSubmitted  &&
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Job is Added Successfully
                            </Typography>
                        </Box>
                    </Modal>

                }
            </form>
            <Footer />
        </>

    )
}

export default AddJobForm