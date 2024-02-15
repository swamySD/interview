import React from 'react'
import CheckOutSteps from './CheckOutSteps'

const   CHECKOUT_STEPS=[
    {
        name:'Customer Info',
        Component:()=><div>Provide your contact details.</div>
    },
    {
        name:'Shipping Info',
        Component:()=><div>Enter your Shipping address.</div>
    },
    {
        name:'Payment',
        Component:()=><div>Complete your Payment for your order.</div>
    },
    {
        name:'Delivered',
        Component:()=><div>Your order has been delivered.</div>
    }
]

const Checkout = () => {
  return (
    <div style={{marginBottom:'100px'}}>
            <CheckOutSteps stepsConfig={CHECKOUT_STEPS} />
    </div>
  )
}

export default Checkout