import React,{useEffect, useRef, useState}from 'react'
import classes from './CheckOutSteps.module.css'

const CheckOutSteps=({stepsConfig=[]})=>{
const [currentStep,setCurrentStep]=useState(1)
const [isComplete,setIsComplete]=useState(false)
const [margins,setMargins]=useState({
    marginLeft:0,marginRight:0
})
const stepRef=useRef([])


useEffect(()=>{
 setMargins({
    marginLeft:stepRef.current[0].offsetWidth/2,
    marginRight:stepRef.current[stepsConfig.length - 1].offsetWidth/2,
 })   
console.log(stepRef.current[0].offsetWidth)
},[stepRef])

if(!stepsConfig){
    return(
        <></>
    )
}


const handleNext=()=>{
setCurrentStep(prevStep=>{
    if(prevStep === stepsConfig.length){
        setIsComplete(true)
        return prevStep
    }else{
        return prevStep+1
    }
})

}

const calculateProgressBarWidth=()=>{
    
    return (((currentStep-1)/(stepsConfig.length-1))*100)
}

const ActiveComponent=stepsConfig[currentStep-1]?.Component;





  return (
    <>
    <div  className={classes.container} >
        {stepsConfig.map((everyStep,index)=>{
            return(
                <div key={index} ref={(el)=>(stepRef.current[index]=el)}
                 className={`${classes.step} ${currentStep>index+1 || isComplete?`${classes.complete}`:''} ${currentStep=== index+1? `${classes.active}`:''}`}>
                    <div className={classes['step-number']}>
                        {currentStep > index+1 || isComplete?(<span>&#10003;</span>):(index+1)} 
                    </div>
                    <div className={classes['step-name']}>
                        {everyStep.name}
                        </div>
                </div>
            )
        })}
        <div className={classes.progressbar}  
   style={{
        width: `calc(100% - ${margins.marginLeft + margins.marginRight}px)`,
        marginLeft: margins.marginLeft,
        marginRight: margins.marginRight,
      }}
    >
            <div className={classes.progress} 
            style={{width:`${calculateProgressBarWidth()}%`}}
            
            >

            </div>
        </div>
    </div>
    <ActiveComponent />
    {!isComplete&&<button onClick={handleNext} >{currentStep === stepsConfig.length? "Finish":'Next'}</button>}
    </>
  )
}


export default CheckOutSteps