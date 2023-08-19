import React from 'react'
import classes from './Companyreport.module.css'
import cmpdata from './companydata'
import { Button } from '@mui/material';
import { useState } from 'react'

const Companyreport = () => {
    const [data, setData] = useState(cmpdata);
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
            <tbody>
                {filteredData.map((row, index) => (
                    <tr key={row.id} className={classes.row}>
                        <td className={classes.value} >{row.id}</td>
                        <td className={classes.value} style={{ width: '10%' }}><img src={row.logo} alt='' style={{ width: '100%', height: '100%' }} /></td>
                        <td className={classes.value} >{row.companyname}</td>
                        <td className={classes.value} >{row.phone}</td>
                        <td className={classes.value} >{row.city}</td>
                        <td className={classes.value} >{row.state}</td>
                        <td className={classes.value} >{row.website}</td>
                        <td className={classes.value} >{row.email}</td>
                        <td className={classes.value} >
                            <Button style={{ width: '5%', height: '30px', marginLeft: '10px' }} variant="contained" color="secondary" onClick={() => deleterow(index)} >Delete</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        )
    }


    return (
        <>
            <div className={classes.header}>
                <h4>Company Report</h4>
                <input type="text" placeholder="Search" onChange={handleOnChange} value={search} style={{ width: '20%' }} />
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Logo</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Website</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {handleSearch()}
                </table>
            </div>
        </>
    )
}

export default Companyreport