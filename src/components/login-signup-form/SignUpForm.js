import React, { useState } from 'react';
import axios from "axios";

const SignUpForm = (props) => {

  let [user, setUser] = useState({
    emailId: "",
    name: "",
    password: "",
    
  });
  let [errorUser, setErrorUser] = useState({
    emailId: { message: "", mxLen: 80, mnLen: 5, onlyDigits: false },
    name: { message: "", mxLen: 15, mnLen: 8, onlyDigits: false },
    password: { message: "", onlyDigits: false },
    
  });
  let [flagFormInvalid, setFlagFormInvalid] = useState(false);
  function handleChange(event) {
    let name = event.target.name;
    let userInput;
    let inputType = event.target.type;
    if (inputType == "checkbox") {
      // for checkbox, no checking of validations.
      userInput = event.target.checked;
      setUser({ ...user, [name]: event.target.value });
      return;
    }
    if (inputType == "file") {
      let file = event.target.files[0];
      if (!file) {
        return;
      }
      let fileType = file.type.substring(0, file.type.indexOf("/"));
      let errUser = { ...errorUser };
      let fileName = file.name;

      if (errorUser[name]["imageType"] != fileType) {
        errorUser[`${name}`].message = "Check type of file";
        setErrorUser(errUser);
      } else {
        errorUser[`${name}`].message = "";
        setErrorUser(errUser);
        setUser({ ...user, [name]: event.target.value });
        // setFile(file);
        // setFileName(fileName);
      }
      return;
    }
    setUser({ ...user, [name]: event.target.value });
    isValid(event);
  }
  function handleBlur(event) {
    isValid(event);
  }
  function isValid(event) {
    let i,
      flag,
      name,
      value,
      requiredMessage = " is required",
      type,
      message = "",
      mnLen,
      mxLen,
      onlyDigits,
      allDigits,
      noSymbols;
    name = event.target.name;
    type = event.target.type;
    if (type === "text" || type === "textarea" || type === "password") {
      // check if 'required', also check min no. of characters
      value = event.target.value.trim();
      mnLen = errorUser[`${name}`].mnLen;//8
      mxLen = errorUser[`${name}`].mxLen;//15
      onlyDigits = errorUser[`${name}`].onlyDigits;//false
      allDigits = errorUser[`${name}`].allDigits;
      noSymbols = errorUser[`${name}`].noSymbols;
      if (value.length === 0) {
        message = name + requiredMessage;
      } else if (value.length < mnLen) {
        if (!onlyDigits) message = "Min " + mnLen + " characters allowed";
        else message = "Min " + mnLen + " digits required";
      } //else
      else if (value.length > mxLen) {
        if (!onlyDigits) message = "Maximum " + mxLen + " characters allowed";
        else message = "Maximum " + mxLen + " digits allowed";
      } //else
      else if (onlyDigits) {
        for (let i = value.length - 1; i >= 0; i--) {
          const d = value.charCodeAt(i);
          if (d < 48 || d > 57) {
            message = "Enter only digits";
            break;
          } //if
        } //for
      } //else if... onlyDigits
      else if (noSymbols && !allDigits) {
        let d,
          count = 0;
        for (i = value.length - 1, flag = false; i >= 0; i--) {
          d = value.charCodeAt(i);
          if (d >= 48 && d <= 57) {
            count++; // digits are being counted
          } //if
          if (
            (d >= 97 && d <= 122) ||
            (d >= 65 && d <= 90) ||
            (d >= 48 && d <= 57) ||
            value.charAt(i) == "_"
          ) {
            continue;
          } //if
          else {
            // symbol is there, may be space
            flag = true;
            break;
          }
        } //for
        if (flag == true) {
          let q = String.fromCharCode(d);
          if (d == 32) {
            message = "space is not allowed";
          } else
            message =
              "Symbols other than underscore (_) are not allowed, you have used " +
              q;
        } else {
          if (count == value.length) {
            message = "Only digits are not allowed, use some alphabets also";
          }
        }
      } //else if... noSymbols
      // else if (!allDigits) {
      //   for (i = value.length - 1, flag = false; i >= 0; i--) {
      //     const d = value.charCodeAt(i);
      //     if (d < 48 || d > 57) {
      //       message = "";
      //       flag = true;
      //       break;
      //     } //if
      //   } //for
      //   if (flag == false) {
      //     message = "Only digits are not allowed, use some alphabets also";
      //   }
      // } //else if... allDigits
      else {
        message = "";
      }
    } //if... text || textarea
    else if (event.target.type === "select-one") {
      value = event.target.selectedIndex;
      if (value == 0) {
        message = name + requiredMessage;
      } else {
        message = "";
      }
    } //else if
    else if (type === "email") {
      value = event.target.value.trim();
      if (/\S+@\S+\.\S+/.test(value) == 0) {
        message = "valid email-id " + requiredMessage;
      } else {
        message = "";
      }
    } //else if
    else {
      message = "";
    }
    let errUser = { ...errorUser };
    errorUser[`${name}`].message = message;
    setErrorUser(errUser);
    checkAllErrors();
  }
  function handleFocus(event) {
    checkAllErrors();
  }
  function checkAllErrors() {
    for (let field in errorUser) {
      if (errorUser[field].message !== "") {
        setFlagFormInvalid(true);
        return;
      } //if
    } //for
    setFlagFormInvalid(false);
  }
   
    let [message, setMessage] = useState("");
    function handleCancelButtonClick() {
        props.onCancelButtonClick();
         }
   
    function handleChangeClick(event) {
          setUser({ ...user, [event.target.name]: event.target.value });
           }
        function handleSubmit(event) {
        // pass data of User object to parent
        event.preventDefault();
            // props.onSubmitForm(user);
            // console.log(user);
            axios.post("/user/addUser", user, {
                headers: {
                  accept: "application/json",
                  "Accept-Language": "en-US,en;q=0.8",
                },
              })
              .then((res) => {
                setMessage("signup successfull");
                window.setTimeout(() => {
                setMessage("");
                }, 3000);
                })
              .catch((err) => {
                console.log("error!");
              });
         }
return(
    <>
    <div className="container">
<form className="text-dark bg-primary p-4"
onSubmit={handleSubmit}>
{message && <div className="div-message">{message}</div>}
     <h2>Signup</h2>
{/* row starts */}
<div className="form-group row align-items-center">
<div className="col-5 form-label mb-2">
<label>EmailId</label>
</div>
<div className="col-7 px-0 mb-2">
<input
type="email"
className="form-control"
name="emailId"
value={user.emailId}
onChange={handleChangeClick}

placeholder="Enter EmailId"
required
/>
</div>

</div>
{/* row ends */}
{/* row starts */}
<div className="form-group row align-items-center">
<div className="col-5 form-label mb-2">
<label>Name</label>
</div>
<div className="col-7 px-0 mb-2">
<input
type="text"
className="form-control"
name="name"
value={user.name}
onChange={handleChange}
onBlur={handleBlur}
onFocus={handleFocus}
placeholder="Enter Name"
/>
</div>
<div className="offset-5">
            {errorUser.name.message && (
              <span className="error-text">
                {errorUser.name.message}
              </span>
            ) }
          </div>
</div>
{/* row ends */}

{/* row starts */}
<div className="form-group row align-items-center">
<div className="col-5 form-label mb-2">
<label>Password</label>
</div>
<div className="col-7 px-0 mb-2">
<input
type="text"
className="form-control"
name="password"
value={user.password}
placeholder="Enter Password"
onChange={handleChange}
/>
</div>
</div>
{/* row ends */}
{/* row starts */}
<div className="form-group offset-5 text-center mb-0">
<button className="btn btn-light" type="submit">
Ok
</button>
&nbsp;&nbsp;&nbsp;
<button className="btn btn-light"
onClick={handleCancelButtonClick}>
CANCEL
</button>
</div>
</form>
</div>
</>
)
}

export default SignUpForm
