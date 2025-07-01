import Form from "./Auth/Form";
function Home() {
  let userId = localStorage.getItem("loggedInUserId");
  function logOut() {
    localStorage.clear();
    window.location.reload();
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h3>Coding is easy and fun</h3>
          {userId == null && (
            <div>
              <a href="/create-account">Signup</a>
              <a href="/login">Login</a>
            </div>
          )}
          {userId != null && (
            <div>
              <button className="btn btn-warning" onClick={(event) => logOut()}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
