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
        <p ><h1>
          A One Stop Portal For Placements</h1>
        </p>
        <p><h3>
          Welcome to the recruiment website for IIIT Jabalpur.</h3>
          IIIT is India's foremost industrial leadership development institution. Our Graduates are a combination of rigorous thinking, hardwork and fundamental stronghold. They are nurtured by the institute to strive for excellence and deliver impact in their field of work. Let us begin...</p>
      </div>
      <div className={classes.container_btn}>
      <Button variant="contained" size="large" style={{marginBottom: '10%'}}><Link to="/student" style={{textDecoration:'none',color:'white'}}>For Students</Link></Button>
      <Button variant="contained" size="large" >For Companies</Button>
      </div>
    </div>
  )
}

export default Container