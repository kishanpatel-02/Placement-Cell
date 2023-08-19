import React from 'react'
import companydata from './companydata'
import classes from './Companylist.module.css'
const Companylist = () => {
    const cmpdata = companydata;
    return (
        <div>
            {cmpdata.map((data) => {
                return (
                    <div className={classes.container}>
                        <div className={classes.heading}>
                            <h2>{data.companyname}</h2>
                        </div>
                        <div className={classes.bodycnt}>
                            <div className={classes.details}>
                                <div className={classes.element}>
                                    <div className={classes.title}>
                                        <p>Company Name</p>
                                    </div>
                                    <div className={classes.value}>
                                        {data.companyname}
                                    </div>
                                </div>
                                <div className={classes.element}>
                                    <div className={classes.title}>
                                        <p>Company Email</p>
                                    </div>
                                    <div className={classes.value}>
                                        {data.email}
                                    </div>
                                </div>
                                <div className={classes.element}>
                                    <div className={classes.title}>
                                        <p>Phone</p>
                                    </div>
                                    <div className={classes.value}>
                                        {data.phone}
                                    </div>
                                </div>
                                <div className={classes.element}>
                                    <div className={classes.title}>
                                        <p>City</p>
                                    </div>
                                    <div className={classes.value}>
                                        {data.city}
                                    </div>
                                </div>
                                <div className={classes.element}>
                                    <div className={classes.title}>
                                        <p>State</p>
                                    </div>
                                    <div className={classes.value}>
                                        {data.state}
                                    </div>
                                </div>
                                <div className={classes.element}>
                                    <div className={classes.title}>
                                        <p>Country</p>
                                    </div>
                                    <div className={classes.value}>
                                        {data.country}
                                    </div>
                                </div>
                                <div className={classes.element}>
                                    <div className={classes.title}>
                                        <p>Company Website</p>
                                    </div>
                                    <div className={classes.value}>
                                        {data.website}
                                    </div>
                                </div>

                            </div>
                            <div className={classes.image}>
                                <img style={{ width: '80%', height: '80%' }} src={data.logo} alt="" />
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Companylist