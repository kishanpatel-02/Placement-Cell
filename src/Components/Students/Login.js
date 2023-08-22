import React from 'react'
import classes from './Login.module.css'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Student from './StudentLogin';
import Recruiter from './Recruiterlogin';
import Admin from './Adminlogin';
import { useState } from 'react';

const Login = (props) => {
  const [value, setValue] = useState(props.tabno)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.student} >
      <div className={classes.loginform}>
        <h4 className={classes.heading}>Sign-in to IIIT Jabalpur Placement Portal</h4>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className={classes.tab_box} >
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Student" value="0" style={{marginRight:'7%'}}/>
                <Tab label="Recruiter" value="1"style={{marginRight:'7%'}} />
                <Tab label="Admin" value="2" />
              </TabList>
            </Box>
            <TabPanel value="0"><Student/></TabPanel>
            <TabPanel value="1"><Recruiter/></TabPanel>
            <TabPanel value="2"><Admin/></TabPanel>
          </TabContext>
        </Box>

      </div>
    </div>
  )
}

export default Login