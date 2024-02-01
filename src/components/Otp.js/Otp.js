import React,{useState} from 'react'
import OtpInput from './OtpInput'
import classes from './Otp.module.css'
const Otp = () => {
    const [phoneNumber,setPhoneNumber]=useState("")
    const [showOtpInput,setShowOtpInput]=useState(false)
    const handlePhoneNumber=(e)=>{
setPhoneNumber(e.target.value)
    }
   
    const handlePhoneSubmit=(e)=>{
        e.preventDefault()
        const regex=/[^0-9]/g;
        if(phoneNumber.length<10||regex.test(phoneNumber) ){
            alert('Invalid Phone Number')
            return 
        }else{
            // call backend api here 
            //show otp field
            setShowOtpInput(true)
        }
    }


    const onOtpSubmit=(otp)=>{
        console.log('Login Success',otp)
    }

  return (
    <div className={classes.form}>
        {!showOtpInput?<form onSubmit={handlePhoneSubmit}>
            <input type='text' value={phoneNumber} 
            onChange={handlePhoneNumber} placeholder='Enter Phone Number'
            />
            <button type='Submit' style={{marginLeft:'10px'}}>Submit</button>
        </form>:<div>
            <p>Enter the OTP sent to {phoneNumber}</p>
            <OtpInput length={4} onOtpSubmit={onOtpSubmit}/>
            </div>}
    </div>
  )
}

export default Otp