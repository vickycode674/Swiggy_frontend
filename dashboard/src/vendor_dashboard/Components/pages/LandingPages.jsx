// import React from 'react'
import Login from "../Forms/Login";
import NavBar from "../NavBar";
import Sidebar from "../Sidebar";

const LandingPages = () => {
  return (
    <>
    <section className='landingsection'>
        <NavBar />

        <div className="collectionSection">
        <Sidebar/>
        <Login/>
        </div>

    </section>
    </>
  )
}

export default LandingPages
