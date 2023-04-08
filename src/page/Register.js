import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../App.css";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const InitialValues = {
  fullname: "",
  username: "",
  email: "",
  password: "",
};
function Register() {
  const [values, setValues] = useState(InitialValues);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/user/create", {
        formInfo: values,
      });
      console.log(response.data);
      navigate("/admin-dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div style={{ paddingTop: "50px" }}>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            style={{ width: "1350px", paddingRight: "50px" }}
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
                Register
              </span>
            </Grid>
          </Grid>
        </div>

        <div style={{ paddingTop: "60px" }}>
          <Grid
            container
            spacing={1}
            direction="column"
            justify="center"
            alignItems="center"
            style={{ width: "1366px" }}
          >
            <Grid container style={{ paddingRight: "27px" }} columnSpacing={1}>
              <Grid container direction="column">
                <Grid md={12}>
                  <span
                    style={{
                      fontSize: 24,
                      fontWeight: 400,
                      color: "#393E46",
                      textAlign: "center",
                    }}
                  >
                    Full name{" "}
                  </span>
                </Grid>
                <Grid md={2}>
                  <input
                    className="input-register"
                    label="fullname"
                    type="text"
                    name="fullname"
                    required
                    onChange={handleChange}
                    placeholder="Enter your full name"
                  />
                </Grid>
              </Grid>
              <Grid container direction="column">
                {" "}
                <Grid md={2}>
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
                <Grid md={2}>
                  <input
                    className="input-register"
                    label="username"
                    type="text"
                    name="username"
                    required
                    onChange={handleChange}
                    placeholder="Enter your username"
                  />
                </Grid>
              </Grid>
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
                Email{" "}
              </span>
            </Grid>
            <Grid md={4}>
              <input
                className="input-log-in"
                label="email"
                type="email"
                name="email"
                required
                onChange={handleChange}
                placeholder="Enter your email"
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

          <div style={{ paddingTop: "30px" }}>
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
                    spacing={2}
                    alignItems="center"
                  >
                    <Grid> Create account</Grid>
                    <Grid>
                      <PersonAddIcon style={{ paddingTop: "5px" }} />
                    </Grid>
                  </Grid>
                </button>
              </Grid>
            </Grid>
          </div>
          <div style={{ paddingTop: "40px" }}>
            <Grid
              container
              justifyContent="center"
              style={{ paddingLeft: "170px" }}
            >
              <Grid>
                <span
                  style={{
                    color: "#393E46",
                    textAlign: "center",
                  }}
                >
                  Already have an account?{" "}
                  <span style={{ fontWeight: "700" }}>
                    <Link
                      to="/login"
                      style={{ textDecoration: "none", color: "#393E46" }}
                    >
                      LogIn
                    </Link>
                  </span>{" "}
                </span>
              </Grid>
            </Grid>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
