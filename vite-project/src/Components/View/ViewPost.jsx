import { useSelector } from "react-redux";
import "./ViewPost.css";

const ViewPost = ({ id, setShowPopUp }) => {
  const { users } = useSelector((state) => state.app);

  const singleUser = users.filter((user) => user.id === id);
  return (
    <div className="background">
      <div className="container bg-white">
        <button onClick={() => setShowPopUp(false)}>Close</button>
        <h4><span className="fs-2">Name: </span>{singleUser[0].name}</h4>
        <h4><span className="fs-2">Email: </span>{singleUser[0].email}</h4>
        <h4><span className="fs-2">Age: </span>{singleUser[0].age}</h4>
        <h4><span className="fs-2">Gender: </span>{singleUser[0].gender}</h4>
      </div>
    </div>
  );
};

export default ViewPost;
