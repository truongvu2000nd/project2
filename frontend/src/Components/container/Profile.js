import { React, useState } from "react";
import "./container.css";
import LoginModal from "../loginModal/LoginModal.js";

const Profile = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => {
    setOpenModal(true);
  };

  return (
    <div className="profile">
      <div className="avatar" onClick={handleOpen}>
        <h3 className="avatar_name">Login</h3>
      </div>
      <LoginModal open={openModal} setOpen={setOpenModal} />
    </div>
  );
};

export default Profile;
