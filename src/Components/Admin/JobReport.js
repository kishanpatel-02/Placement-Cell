import React from 'react'
import classes from './JobReport.module.css'
import Jobdata from './JobData'
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

const JobReport = () => {
  const [data, setData] = useState(Jobdata);
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
      return item.companyname.toLowerCase().includes(search.toLowerCase());
    })
    return (
      <TableContainer className={classes.TableContainer} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell style={{width:'20%'}} align="right">Job Title</StyledTableCell>
              <StyledTableCell align="right">Company</StyledTableCell>
              <StyledTableCell align="right">Job Type</StyledTableCell>
              <StyledTableCell align="right">Job Post Date</StyledTableCell>
              <StyledTableCell align="right">Job City</StyledTableCell>
              <StyledTableCell align="right">Job Description</StyledTableCell>
              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((row, index) => (
              <StyledTableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="right">{row.jobtitle}</StyledTableCell>
                <StyledTableCell align="right">{row.companyname}</StyledTableCell>
                <StyledTableCell align="right">{row.jobtype}</StyledTableCell>
                <StyledTableCell align="right">{row.jobpostdate}</StyledTableCell>
                <StyledTableCell align="right">{row.city}</StyledTableCell>
                <StyledTableCell align="right">{row.jobdesc}</StyledTableCell>
                <StyledTableCell align="right"><Button style={{ width: '5%', height: '30px', marginLeft: '30px' }} variant="contained" color="secondary" onClick={() => deleterow(index)} >Delete</Button></StyledTableCell>
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
        <h4 style={{marginLeft:'30px',fontSize:'1.5rem'}}>Job Report</h4>
        <input type="text" placeholder="Search" onChange={handleOnChange} value={search} style={{ width: '20%',height:'50%',padding:'18px',margin:'16px'}} />
      </div>
      {handleSearch()}
    </>
  )
}

export default JobReport