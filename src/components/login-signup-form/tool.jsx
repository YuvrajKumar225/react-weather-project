import React, { useState } from 'react'
import "./style.css";
import ProductStock from './productStock';
const Tool = (props) => {
    const[toggle,setToggle]=useState(false)
    const[flag,setFlag]=useState(false)
    function showAndHideToolbar(){
        setToggle(!toggle)
        // console.log("hiii");
    }
    function productClick(){
        setFlag(!flag);
        console.log("hiii");
    }
  return (
    <>
    <button class="btn tool btn-primary p-2 my-2" 
    onClick={showAndHideToolbar}
    >Tools</button>
   {toggle &&<div className="tool">
    <ul class="nav flex-column">
  <li class="nav-item">
    <a class="nav-link active" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" href="#"
    onClick={productClick}
    >Product</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" href="#">About</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" href="#">Contact</a>
  </li>
</ul>
</div>}
{flag&&<ProductStock />}
    </>
  )
}

export default Tool