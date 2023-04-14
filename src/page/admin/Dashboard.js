import Grid from "@mui/material/Grid";
import LogoutIcon from "@mui/icons-material/Logout";
import myImage from '../../write-1727488.svg';
import myImage1 from '../../magnifier-1724298.svg';

function Dashboard() {
  const username = sessionStorage.getItem("userName");

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
            <button className="logout-button">
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
                  paddingLeft:"53px"
                }}
              >
                Create{" "}
              </span>

              <div className="rectangle-button">
                <div className="rectangle">
                 <img src={myImage} width="200" height="250"/>
                
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
                }}
              >
                Collaborate in  {" "}
              </span>

              <div className="rectangle-button">
                <div className="rectangle">
                {/* <img src={} width="200" height="250"/> */}
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
                  paddingLeft:"30px"
                }}
              >
                Search in  {" "}
              </span>

              <div className="rectangle-button">
                <div className="rectangle">
                    <img src={myImage1} width="200" height="250"/>
                </div>
                <div  className="justify-button">
                  <button className="project-button"> Projects</button>
                </div>
              </div>
            </Grid>
          </Grid>

        
        
        </Grid>
      </div>
    </div>
  );
}
export default Dashboard;
