import React, { useState } from 'react'
import SignUpForm from './SignUpForm';
import LoginForm from './loginForm';
import "./style.css";
const User = () => {
    let[User,setUser]=useState({});
    let[flag,setFlag]=useState(false)
    let[validAdmin,setValidAdmin]=useState(false)
    function handleCancelButtonClick(){
      setFlag(false);
    }
    function handleSignUp(event){
      event.preventDefault();
      setFlag(true);
    }
    function handleValidAdmin()
    {
      setValidAdmin(true);   
    }
  return (
    <>
    {flag&&!validAdmin&&<SignUpForm
    onCancelButtonClick={handleCancelButtonClick}
    />}
    {!flag&& !validAdmin &&
    <LoginForm
    setValidAdmin={handleValidAdmin} 
    />}
{!flag&&<button type="submit" class="btn btn-primary mx-5 p-2 my-2" onClick={handleSignUp} >Signup</button>
}    
{validAdmin &&
<div>Welcome to Home Page !</div>
}
  </>
  )
}
export default User;