import React from 'react'
import classes from './Admin.module.css'
import { Link } from 'react-router-dom'
import Card from './Card'
import addjob from './Images/addjob.png'
import jobreport from './Images/jobreport.jpg'
import companyreport from './Images/companyreport.png'
import studentreport from './Images/studentreport.jpg'
import companylist from './Images/companylist.png'
import addcompany from './Images/addcompany.png'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import bgimg from './Images/bgimg.jpg'
import logoimg from './../../images/logo.jpg'
import { useDispatch } from 'react-redux';
import { logout } from '../../slices/adminSlice';
import { useNavigate } from 'react-router-dom';
const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: '#1A2027',
  // ...theme.typography.body2,
  // padding: theme.spacing(1),
  // textAlign: 'center',
  // color: theme.palette.text.secondary,
}));
const Admin = () => {
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
  return (
    <>
    <div style={{
        backgroundImage: `url(${bgimg})`,
      }}>
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
        <h1 style={{ textAlign: 'center',color: 'black',marginBottom:'5%' }}>Welcome to Placement Cell</h1>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid xs={2} sm={4} md={2.5} className={classes.items}>
              <Link to='/addcompany' style={{ textDecoration: 'none', color: 'white' }}>
                <Item><Card image={addcompany} name="Add Company" /></Item>
              </Link>
            </Grid>
            <Grid xs={2} sm={4} md={2.5} className={classes.items}>
              <Link to='/addjob' style={{ textDecoration: 'none', color: 'white' }}>
                <Item><Card image={addjob} name="Add Job" /></Item>
              </Link>
            </Grid>
            <Grid xs={2} sm={4} md={2.5} className={classes.items}>
              <Link to='/admincompanylist' style={{ textDecoration: 'none', color: 'white' }}>
                <Item><Card image={companylist} name="Company List" /></Item>
              </Link>
            </Grid>
            <Grid xs={2} sm={4} md={2.5} className={classes.items}>
              <Link to='/companyreport' style={{ textDecoration: 'none', color: 'white' }}>
                <Item><Card image={companyreport} name="Company Report" /></Item>
              </Link>
            </Grid>
            <Grid xs={2} sm={4} md={2.5} className={classes.items}>
              <Link to='/studentreport' style={{ textDecoration: 'none', color: 'white' }}>
                <Item><Card image={studentreport} name="Student Report" /></Item>
              </Link>
            </Grid>
            <Grid xs={2} sm={4} md={2.5} className={classes.items}>
              <Item>
                <Link to='/jobreport' style={{ textDecoration: 'none', color: 'white' }}>
                  <Card image={jobreport} name="Job Report" />
                </Link>
              </Item>
            </Grid>
          </Grid>
        </Box >
      </div>
    </>
  )
}

export default Admin