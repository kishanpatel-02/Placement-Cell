import React from 'react'
import companydata from './companydata'
import logoimg from './../../images/logo.jpg'
import classes from './Companylist.module.css'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import emailimg from './Images/cardemail.png'
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logout } from '../../slices/adminSlice';
import { useNavigate } from 'react-router-dom';
import contactimg from './Images/cardcontact.png'


const Companylist = () => {

    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handlelogout = (e) => {
        e.preventDefault();
        dispatch(logout());
        navigate('/adminlogin');
    }
    const handlehomelogout = (e) => {
        e.preventDefault();
        dispatch(logout());
        navigate('/');
    }
    const cmpdata = companydata;
    return (
        <>
            <nav className={classes.header}>
                <div className={classes.img_container}>
                    <Link to='/' onClick={(e) => handlehomelogout(e)} style={{ textDecoration: 'none', marginLeft: '15%' }}><img src={logoimg} className={classes.header_img} alt='' /></Link>
                    <Link to='/' onClick={(e) => handlehomelogout(e)} style={{ textDecoration: 'none', marginTop: '5%', marginLeft: '8%', color: 'black' }}><h4 className={classes.logo_text} > Placement Cell</h4></Link>
                </div>
                <div className={classes.header_content}>
                    <h5><Link to="/admin" style={{ textDecoration: 'none', color: 'black' }}>Admin Home</Link></h5>
                    <h5><Link to="/admincompanylist" style={{ textDecoration: 'none', color: 'black' }}>All COMPANIES</Link></h5>
                    <h5 ><Link to="/studentreport" style={{ textDecoration: 'none', color: 'black' }}>All STUDENTS</Link></h5>
                    <h5><Link to="/jobreport" style={{ textDecoration: 'none', color: 'black' }}>All Jobs</Link></h5>
                    <h5><Link to="/adminlogin" onClick={(e) => handlelogout(e)} style={{ textDecoration: 'none', color: 'black' }}>Log Out</Link></h5>
                </div>
            </nav>
            <div style={{ backgroundColor: 'rgb(238 239 241)', paddingTop: '2%' }}>
                <ul style={{ listStyleType: 'none' }}>
                    <li style={{ fontSize: '2.5rem', fontFamily: 'Ubuntu', marginLeft: '5%', color: "black" }}>Companies</li>
                    <li style={{ fontSize: '1.2rem', fontFamily: 'Roboto Mano sans-serif', marginLeft: '5%', color: "#6e6e6e", marginBottom: "5%" }}>List of Companies on platform</li>
                </ul>
                <Box sx={{ flexGrow: 1 }} style={{ paddingBottom: '5%' }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12, lg: 16 }}>
                        {cmpdata.map((data, index) => (
                            <Grid item xs={2} sm={2} md={2} key={index} style={{ margin: " 0 5% 2% 5%" }}>
                                <Card sx={{ minWidth: 275 }}>
                                    <CardContent>
                                        <Typography variant="h5" component="div" gutterBottom>
                                            <div style={{ display: 'flex', flexDirection: "row" }}>
                                                <img src={data.logo} style={{ width: '20%', borderRadius: '50%' }} alt="" />
                                                <div style={{ marginTop: '4%', marginLeft: '2%' }}>{data.companyname}</div>
                                            </div>
                                        </Typography>
                                        <Typography variant="body2" style={{ color: "black" }}>
                                            <div style={{ display: 'flex', flexDirection: "row", marginTop: '25%' }}>
                                                <img src={contactimg} style={{ width: '15%', marginTop: '0%' }} alt="" />
                                                <div style={{ marginTop: '4%', marginLeft: '2%' }}>{data.phone}</div>
                                            </div>
                                        </Typography>
                                        <Typography variant="body2" style={{ color: "black" }}>
                                            <div style={{ display: 'flex', flexDirection: "row", marginTop: '2%' }}>
                                                <img src={emailimg} style={{ width: '15%', marginTop: '0%' }} alt="" />
                                                <div style={{ marginTop: '4%', marginLeft: '2%' }}>{data.email}</div>
                                            </div>
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" >View Details</Button>
                                </CardActions>
                            </Card>
                            </Grid>
                        ))}
                </Grid>
            </Box>
        </div >
        </>
    )
}

export default Companylist