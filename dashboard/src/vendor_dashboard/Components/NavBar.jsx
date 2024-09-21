import React from 'react'

const NavBar = ({showLoginHandler,showRegisterHandler}) => {
  return (
    <div className='navSection '>
       <div className="company">
          Vendor Dashboard
       </div>
       <div className="userAuth">
        <span  style={{ cursor: 'pointer' }}  onClick={showLoginHandler}>Login /</span> 
        <span  style={{ cursor: 'pointer' }} onClick={showRegisterHandler}>Register</span>
       </div>
    </div>
  )
}

export default NavBar
