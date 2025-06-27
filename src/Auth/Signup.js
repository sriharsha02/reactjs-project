import { useState } from "react";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pword, setPword] = useState("");
  const [mobile, setMobile] = useState("");

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
  function handleSubmitData() {
    console.log(name, email, pword, mobile);
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
          </div>
          <div className=" mb-3">
            <label htmlFor="">Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              onChange={(e) => {
                handleEmailChange(e);
              }}
            />
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
          </div>
          <div>
            <button
              className="btn btn-warning"
              onClick={(e) => {
                handleSubmitData();
              }}
            >
              Create Account
            </button>
          </div>
          <div>
            <a href="/login">Login</a> <br />
            <a href="/">Home</a>
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
