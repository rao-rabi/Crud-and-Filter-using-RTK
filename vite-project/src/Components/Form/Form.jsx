import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [users, setUsers] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getUSerData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("users...", users);
    dispatch(createUser(users));
    navigate("/read")
  };
  return (
    <>
      <form className="w-50 mx-auto my-5 border p-4 border-3 border-secondary text-center" onSubmit={handleSubmit}>
        <h2 className="text-center">Fill the Form</h2>
        <div className="row mb-3">
          <label htmlFor="inputName" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputName"
              name="name"
              onChange={getUSerData}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="inputEmail3"
              name="email"
              onChange={getUSerData}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputAge" className="col-sm-2 col-form-label">
            Age
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputAge"
              name="age"
              onChange={getUSerData}
            />
          </div>
        </div>
        <fieldset className="row mb-3">
          <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
          <div className="col-sm-10 d-flex gap-5">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="Male"
                onChange={getUSerData}
              />
              <label className="form-check-label">Male</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="Female"
                onChange={getUSerData}
              />
              <label className="form-check-label">Female</label>
            </div>
          </div>
        </fieldset>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
