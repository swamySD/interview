import React, { useState,useRef, useEffect } from 'react'
import classes from './OtpInput.module.css'
const OtpInput = ({length,onOtpSubmit}) => {
    const [otp,setOtp]=useState(new Array(length).fill(""))
    const inputRefs=useRef([])

useEffect(()=>{
if(inputRefs.current[0]){
    inputRefs.current[0].focus()
}
},[])

const handleChange=(e,index)=>{
    const value=e.target.value
    if(isNaN(value))return
    const newOtp=[...otp]

    // allow only one input
    newOtp[index]=value.substring(value.length-1)
    setOtp(newOtp)
    
    //submit trigger
    const combinedOtp=newOtp.join('')

    if(combinedOtp.length===length)
    onOtpSubmit(combinedOtp)
    //Move to next input if current input is filled

    if(value && index<length-1 && inputRefs.current[index+1]){
        inputRefs.current[index+1].focus()
    }

}

const handleClick=(index)=>{
inputRefs.current[index].setSelectionRange(1,1)

//optional validation
if(index >0 && !otp[index-1]){
     inputRefs.current[otp.indexOf("")].focus()
}

}

const handleKeyDown=(index,e)=>{
 
    if(e.key==="Backspace" && !otp[index] &&
    index > 0 && inputRefs.current[index-1]
    ){

        //Move focus to the previous input field on backspace
        inputRefs.current[index-1].focus()
    }

}

    console.log(inputRefs)
  return (
    <div>
        {otp.map((value,index)=>{
            return (
                <input key={index} type='text' value={value}
                ref={(input)=>(inputRefs.current[index]=input)} 
                onChange={(e)=>handleChange(e,index)}
                onClick={()=>handleClick(index)}
                onKeyDown={(e)=>handleKeyDown(index,e)}
                className={classes['otp-input']}
                />
            )
        })}
    </div>
  )
}

export default OtpInput