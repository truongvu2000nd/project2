import { React, useState } from "react";
import "./loginModal.css";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

function LoginModal({ open, setOpen }) {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const loginForm = (
    <form className="login-form" onSubmit="#">
      <h1>Login</h1>
      <label>
        Email:
        <br />
        <input
          type="text"
          value={values.email}
          onChange={handleChange('email')}
          placeholder="name@email.com"
        />
      </label>
      <br />
      <label>
        Password:
        <br />
        <input
          type="password"
          value={values.password}
          onChange={handleChange('password')}
          placeholder="Enter your password"
        />
      </label>
      <br />
      <br />
      <input type="submit" value="Login" />
    </form>
  );

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>{loginForm}</Fade>
      </Modal>
    </div>
  );
}

export default LoginModal;
