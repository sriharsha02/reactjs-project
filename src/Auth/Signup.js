import { useState } from "react";
import { validateEmail } from "../Utils/utils";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pword, setPword] = useState("");
  const [mobile, setMobile] = useState("");

  //error variables

  const [nameError, setNameError] = useState("");

  const [emailError, setEmailError] = useState("");

  const [mobileError, setMobileError] = useState("");

  const [pwordError, setPwordError] = useState("");

  const [apiErrorMsg, setApiErrorMsg] = useState("");

  const [apiSuccessMsg, setApiSuccessMsg] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePwordChange(e) {
    setPword(e.target.value);
  }
  function handleMobileChange(e) {
    setMobile(e.target.value);
  }
  async function handleCreateAccount() {
    let noOfErrors = 0;
    if (name.length < 3) {
      setNameError("Min 3 characters");
      noOfErrors++;
    } else {
      setNameError("");
    }
    if (validateEmail(email)) {
      setEmailError("");
    } else {
      setEmailError("Email is not valid");
      noOfErrors++;
    }
    if (mobile.length === 10) {
      setMobileError("");
    } else {
      setMobileError("Mobile number is invalid");
      noOfErrors++;
    }
    if (pword.length >= 8) {
      setPwordError("");
    } else {
      setPwordError("Min 8 characters");
      noOfErrors++;
    }
    if (noOfErrors === 0) {
      console.log("Calling api", noOfErrors);

      let apiInputData = {
        email: email,
        name: name,
        password: pword,
        mobile: mobile,
      };
      let apiResponse = await axios.post(
        "https://api.softwareschool.co/auth/signup",
        apiInputData
      );
      console.log(apiResponse.data);
      if (apiResponse.data.result == "SUCCESS") {
        setApiSuccessMsg(apiResponse.data.message);
        setApiErrorMsg("");
      } else {
        setApiErrorMsg(apiResponse.data.message);
        setApiSuccessMsg("");
      }
    }
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h3>Create your Account</h3>
          <div className="mt-3 mb-3">
            <label htmlFor="">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              onChange={(e) => {
                handleNameChange(e);
              }}
            />
            <div className="text-danger">{nameError}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="">Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              onChange={(e) => {
                handleEmailChange(e);
              }}
            />
            <div className="text-danger">{emailError}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(e) => {
                handlePwordChange(e);
              }}
            />
            <div className="text-danger">{pwordError}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="">Mobile</label>
            <input
              type="text"
              className="form-control"
              placeholder="Mobile"
              onChange={(e) => {
                handleMobileChange(e);
              }}
            />
            <div className="text-danger">{mobileError}</div>
          </div>
          <div>
            <button
              className="btn btn-warning"
              onClick={(e) => {
                handleCreateAccount();
              }}
            >
              Create Account
            </button>
          </div>
          <div>
            <a href="/login">Login</a> <br />
            <a href="/">Home</a>
          </div>
          <div className="mt-3">
            <div className="alert alert-danger">{apiErrorMsg}</div>
            <div className="alert alert-success">{apiSuccessMsg}</div>
          </div>
          {name} <br />
          {email} <br />
          {pword} <br />
          {mobile}
        </div>
      </div>
    </div>
  );
}

export default Signup;
