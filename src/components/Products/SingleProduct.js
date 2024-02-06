import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import classes from '../Home/Home.module.css'
const SingleProduct = () => {
    const [product,setProduct]=useState(null)
    const {id}=useParams()
    useEffect(()=>{
     fetch(`https://dummyjson.com/products/${id}`)
     .then(res=>res.json())
     .then(res=>setProduct(res)
     )
    },[id])
  

  return (
    <>
    <div className={classes.container}>
        <div className={classes.product} key={product?.id}> 
               <img src={product?.thumbnail} alt={product?.title} className={classes.image}/>
                    <h1>{product?.title}</h1>
                </div>
        </div>
        <div>
            <Link to='/'>
                <button style={{width:'200px',padding:'10px'}}>View All Products</button>
            </Link>
        </div>
    
    </>
  )
}

export default SingleProduct