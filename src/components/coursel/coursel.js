import {useState,useEffect} from 'react'
import classes from './coursel.module.css'
const data=[
    "https://www.thefactsite.com/wp-content/uploads/2010/09/random-animal-facts.jpg",
    "https://media.istockphoto.com/id/1659043943/photo/random.jpg?b=1&s=170667a&w=0&k=20&c=sHxac3c49wSatJgnMK4-ZRWaW80YuJ15eCa49K2SHIM=",
    "https://www.kdnuggets.com/wp-content/uploads/tree-todd-quackenbush-unsplash.jpg",
    "https://images.freeimages.com/images/large-previews/303/random-art-2-1542645.jpg?fmt=webp&w=500",
    "https://www.freecodecamp.org/news/content/images/2020/08/0_hOa0fVvazQigNgB2.jpg"
]

const Coursel = () => {
    const [slide,setSlide]=useState(0)
    const prevHandler=()=>{
      setSlide(!slide ? data.length-1:slide-1)
    }
  const nexthandler=()=>{
        setSlide((slide+1) % data.length)
    }
   useEffect(()=>{
      const timer=  setTimeout(()=>{
        nexthandler()
        },2000)
        return ()=> clearTimeout(timer)
    },[slide])
return (
    <div style={{marginTop:'30px',marginBottom:'30px',border:'1px solid lightgreen',display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <button onClick={prevHandler}  style={{width:'140px',height:'30px',marginRight:'30px'}}>Previous</button>
        {data.map((url,index)=>(<img key ={index} src={url} alt="" className={`${slide === index ? classes.active: classes.disbled}`} style={{ width:'400px',height:'400px',objectFit:'cover'}}/>))}
        <button onClick={nexthandler}  style={{width:'140px',height:'30px',marginLeft:'30px'}}>Next</button>
    </div>
  )
}

export default Coursel