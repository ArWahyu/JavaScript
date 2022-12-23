import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoPerson, IoPricetag, IoHome, IoLogOut } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div>
      <aside className="menu pl-2 has-shadow">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/dashboard"}>
              <IoHome /> Dashboard
            </NavLink>
          </li>
          {user && ((user.role === "Personalia")||(user.role==="admin")) && (
          <li>
            <NavLink to={`/products`} >
              <IoPricetag /> Data Karyawan
            </NavLink>
          </li>
          )}
          {user && ((
            user.role === "userAfd1" || "userAfd2" || "userAfd3" || "userAfd4" || "userAfd5" || "userAfd6"
            || "userAfd7" || "userAfd8" || "userAfd9" || "userAfd10" || "userAfd11" || "userAfd12" || "userAfd13"
            || "admin"||"Personalia"
            )) && (
           
          <li>
            <NavLink to={`/karyawanafd`}>
              <IoPricetag /> Karyawan Afdeling
            </NavLink>
          </li>
          )}

          {user && ((
            user.role === "userAfd1" || "userAfd2" || "userAfd3" || "userAfd4" || "userAfd5" || "userAfd6"
            || "userAfd7" || "userAfd8" || "userAfd9" || "userAfd10" || "userAfd11" || "userAfd12" || "userAfd13"
            || "admin" || "Personalia"
            )) && (
           
          <li>
            <NavLink to={`/rkh`}>
              <IoPricetag />RKH Karyawan 
            </NavLink>
          </li>
          )}
         
          
        </ul>
        {user && user.role === "admin" && (
          <div>
            <p className="menu-label">Admin</p>
            <ul className="menu-list">
              <li>
                <NavLink to={"/users"}>
                  <IoPerson /> Users
                </NavLink>
              </li>
            </ul>
          </div>
        )}

        <p className="menu-label">Settings</p>
        <ul className="menu-list">
          <li>
            <button onClick={logout} className="button is-white">
              <IoLogOut /> Logout
            </button>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;