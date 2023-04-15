import React, {  useEffect } from "react";
import Grid from "@mui/material/Grid";
import LogoutIcon from "@mui/icons-material/Logout";
import myImage from "../../write-1727488.svg";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const username = sessionStorage.getItem("userName");
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
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

  useEffect(() => {
    handleClick();
  }, []);
  const handleReset = () => {
    navigate("/");
    sessionStorage.clear();
  };
  const handelNavigationToCreate = () => {
    navigate("/admin-dashboard/main-create");
  };

  return (
    <div>
      <Grid container>
        <Grid container justifyContent="space-between">
          <Grid style={{ paddingTop: "50px", paddingLeft: "75px" }}>
            <span
              style={{
                fontSize: 34,
                fontWeight: 500,
                color: "#393E46",
                textAlign: "center",
              }}
            >
              Hi, “{username}”
            </span>
          </Grid>
          <Grid
            justifyContent="center"
            style={{ paddingTop: "18px", paddingRight: "25px" }}
          >
            <button className="logout-button" onClick={handleReset}>
              <Grid
                container
                justifyContent="center"
                style={{ paddingTop: "20px", paddingLeft: "15px" }}
                spacing={2}
              >
                <Grid>Logout</Grid>
                <Grid>
                  <LogoutIcon style={{ paddingLeft: "3px" }} fontSize="small" />
                </Grid>
              </Grid>
            </button>
          </Grid>
        </Grid>
      </Grid>

      <div>
        <Grid container justifyContent="center">
          <span
            style={{
              fontSize: 34,
              fontWeight: 500,
              color: "#393E46",
              paddingTop: "30px",
            }}
          >
            You Can{" "}
          </span>
        </Grid>
      </div>
      <div>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          style={{ paddingTop: "30px" }}
        >
          <Grid>
            <Grid container direction="column">
              <span
                style={{
                  fontSize: 34,
                  fontWeight: 500,
                  color: "#393E46",
                  paddingTop: "30px",
                  paddingLeft: "53px",
                }}
              >
                Create{" "}
              </span>

              <div className="rectangle-button">
                <div className="rectangle">
                  <img src={myImage} width="200" height="250" />
                </div>
                <div className="justify-button">
                  <button className="project-button" onClick={handelNavigationToCreate}> Projects</button>
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid>
            <Grid container direction="column">
              <span
                style={{
                  fontSize: 34,
                  fontWeight: 500,
                  color: "#393E46",
                  paddingTop: "30px",
                }}
              >
                Collaborate in{" "}
              </span>

              <div className="rectangle-button">
                <div className="rectangle">
                  {/* <img src={myImage1} width="200" height="250"/> */}
                </div>
                <div className="justify-button">
                  <button className="project-button"> Projects</button>
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid>
            <Grid container direction="column">
              <span
                style={{
                  fontSize: 34,
                  fontWeight: 500,
                  color: "#393E46",
                  paddingTop: "30px",
                  paddingLeft: "30px",
                }}
              >
                Search in{" "}
              </span>

              <div className="rectangle-button">
                <div className="rectangle">
                  {/* <img src={Icon} width="200" height="250" /> */}
                </div>
                <div className="justify-button">
                  <button className="project-button"> Projects</button>
                </div>
              </div>
            </Grid>
          </Grid>

          <Snackbar
            style={{ borderRadius: "30px" }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
              <span style={{ fontFamily: "Outfit", color: "#EEEEEE" }}>
                {" "}
                You have logged in successfully{" "}
              </span>
            </Alert>
          </Snackbar>
        </Grid>
      </div>
    </div>
  );
}
export default Dashboard;
