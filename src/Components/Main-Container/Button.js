import React from 'react'
import classes from'./Button.module.css';
const Button = (props) => {
  return (
        <button type='button' className={classes.btn_btn}>{props.label}</button>
  )
}

export default Button