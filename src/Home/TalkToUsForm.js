function TalkToUsForm({ message }) {
  return (
    <div className="container">
      <div>
        <h3 className="text-danger">{message}</h3>
      </div>
      <div className="mt-3 mb-3">
        <label htmlFor="" className="form-label">
          Name
        </label>
        <input type="text" placeholder="Name" className="form-control" />
      </div>
      <div className=" mb-3">
        <label htmlFor="" className="form-label">
          Email
        </label>
        <input type="text" placeholder="Email" className="form-control" />
      </div>
      <div className=" mb-3">
        <label htmlFor="" className="form-label">
          Mobie
        </label>
        <input type="text" placeholder="Mobile" className="form-control" />
      </div>
      <div className="mb-3">
        <button className="btn btn-warning">Submit</button>
      </div>
    </div>
  );
}

export default TalkToUsForm;
