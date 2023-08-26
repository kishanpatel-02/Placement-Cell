import React from 'react'
import mainimg from './../../images/main-img.jpg'
import classes from './Container.module.css'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
const Container = () => {
  return (
    <div className={classes.container} style={{
      position: 'relative',
      backgroundImage: `url(${mainimg})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50%',
      height: '450px',
      width: '100%'
    }}>
      <div className={classes.headline}>
        <h1 style={{color:'white'}}>
          A One Stop Portal For Placements
        </h1>

        <h3 style={{color:'white'}}>
          Welcome to the recruiment website for IIIT Jabalpur.
        </h3>
        <p style={{color:'white'}}>
        IIIT is India's foremost industrial leadership development institution. Our Graduates are a combination of rigorous thinking, hardwork and fundamental stronghold. They are nurtured by the institute to strive for excellence and deliver impact in their field of work. Let us begin...
        </p>
      </div>
      <div className={classes.container_btn}>
        <Link to="/student" style={{ textDecoration: 'none', color: 'white' }}><Button variant="contained" size="large" style={{ marginBottom: '30%' }}>For Students</Button></Link>
        <Link to="/company" style={{ textDecoration: 'none', color: 'white' }}><Button variant="contained" size="large" >For Companys</Button></Link>
      </div>
    </div>
  )
}

export default Container