import React from 'react'
import  classes from './Pill.module.css'
const Pill = ({image,text,onClick}) => {
    
  return (
    <span className={classes['user-pill']} onClick={onClick}>
        <img src={image} alt={text}/>
        <span>{text} &times;</span>
    </span>
  )
}

export default Pill