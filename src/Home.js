import Form from "./Auth/Form";
function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h3>Coding is easy and fun</h3>
          <div>
            <a href="/login">Login</a> <br />
            <a href="/create-account">Signup</a>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
