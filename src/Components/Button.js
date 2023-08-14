import React from 'react'
import './Button.css';
const Button = (props) => {
  return (
        <button type='button' className='btn-btn'>{props.label}</button>
  )
}

export default Button