import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import classes from './Home.module.css'
import Otp from '../Otp.js/Otp'
const Home = () => {
    const [products,setProducts]=useState(null)

    useEffect(()=>{
     fetch('https://dummyjson.com/products')
     .then(res=>res.json())
     .then(res=>setProducts(res.products.slice(0,6))
     )
    },[])

    console.log(products)

  return (
    <>
    <Otp/>
    <div className={classes.container}>
        {products?.map((item,i)=>{
            return(
                <div className={classes.product} key={item.id}> 
                   <Link to={`/products/${item.id}`} className={classes.link}>
                          <img src={item.images[0]} alt={item.title} className={classes.image}/>
                    <h1>{item.title}</h1>
                   </Link>
                </div>
            )
        })}
        </div>
        <div>
            <Link to='/'>
                <button style={{width:'200px',padding:'10px'}}>View All Products</button>
            </Link>
        </div>
    
    </>
  )
}

export default Home