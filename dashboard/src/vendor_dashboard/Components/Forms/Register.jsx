import React from 'react'

const Register = () => {
  return (
    <div className='RegisterSection'>
       <form className='authForm'>
       <h3>Vendor Register</h3>

         <label>Username</label> 
         <input type='text' placeholder='Enter your Name'/> <br/>

         <label>Email</label> 
         <input type='text' placeholder='Enter your email '/> <br/>
         
         <label>Password</label>
         <input type='password' placeholder='Enter Your password'/><br/>

         <div className="btnsubmit">
            <button>Submit</button>
         </div>

       </form>
    </div>
  )
}

export default Register
