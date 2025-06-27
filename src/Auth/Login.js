import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [pword, setPword] = useState("");
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePwordChange(e) {
    setPword(e.target.value);
  }

  function handleLoginData() {
    console.log(email, pword);
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h3>Login Here</h3>
          <div className="mt-3 mb-3">
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
          <div className="mb-4">
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
          <div className="mb-4">
            <button
              className="btn btn-warning"
              onClick={(e) => {
                handleLoginData();
              }}
            >
              Login
            </button>
          </div>
          <div>
            <a href="/create-account">Signup</a> <br />
            <a href="/">Home</a>
          </div>
          {email} <br />
          {pword}
        </div>
      </div>
    </div>
  );
}

export default Login;
