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
  const [showFirm,setShowFirm] = useState(false);
  const [showProduct,setShowProduct] = useState(false);

   const showLoginHandler =()=>{
      setShowLogin(true)
      setShowRegister(false)
      setShowFirm(false)
      setShowProduct(false)

   }

   const showRegisterHandler =()=>{
    setShowRegister(true)
    setShowLogin(false)
    setShowFirm(false)
    setShowProduct(false)

   }

   const ShowFirmHandler =()=>{
    setShowFirm(true)
    setShowRegister(false)
    setShowLogin(false)
    setShowProduct(false)
   }

   const showproductHandler = ()=>{
    setShowRegister(false)
    setShowLogin(false)
    setShowFirm(false)
    setShowProduct(true)
   }


  return (
    <>
    <section className='landingsection'>
        <NavBar showLoginHandler={showLoginHandler} showRegisterHandler={showRegisterHandler}/> 

        <div className="collectionSection">
        <Sidebar ShowFirmHandler={ShowFirmHandler} showproductHandler={showproductHandler} />

        
         {/* <Login /> */}
  
         {showLogin && <Login/> } 
        {showRegister && <Register/> }
        
        {/* <AddFirm/> */}
        {showFirm && <AddFirm />}

        {/* <AddProduct /> */}
        {showProduct && <AddProduct />}
        </div>

    </section>
    </>
  )
}

export default LandingPages
