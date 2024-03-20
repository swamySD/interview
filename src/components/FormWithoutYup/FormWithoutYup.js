import React,{useState} from 'react'
import * as Yup from 'yup'
import classes from './FormWithoutYup.module.css'
const FormWithoutYup = () => {
 const [formData,setFormData]=useState({
    firstName:'',
    lastName:'',
    email:'',
    phoneNumber:'',
    password:'',
    confirmPassword:'',
    age:'',
    gender:'',
    interests:[],
    dateOfBirth:'',
 })

 const [errors,setErrors]=useState()

 const handleChange=(e)=>{
    const {name,value}=e.target
    setFormData((prevState)=>({
        ...prevState,[name]:value
    }))
 }

 
 const handleCheckBox=(e)=>{
  const {name,checked}=e.target
  let updatedInterests=[...formData.interests]
  if(checked){
    updatedInterests.push(name)
  }else{
    updatedInterests=updatedInterests.filter((interest)=>interest !== name)
  }
    setFormData({...formData,interests:updatedInterests})

 }

//  const validationSchema=Yup.object({
//    firstName:Yup.string.required('First Name is Required'),
//    lastName:Yup.string.required('Last Name is Required'),
//    email:Yup.string().required('Email is Required').email('Invalid email format'),
//    phoneNumber:Yup.string().matches(/^\d{10}$/,"Phone Number must be 10 digits").required(),
//    password:Yup.string().required('Password is required')
//   .min(8,'Password must be at least 8 characters')
//   .matches(/[!@#$%^&*(){};:|<>"]/,"Password must contain at least onev symbol" )
//   .matches(/[0-9]/,"Password must contain at least one number")
//   .matches(/[A-Z]/,"Password must contain at least one uppercase letter")
//   .matches(/[a-z]/,"Password must contain at least one lowercase letter"),
//   confirmPassword:Yup.string().oneOf([Yup.ref('password')],"Passwords must be same").required('Confirm Password must be required'),
//   age:Yup.number().typeError('Age must be number')
//   .min(18,"You must be at least 18 years old")
//   .max(80,"You cannot be older than 100 years")
//   .required("Age is Required"),
//   gender:Yup.string().required('Gender is Required'),
//   interests:Yup.array()
//   .min(1,"Select at least one interest")
//   .required("Select at least one interest"),
//   dateOfBirth:Yup.date().required("Date of birth is required")
  
   
//  })

const validationSchema = Yup.object({
  firstName: Yup.string().required('First Name is Required'),
  lastName: Yup.string().required('Last Name is Required'),
  email: Yup.string().required('Email is Required').email('Invalid email format'),
  phoneNumber: Yup.string()
    .matches(/^\d{10}$/, 'Phone Number must be 10 digits')
    .required(),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(/[!@#$%^&*(){};:|<>"]/g, 'Password must contain at least one symbol')
    .matches(/\d/g, 'Password must contain at least one number')
    .matches(/[A-Z]/g, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/g, 'Password must contain at least one lowercase letter'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must be the same')
    .required('Confirm Password must be required'),
  age: Yup.number()
    .typeError('Age must be a number')
    .min(18, 'You must be at least 18 years old')
    .max(80, 'You cannot be older than 80 years')
    .required('Age is Required'),
  gender: Yup.string().required('Gender is Required'),
  interests: Yup.array()
    .min(1, 'Select at least one interest')
    .required('Select at least one interest'),
  dateOfBirth: Yup.date().required('Date of birth is required'),
});


    const handleSubmit=async(e)=>{
      e.preventDefault()
        await validationSchema.validate(formData,{abortEarly:false})
        console.log('form submitted',formData)
      try {
        
      } catch (error) {
        
      }
    }
  return (
    <div className={classes['form-container']}>
        <form onSubmit={handleSubmit}>
        <div className={classes['input-container']}>   
        <label>First Name:</label>
        <input type='text' name="firstName" value={formData.firstName}
        onChange={handleChange} placeholder='Enter your first Name'
        />
        </div>
        <div className={classes['input-container']}>  
         <label>Last Name:</label>
        <input type='text' name="lastName" value={formData.lastName}
        onChange={handleChange} placeholder='Enter your last Name'
        />
        </div>

        <div className={classes['input-container']}>  
         <label>Email:</label>
        <input type='email' name="email" value={formData.email}
        onChange={handleChange} placeholder='Enter your Email'
        />
        </div>
        
        <div className={classes['input-container']}>  
         <label>Phone Number:</label>
        <input type='text' name="phoneNumber" value={formData.phoneNumber}
        onChange={handleChange} placeholder='Enter your last Name'
        />
        </div>
        <div className={classes['input-container']}>  
         <label>Password:</label>
        <input type='password' name="password" value={formData.password}
        onChange={handleChange} placeholder='Enter your password'
        />
        </div>
        <div className={classes['input-container']}>  
         <label>Confirm Password:</label>
        <input type='password' name="confirmPassword" value={formData.confirmPassword}
        onChange={handleChange} placeholder='Enter your confrim Password'
        />
        </div>
        <div className={classes['input-container']}>  
         <label>Age:</label>
        <input type='number' name="age" value={formData.age}
        onChange={handleChange} placeholder='Enter your age'
        />
        </div>
        <div className={classes['input-container']}>
         <div>   
         <label >Gender:</label>
         <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option value="other">Other</option>
         </select>
        </div>
        </div>
        <div>
            <label>
                <input type='checkbox' name="coding" checked={formData.interests.includes('coding')} onChange={handleCheckBox}/>
                Coding
            </label>
            <label>
                <input type='checkbox' name="sports" checked={formData.interests.includes('sports')} onChange={handleCheckBox}/>
                Sports
            </label>
            <label>
                <input type='checkbox' name="reading" checked={formData.interests.includes('reading')} onChange={handleCheckBox}/>
                Reading
            </label>
        </div>
        <input type='date' name="dateOfBirth" value={formData.dateOfBirth} placeholder='Enteryour date of birth' onChange={handleChange}/>
        <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default FormWithoutYup