import { useState } from "react";

function Form() {
  const [course, setCourse] = useState("");
  const [gender, setGender] = useState("");
  const [avatar2, setAvatar2] = useState(false);
  const [terminator, setTerminator] = useState(false);
  const [terminator2, setTerminator2] = useState(false);

  function handleCourse(e) {
    setCourse(e.target.value);
  }

  function handleGender(e) {
    setGender(e.target.value);
  }
  function handleAvatar2(e) {
    if (e.target.checked === true) {
      console.log(e.target.checked);
      setAvatar2(true);
    } else {
      setAvatar2(false);
    }
  }
  function handleTerminator(e) {
    if (e.target.checked === true) {
      setTerminator(true);
    } else {
      setTerminator(false);
    }
  }
  function handleTerminator2(e) {
    if (e.target.checked === true) {
      setTerminator2(true);
    } else {
      setTerminator2(false);
    }
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h3 className="text-success">Form Data</h3>
          <div>
            <label htmlFor="">Courses</label>
            <select
              name=""
              id=""
              className="form-select"
              onChange={(event) => handleCourse(event)}
            >
              <option value="ReactJS">ReactJS</option>
              <option value="Java">Java</option>
              <option value="Python">Python</option>
              <option value="Data Science">Data Science</option>
            </select>
          </div>
          <div>
            <label htmlFor="">Gender</label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              value="Male"
              className="form-check-input"
              name="gender"
              onChange={(event) => handleGender(event)}
            />

            <label htmlFor="" className="form-check-label">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              value="Female"
              className="form-check-input"
              name="gender"
              onChange={(event) => handleGender(event)}
            />

            <label htmlFor="" className="form-check-label">
              Female
            </label>
          </div>
          <div>
            <label htmlFor="">Favourite Movie</label>
          </div>
          <div className="form-check">
            <div>
              <input
                type="checkbox"
                className="form-check-input"
                value="Avatar2"
                onChange={(event) => handleAvatar2(event)}
              />
              <label htmlFor="" className="form-check-label">
                Avatar 2
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                className="form-check-input"
                value="Terminator"
                onChange={(event) => handleTerminator(event)}
              />
              <label htmlFor="" className="form-check-label">
                Terminator
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                className="form-check-input"
                value="Terminator 2"
                onChange={(event) => handleTerminator2(event)}
              />
              <label htmlFor="" className="form-check-label">
                Terminator 2
              </label>
            </div>
          </div>
          <div className="mt-3 ">
            Course: {course} <br />
            Gender: {gender} <br />
            Avatar2 : {avatar2.toString()} <br />
            Terminator: {terminator.toString()} <br />
            Terminator2: {terminator2.toString()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
