import React, { useState } from 'react'
import axios from "axios";


const LoginForm = (props) => {
  let [user, setUser] = useState({});
  // console.log(user);
  let [message, setMessage] = useState("");
  function handleCancelButtonClickLogin() {
    props.onCancelButtonClick();
  }
  function handleEmailIdClick(event) {

    setUser({ ...user, emailId: event.target.value });
  }
  function handlePasswordClick(event) {
    setUser({ ...user, password: event.target.value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    axios.post("/user/check", user, {
      headers: {
        accept: "application/json",
        "Accept-Language": "en-US,en;q=0.8",
      },
    })
      .then((res) => {
        console.log(res.data);
        let message;
        if (res.data == 0) {
          message = "Invalid user-name";
        }
        else if (res.data == 1) {
          message = "Invalid password";
        }
        else if (res.data == 2) {
          message = "Success...";
          props.setValidAdmin();
          props.setHandleLogout();
        }


        setMessage(message);
        window.setTimeout(() => {
          setMessage("");
        }, 3000);
      })
      .catch((err) => {
        console.log("error!");
      });
  }
  return (
    <>
    <div className="container">
      <form className="text-dark bg-primary p-4"
        onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div class="form-group mb-4">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1"
            name="emailId"
            value={user.emailId}
            onChange={handleEmailIdClick}
            aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
        <div class="form-group mb-4">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1"
            name="password"
            value={user.password}
            onChange={handlePasswordClick}
            placeholder="Password" />
        </div>
        {message && <div className="div-message">{message}</div>}
        <button type="submit" class="btn btn-success my-2"
        >Submit</button>
        <button className="btn btn-warning mx-3"
          onClick={handleCancelButtonClickLogin}>
          CANCEL
        </button>
      </form>
      </div>
    </>
  )
}
export default LoginForm