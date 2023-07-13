import React, { useState } from 'react'
import SignUpForm from './SignUpForm';
import LoginForm from './loginForm';
import Tool from './tool';
import "./style.css";
const Navbar = () => {
    let [User, setUser] = useState({});
    let [flag, setFlag] = useState(false)
    let [flag1, setFlag1] = useState(false)
    let [validAdmin, setValidAdmin] = useState(false)
    const[toggle,setToggle]=useState(false);
    function handleLogin(event) {
        event.preventDefault();
        setFlag1(true);
    }
    function handleLogout(){
        setFlag(true)
        setFlag1(true)
    }
    function clickLogout(){
        setFlag(false)
        setFlag1(false)
        setValidAdmin(false)
        // console.log("hii")
    }
    function handleCancelButtonClickLogin(){
        setFlag(false);
        setFlag1(false)
        setValidAdmin(false)
    }
    function handleCancelButtonClick() {
        setFlag(false);
    }
    function handleSignUp(event) {
        event.preventDefault();
        setFlag(true);
    }
    function handleValidAdmin() {
        setValidAdmin(true);
    }
    return (
        <>   
        <div className="website-title">
            <h1>Ecommerce Website</h1>
        </div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <form class="d-flex">
                        {!flag&&!flag1 && <button type="submit" class="btn btn-primary mx-3 p-2 my-2" onClick={handleLogin} >Login</button>
                    }
                        {/* {!flag && !flag1&& <button type="submit" class="btn btn-primary mx-3 p-2 my-2" onClick={handleSignUp} >Signup</button>
                    } */}
                        {flag && flag1 && <button type="submit" class="btn btn-primary mx-3 p-2 my-2"  onClick={clickLogout}>Logout</button>
                    }
            
                    </form>
                </div>
            </nav>
            {flag &&!validAdmin && <SignUpForm 
                onCancelButtonClick={handleCancelButtonClick}
            />}
            {!flag && flag1 &&!validAdmin &&
                <LoginForm
                    setValidAdmin={handleValidAdmin}
                    setHandleLogout={handleLogout}
                    onCancelButtonClick={handleCancelButtonClickLogin}
                />}
            {validAdmin &&
                // <div>Welcome to Home Page !</div>
                <Tool/>
            }
        </>
    )
}

export default Navbar