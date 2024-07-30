import React from 'react'

const Login = () => {
  return (
    <div className='loginSection'>
    
       <form className='authForm'>
       <h3>Vendor Login</h3>

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

export default Login
