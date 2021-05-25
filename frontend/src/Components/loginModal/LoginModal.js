import { React, useState } from "react";
import "./loginModal.css";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import axios from "axios";
import Cookies from "js-cookie";

function LoginModal({ open, setOpen, setIsLogin }) {
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

  const handleLogin = () => {
    const csrftoken = Cookies.get("csrftoken");
    axios
      .post(
        "api/login/",
        {
          email: values.email,
          password: values.password,
        },
        { headers: { "X-CSRFToken": csrftoken } }
      )
      .then((response) => {
        // localStorage.setItem("id", response.data.id);
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("refresh_token", response.data.refresh_token);
        setIsLogin(true);
        // return response;
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
    setValues({
      email: "",
      password: "",
    });
  };

  const loginForm = (
    <form
      className="login-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleClose();
        handleLogin();
        // window.location.reload();
      }}
    >
      <h1>Login</h1>
      <label>
        Email:
        <br />
        <input
          type="text"
          value={values.email}
          onChange={handleChange("email")}
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
          onChange={handleChange("password")}
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
