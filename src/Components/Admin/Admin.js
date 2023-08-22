import React from 'react'
import classes from './Admin.module.css'
import { Link } from 'react-router-dom'
const Admin = () => {
  return (
    <>
    <div className={classes.container}>
      <div className={classes.heading}>
        <h1>Welcome to Placement Cell</h1>
      </div>
      <div className={classes.content}>
      <Link to='/admin' style={{textDecoration:'none',color:'white'}}><p  className={classes.tags}>Home</p></Link>
      <Link to='/about' style={{textDecoration:'none',color:'white'}}><p className={classes.tags}>About Us</p></Link>
      <Link to='/addcompany' style={{textDecoration:'none',color:'white'}}><p className={classes.tags}>Add Company</p></Link>
      <Link to='/addjob' style={{textDecoration:'none',color:'white'}}> <p className={classes.tags}>Add Job</p></Link>
      <Link to='/admincompanylist' style={{textDecoration:'none',color:'white'}}><p className={classes.tags}>Company Listing</p></Link>
      <Link to='/companyreport' style={{textDecoration:'none',color:'white'}}><p className={classes.tags}>Company Report</p></Link>
      <Link to='/studentreport' style={{textDecoration:'none',color:'white'}}><p className={classes.tags}>Student Report</p></Link>
      <Link to='/jobreport' style={{textDecoration:'none',color:'white'}}> <p className={classes.tags}>Job Report</p></Link>
      <Link to='/changepassword' style={{textDecoration:'none',color:'white'}}> <p className={classes.tags}>Change Password</p></Link>
      </div>
    </div>
    </>
  )
}

export default Admin