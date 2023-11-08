import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { searchUser } from "../../features/userSlice";

const Navbar = () => {
  const allUSersCount = useSelector((state) => state.app.users);
  const dispatch = useDispatch();
  const [searchData, setSearchData] = useState("");
  useEffect(() => {
    dispatch(searchUser(searchData));
  }, [searchData, dispatch]);
  return (
    <>
      <nav className="navbar navbar-expand-md bg-secondary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Post App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-md-0 gap-md-4">
              <li className="nav-item">
                <NavLink
                  to="/"
                  style={{ textDecoration: "none" }}
                  className={({ isActive }) =>
                    `fw-bold  ${isActive ? "text-black" : "text-body-tertiary"}`
                  }
                >
                  Create Post
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/read"
                  style={{ textDecoration: "none" }}
                  className={({ isActive }) =>
                    `fw-bold  ${isActive ? "text-black" : "text-body-tertiary"}`
                  }
                >
                  All Posts ({allUSersCount.length})
                </NavLink>
              </li>
            </ul>
            <input
              className="form-control me-2 w-50"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setSearchData(e.target.value)}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
