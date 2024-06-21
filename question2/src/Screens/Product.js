import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Product() {
    const location=useLocation()
    const item=location.state?.item
    console.log(item)
  return ( 
    <div className='W-full' >

        <div className='w-[700px] mt-[200px] p-10 rounded-2xl m-auto bg-orange-200 text-4xl font-bold shadow-2xl text-center' >
            <h1>{item.productName}</h1>
            <h1>{item.price}</h1>
            <h1>{item.rating}</h1>
            <h1>{item.discount}</h1>
            <h1>{item.availabilty}</h1>
        </div>
        
    </div>
  )
}
