import React from "react";
import Grid from "@mui/material/Grid";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
function Dashboard() {
  
const navigate = useNavigate();
const username = sessionStorage.getItem("userName");


  const handleReset = () => {
    navigate("/");
    sessionStorage.clear();
  };
  const handelNavigationToCreate = () => {
    navigate("/admin-dashboard/main-create");
  };
  const handelNavigationToSearch = () => {
    navigate("/admin-dashboard/main-search");
  };
  const handelNavigationToCollaborate = () => {
    navigate("/admin-dashboard/main-collaborate");
  };

  return (
    <div>
      <Grid container>
        <Grid container justifyContent="space-between">
          <Grid style={{ paddingTop: "80px", paddingLeft: "75px" }}>
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
              paddingTop: "35px",
            }}
          >
            Share us your knowledge, You Can{" "}
          </span>
        </Grid>
      </div>
      <div>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          style={{ paddingTop: "50px" }}
        >
          <Grid>
            <Grid container direction="column">
              <span
                style={{
                  fontSize: 34,
                  fontWeight: 500,
                  color: "#393E46",
                  paddingTop: "30px",
                  paddingLeft: "72px",
                }}
              >
                Create{" "}
              </span>

              <Grid style={{ paddingTop: "15px" }}>
                <button
                  className="project-button"
                  onClick={handelNavigationToCreate}
                >
                  {" "}
                  Projects
                  <Grid style={{ paddingTop: "25px" }}>
                    {" "}
                    <BorderColorRoundedIcon fontSize="large" />
                  </Grid>
                </button>
              </Grid>
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
                  paddingLeft: "19px",
                }}
              >
                Collaborate in{" "}
              </span>

              <Grid style={{ paddingTop: "15px" }}>
                <button className="project-button" onClick={handelNavigationToCollaborate}>
                  {" "}
                  Projects
                  <Grid style={{ paddingTop: "25px" }}>
                    <Diversity2Icon fontSize="large" />
                  </Grid>
                </button>
              </Grid>
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
                  paddingLeft: "51px",
                }}
              >
                Search in{" "}
              </span>
              <Grid style={{ paddingTop: "15px" }}>
                <button className="project-button" onClick={handelNavigationToSearch}>
                  {" "}
                  Projects
                  <Grid style={{ paddingTop: "25px" }}>
                    <SearchRoundedIcon fontSize="large" />
                  </Grid>
                </button>
              </Grid>
            </Grid>
          </Grid>
          
        </Grid>
      </div>
    </div>
  );
}
export default Dashboard;
