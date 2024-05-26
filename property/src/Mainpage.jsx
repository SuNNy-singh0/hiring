import React, { useState } from 'react'
import Seller from './Seller'
import Buyyer from './Buyyer'
import { useHistory } from 'react-router-dom';
function Mainpage() {
   const [logedin,setlogedin] = useState(false);
   const [logedin2,setlogedin2] = useState(false);
   const handleseller =()=>{
    setlogedin(true);
   }
   if(logedin){
    return <Seller/>;
   }
   const handleBuyers =()=>{
    setlogedin2(true);
   }
   if(logedin2){
    return <Buyyer/>;
   }
  return (
    <>
    <section className='mainpage'>
        <h1>Welcome To ProperyWorld.com</h1>
        <br></br>
        <button onClick={handleseller} className='btn1'>Seller</button>
        <button onClick={handleBuyers} className='btn2'>Buyer</button>
    </section>
    </>
  )
}

export default Mainpage