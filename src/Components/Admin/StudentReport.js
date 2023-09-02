import React from 'react'
import classes from './StudentReport.module.css'
import Stddata from './StudentData'
import { Button } from '@mui/material';
import { useState } from 'react'

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const StudentReport = () => {
  const [data, setData] = useState(Stddata);
  const [search, setSearch] = useState('');

  const deleterow = (id) => {
    const updatedRows = [...data];
    updatedRows.splice(id, 1);
    setData(updatedRows);
  }
  const handleOnChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  }
  const handleSearch = () => {
    let filteredData = data.filter((item) => {
      return item.name.toLowerCase().includes(search.toLowerCase());
    })
    return (
      <TableContainer className={classes.TableContainer} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell style={{fontSize:'1.2rem',fontFamily:'Roboto Mano sans-serif'}}>ID</StyledTableCell>
              <StyledTableCell style={{width:'10%',fontSize:'1.2rem',fontFamily:'Roboto Mano sans-serif'}} align="center">Profile Pic</StyledTableCell>
              <StyledTableCell align="center"style={{fontSize:'1.2rem',fontFamily:'Roboto Mano sans-serif'}}>Name</StyledTableCell>
              <StyledTableCell align="center"style={{fontSize:'1.2rem',fontFamily:'Roboto Mano sans-serif'}}>Phone</StyledTableCell>
              <StyledTableCell align="center"style={{fontSize:'1.2rem',fontFamily:'Roboto Mano sans-serif'}}>CPI</StyledTableCell>
              <StyledTableCell align="center"style={{fontSize:'1.2rem',fontFamily:'Roboto Mano sans-serif'}}>Backlogs</StyledTableCell>
              <StyledTableCell align="center"style={{fontSize:'1.2rem',fontFamily:'Roboto Mano sans-serif'}}>Roll NO</StyledTableCell>
              <StyledTableCell align="center"style={{fontSize:'1.2rem',fontFamily:'Roboto Mano sans-serif'}}>College Mail ID</StyledTableCell>
              <StyledTableCell align="center"style={{fontSize:'1.2rem',fontFamily:'Roboto Mano sans-serif'}}>Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((row, index) => (
              <StyledTableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row" style={{fontSize:'1.2rem',fontFamily:'inter sans-serif'}}>
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="center"><img src={row.profilepic} alt='' style={{ width: '80%', height: '20%' }}/></StyledTableCell>
                <StyledTableCell align="center" style={{fontSize:'1.2rem',fontFamily:'inter sans-serif'}}>{row.name}</StyledTableCell>
                <StyledTableCell align="center"style={{fontSize:'1.2rem',fontFamily:'inter sans-serif'}}>{row.contact}</StyledTableCell>
                <StyledTableCell align="center"style={{fontSize:'1.2rem',fontFamily:'inter sans-serif'}}>{row.cpi}</StyledTableCell>
                <StyledTableCell align="center"style={{fontSize:'1.2rem',fontFamily:'inter sans-serif'}}>{row.backlogs}</StyledTableCell>
                <StyledTableCell align="center"style={{fontSize:'1.2rem',fontFamily:'inter sans-serif'}}>{row.rollno}</StyledTableCell>
                <StyledTableCell align="center"style={{fontSize:'1.2rem',fontFamily:'inter sans-serif'}}>{row.clgemailid}</StyledTableCell>
                <StyledTableCell align="center"><Button style={{ width: '5%', height: '30px', marginLeft: '30px' }} variant="contained" color="secondary" onClick={() => deleterow(index)} >Delete</Button></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  }

  return (
    <>
      <div className={classes.header}>
        <h4 style={{marginLeft:'30px',fontSize:'1.5rem'}}>Student Report</h4>
        <input type="text" placeholder="Search" onChange={handleOnChange} value={search} style={{ width: '20%', height: '50%', padding: '18px', margin: '20px 20px 0px auto',borderRadius:'10'}} />
      </div>
      {handleSearch()}
    </>
  )
}

export default StudentReport