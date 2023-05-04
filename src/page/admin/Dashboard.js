import React from "react";
import Grid from "@mui/material/Grid";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import Badge from '@mui/material/Badge';
import Popper from '@mui/material/Popper';

import Fade from '@mui/material/Fade';
import Paper from "@mui/material/Paper";
function Dashboard() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setInvisible(true)
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  
const navigate = useNavigate();
const username = sessionStorage.getItem("userName");
const [invisible, setInvisible] = React.useState(false);


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
      <div style={{ paddingTop: "18px", paddingLeft: "1200px" }}>
        <Grid container direction="row">
          <Grid style={{paddingRight:"10px"}}>
             <button aria-describedby={id} className="logout-button" style={{width:"40px"}}  onClick={handleClick}>
             <Badge  variant="dot" invisible={invisible} color="error">
             <div style={{paddingTop:"4px"}}>

                  <NotificationsActiveRoundedIcon fontSize="small" />
             </div>
          
             </Badge>
            </button>
          </Grid>
          <Popper id={id} open={open} anchorEl={anchorEl} transition placement="bottom-end">
  {({ TransitionProps }) => (
    <Fade {...TransitionProps} timeout={350}>
      <Paper style={{width:" 315px",height: "415px" , paddingTop:"8px",paddingLeft:"8px" ,borderRadius:"10px"}}>
        The content of the Popper.
      </Paper>
    </Fade>
  )}
</Popper>
          <Grid>
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
   
        {/* <button className="logout-button" onClick={handleReset}>
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
            </button> */}
    
      </div>
    

      <div>
      <Grid style={{ paddingTop: "30px", paddingLeft: "75px" }}>
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
      </div>

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
