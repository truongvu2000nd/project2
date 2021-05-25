import { React, useState, useEffect } from "react";
import "./container.css";
import LoginModal from "../loginModal/LoginModal.js";

const Profile = ({isLogin, setIsLogin}) => {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("access_token") !== null) {
      setIsLogin(true);
    }
  })

  const handleOpen = () => {
    setOpenModal(true);
  };
  if (!isLogin) {
    return (
      <div className="profile">
        <div className="avatar" onClick={handleOpen}>
          <h3 className="avatar_name">Login</h3>
        </div>
        <LoginModal open={openModal} setOpen={setOpenModal} setIsLogin={setIsLogin} />
      </div>
    );
  } else {
    return (
      <div className="profile">
        <div
          className="avatar"
          onClick={() => {
            localStorage.clear();
            setIsLogin(false);
          }}
        >
          <h3 className="avatar_name">Logout</h3>
        </div>
      </div>
    );
  }
};

export default Profile;
