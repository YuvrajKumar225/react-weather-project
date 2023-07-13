// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import React from 'react'
// import Restaurant from "./components/Basics/Restaurant"
// import UseState from './components/hookes/useState'
// import User from './components/login-signup-form/User'
// import Todo from './components/todoReact/todo';
// import {Article,Brand,CTA,Feature,Navbar} from './components1';
// import {Footer,Blog,Features,Header,Possibility,WhatGPT3} from './container'
// import Navbar from './components/login-signup-form/navbar'
// import ProductStock from './components/login-signup-form/productStock'
// import Tool from './components/login-signup-form/tool'
import Temp from './weather/temp'
const App = () => {
  return (
    <>
    {/* <ProductStock/> */}
    {/* <Navbar/> */}
    {/* <Tool/> */}
    <Temp/>
    {/* <div className="App">
      <div className="gradient_bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div> */}
    </>
  )
}

export default App