import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../../features/userSlice";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const UpdatePost = () => {
  const { id } = useParams();
  const [updateData, setUpdateData] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users } = useSelector((state) => state.app);

  useEffect(() => {
    if (id) {
      const singleUser = users.filter((elem) => elem.id === id);
      setUpdateData(singleUser[0]);
    }
  }, [id, users]);

  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser(updateData));
    toast.success("User updated")
    navigate("/read");
  };

  return (
    <>
      <form
        className="w-50 mx-auto my-5 border p-4 border-3 border-secondary text-center"
        onSubmit={handleUpdate}
      >
        <h2 className="text-center my-2">Update Your Data</h2>
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
              value={updateData && updateData.name}
              onChange={newData}
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
              value={updateData && updateData.email}
              onChange={newData}
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
              value={updateData && updateData.age}
              onChange={newData}
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
                checked={updateData && updateData.gender === "Male"}
                onChange={newData}
              />
              <label className="form-check-label">Male</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="Female"
                checked={updateData && updateData.gender === "Female"}
                onChange={newData}
              />
              <label className="form-check-label">Female</label>
            </div>
          </div>
        </fieldset>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
     
    </>
  );
};

export default UpdatePost;
