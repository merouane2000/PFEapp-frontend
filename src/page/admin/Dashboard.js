import React ,{useEffect}from "react";
import Grid from "@mui/material/Grid";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import Badge from '@mui/material/Badge';
import Popper from '@mui/material/Popper';
import axios from "axios";
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
const notificationEdit = localStorage.getItem("selectedModel");

const [invisible, setInvisible] = React.useState(false);
const [metaModelEdit, setMetaModelEdit] = React.useState();
const [userEdit, setUserEdit] = React.useState();
const changes = localStorage.getItem("changedModel")



//   e.preventDefault();
//   const contexObj = {
//     name: values.entityName,
//     cardinality: values.cardinalty,
//     attributes: attributeSet,
//   };
//   setEntityContent(contexObj);
//   setEntitiesContent([...entitiesContent, entityContent])

//   try {
//     const response = await axios.post(
//       "http://localhost:4000/entity-create",
//       {
//         attributeData: attributeSet,
//         name:values.entityName,
//         cardinality:values.cardinalty,
//         metaModel_ID: metaModel_id

//       }
//     );
//     if (response.data.isCreate) {
//       console.log("succuss to create Entities")
//       handleClick()  
//       setopenDialog(false);

//     }
//   } catch (error) {
//     console.error(error);
//   }
// };

useEffect(() => {
  async function getTableData() {
    const response = await axios.post("http://localhost:4000/get-edited-models",{notificationEdit});
    console.log(response.data);
    setMetaModelEdit(response.data.EditedModel)
    setUserEdit(response.data.EditedUser)
 
  }
  getTableData();
}, []);

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
     <Paper style={{width:" 315px",height: "170px" , paddingTop:"8px",paddingLeft:"8px" ,borderRadius:"10px" }}>

     <div style={{ paddingTop:"10px"}}>
        The user “{userEdit[0].fullname}”  has viewed or reused your metaModel “{metaModelEdit[0].name}”
        </div>
     
      <div style={{ paddingTop:"10px",     paddingRight:"8px"}}>
      <hr
      style={{
        height: "1px",
        background: "black"
      }}
      />
      </div>
  <div  style={{ paddingLeft:"84px"}}>Changes He Made</div>
  <div style={{ paddingTop:"10px"}}>
    {changes}

  </div>
      
  
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
