import { React, useState } from "react";
import "./container.css";
import LoginModal from "../loginModal/LoginModal.js";

const Profile = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => {
    setOpenModal(true);
  };

  return (
    <div>
      <div className="avatar" onClick={handleOpen}>
        {/* <img
          width="24px"
          height="24px"
          src="http://hinhnendephd.com/wp-content/uploads/2019/10/anh-avatar-dep.jpg"
          alt="loading"
        ></img> */}
        <h3 className="avatar_name">Login</h3>
      </div>
      <LoginModal open={openModal} setOpen={setOpenModal} />
    </div>
  );
};

export default Profile;
