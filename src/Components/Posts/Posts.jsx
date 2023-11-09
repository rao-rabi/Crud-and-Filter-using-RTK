import { useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { showUser, deleteUser } from "../../features/userSlice";
import ViewPost from "../View/ViewPost";
import { Link } from "react-router-dom";
import { MoonLoader } from "react-spinners";

const Posts = () => {
  const dispatch = useDispatch();
  const [showPopUp, setShowPopUp] = useState(false);
  const [id, setId] = useState();
  const [radioData, setRadioData] = useState("");
  const { users, searchData, loading } = useSelector((state) => state.app);
  useEffect(() => {
    dispatch(showUser());
  }, [dispatch]);

  const override = {
    position: 'absolute',
    top: '45%',
    left: '45%',
  };

  if(loading) {
    return <MoonLoader color="green"  
    loading={loading}
    cssOverride={override}
    size={100}
    />
  }
  return (
    <div>
      {showPopUp && (
        <ViewPost id={id} showPopUp={showPopUp} setShowPopUp={setShowPopUp} />
      )}
      <h2 className="text-center my-4">Read Posts</h2>
      <div className="d-flex justify-content-center gap-5">
      <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value=""
                checked = {radioData === ""}
                onChange={(e) => setRadioData(e.target.value)}
              />
              <label className="form-check-label">All</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="Male"
                onChange={(e) => setRadioData(e.target.value)}
              />
              <label className="form-check-label">Male</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="Female"
                onChange={(e) => setRadioData(e.target.value)}
              />
              <label className="form-check-label">Female</label>
            </div>
          </div>
      {users &&
        users
          .filter((ele) => {
            if (searchData.length === 0) {
              return ele;
            } else {
              return ele.name.toLowerCase().includes(searchData.toLowerCase());
            }
          }).filter((ele) => {
            if(radioData === 'Male'){
              return ele.gender === radioData;
            }
            else if(radioData === 'Female'){
              return ele.gender === radioData;
            }
            else return ele;
          })
          .map((user) => (
            <div className="card mx-auto my-4 text-center" style={{width:'90vw'}} key={user.id}>
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">
                  <span className="fw-medium fs-6">Email:</span> {user.email}
                </p>
                <p className="card-text">
                  <span className="fw-medium fs-6">Gender:</span> {user.gender}
                </p>
                <div className="d-flex gap-5 justify-content-center">
                  <button onClick={() => [setId(user.id), setShowPopUp(true)]}>
                    View
                  </button>
                  <Link to={`/update/${user.id}`}>
                    <button>Edit</button>
                  </Link>
                  <button onClick={() => dispatch(deleteUser(user.id))}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
};

export default Posts;
