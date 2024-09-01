// import React from 'react'
import { useState } from "react";
import AddFirm from "../Forms/AddFirm";
import AddProduct from "../Forms/AddProduct";
import Login from "../Forms/Login";
import Register from "../Forms/Register";
import NavBar from "../NavBar";
import Sidebar from "../Sidebar";

const LandingPages = () => {

  const [showLogin,setShowLogin]= useState(false);
  const [showRegister,setShowRegister] =useState(false);

   const showLoginHandler =()=>{
      setShowLogin(true)
      setShowRegister(false)
   }

   const showRegisterHandler =()=>{
    setShowRegister(true)
    setShowLogin(false)
   }


  return (
    <>
    <section className='landingsection'>
        <NavBar showLoginHandler={showLoginHandler} showRegisterHandler={showRegisterHandler}/> 

        <div className="collectionSection">
        <Sidebar/>


        {showLogin && <Login/> } 
        {showRegister && <Register/> }
        {/* <AddFirm/> */}
        
   

        {/* <AddProduct /> */}
        </div>

    </section>
    </>
  )
}

export default LandingPages
