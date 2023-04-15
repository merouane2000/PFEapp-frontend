import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";
import LoginIcon from "@mui/icons-material/Login";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const InitialValues = {
  username: "",
  password: "",
};
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function SignIn() {
  const [values, setValues] = useState(InitialValues);
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(values);
    try {
      const response = await axios.post("http://localhost:4000/user/login", {
        formInfo: values,
      });
      if (response.data.isAuth) {
        navigate("/admin-dashboard");
        console.log(response.data);
        sessionStorage.setItem("userID", response.data.userID);
        sessionStorage.setItem("userName", response.data.username);
      } else {
        handleClick();
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} method="POST">
        <div style={{ paddingTop: "50px" }}>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            style={{ width: "1350px", paddingRight: "15px" }}
          >
            <Grid md={1}>
              <span
                style={{
                  fontSize: 34,
                  fontWeight: 700,
                  color: "#393E46",
                  textAlign: "center",
                }}
              >
                Log In
              </span>
            </Grid>
          </Grid>
        </div>

        <div style={{ paddingTop: "50px" }}>
          <Grid
            container
            spacing={1}
            direction="column"
            justify="center"
            alignItems="center"
            style={{ width: "1366px" }}
          >
            <Grid md={4}>
              <span
                style={{
                  fontSize: 24,
                  fontWeight: 400,
                  color: "#393E46",
                  textAlign: "center",
                }}
              >
                Username{" "}
              </span>
            </Grid>
            <Grid md={4}>
              <input
                className="input-log-in"
                label="username"
                type="text"
                name="username"
                required
                onChange={handleChange}
                placeholder="Enter your username"
              />
            </Grid>
            <Grid md={4}>
              <span
                style={{
                  fontSize: 24,
                  fontWeight: 400,
                  color: "#393E46",
                  textAlign: "center",
                }}
              >
                Password{" "}
              </span>
            </Grid>
            <Grid md={4}>
              <input
                className="input-log-in"
                label="username"
                type="password"
                name="password"
                required
                onChange={handleChange}
                placeholder="Enter your password"
              />
            </Grid>
          </Grid>
          <div>
            <Grid
              container
              spacing={8}
              justifyContent="center"
              alignItems="center"
              style={{
                width: "1366px",
                marginRight: "0px",
                marginBottom: "0px",
                marginLeft: "0px",
                marginTop: "0px",
              }}
            >
              <Grid md={2}>
                <label>
                  <input type="checkbox" checked="true" />
                  <span
                    style={{
                      color: "#393E46",
                      textAlign: "center",
                    }}
                  >
                    Rremember me{" "}
                  </span>
                </label>
              </Grid>
              <Grid md={2}>
                <span
                  style={{
                    color: "#393E46",
                    textAlign: "center",
                  }}
                >
                  Froget Password?{" "}
                </span>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              style={{ paddingRight: "35px" }}
            >
              <Grid justifyContent="center">
                <button className="my-button" type="submit">
                  <Grid
                    container
                    justifyContent="center"
                    style={{ paddingTop: "6px" }}
                    spacing={2}
                  >
                    <Grid>Log In</Grid>
                    <Grid>
                      <LoginIcon />
                    </Grid>
                  </Grid>
                </button>

                <Snackbar
                  style={{ borderRadius: "30px" }}
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose}
                >
                  <Alert
                    onClose={handleClose}
                    severity="error"
                    sx={{ width: "100%" }}
                  >
                    <span style={{ fontFamily: "Outfit", color: "#EEEEEE" }}>
                      {" "}
                      The username and password don't match{" "}
                    </span>
                  </Alert>
                </Snackbar>
              </Grid>
            </Grid>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
