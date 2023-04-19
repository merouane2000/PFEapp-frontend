import React, { useEffect, useContext } from "react";
import Grid from "@mui/material/Grid";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { AppContext } from "../../../Contexts/AppContext";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import CustomClassDiagramDialog from "../../../compoments/CustomClassDiagramDialog";
import Chip from '@mui/material/Chip';

function SecondPage() {
  const { setStep, userData, tableContent } =
    useContext(AppContext);

    const handleClickchip= () => {
      console.info('You clicked the Chip.');
    };
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

  const handleSubmit = (event) => {
    event.preventDefault();
  };

 

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div style={{ paddingTop: "35px" }}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              style={{ rowGap: "5px" }}
            >
             
            <CustomClassDiagramDialog/>

              <Grid md={4}>
                  <input
                    className="input-log-in"
                    label="ModelName"
                    type="ModelName"
                    name="ModelName"
                    required
                    placeholder="Enter Model Name"
                  />
                </Grid>
                <Grid md={4}>
                  <span
                    style={{
                      fontSize: 20,
                      fontWeight: 400,
                      color: "#393E46",
                      textAlign: "center",
                      paddingRight: "275px",
                    }}
                  >
                    Model Diagram{" "}
                  </span>
                </Grid>
                <Grid md={4}>
                  <select className="Select-input">
                    <option value="Entity Relationship Diagram">
                      Entity Relationship Diagram
                    </option>
                    <option value="Class Diagram (UML)">
                      Class Diagram (UML)
                    </option>
                  </select>
                </Grid>
                <Grid md={4}>
                  <span
                    style={{
                      fontSize: 20,
                      fontWeight: 400,
                      color: "#393E46",
                      textAlign: "center",
                      paddingRight: "300px",
                    }}
                  >
                    Model Type{" "}
                  </span>
                </Grid>
                <Grid md={4}>
                  <select className="Select-input">
                    <option value="Source Model">Source Model</option>
                    <option value="Target Model">Target Model</option>
                  </select>
                </Grid>
            </Grid>
            <div style={{ paddingTop: "10px" }}>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  rowGap={20}
                  columnGap={8.75}
                >
                  <Grid direction="column">
                    <Grid>
                      <span
                        style={{
                          fontSize: 20,
                          fontWeight: 400,
                          color: "#393E46",
                          textAlign: "center",
                        }}
                      >
                        Table Number
                      </span>
                    </Grid>
  
                    <input
                      className="input-create"
                      label="table-number"
                      type="text"
                      name="table-number"
                      required
                      placeholder="Enter number"
                    />
                  </Grid>
                  <Grid direction="column">
                    <Grid>
                      <span
                        style={{
                          fontSize: 20,
                          fontWeight: 400,
                          color: "#393E46",
                          textAlign: "center",
                        }}
                      >
                        Assosiation Number
                      </span>
                    </Grid>
  
                    <input
                      className="input-create"
                      label="assosiation-number"
                      type="text"
                      name="assosiation-number"
                      required
                      placeholder="Enter number"
                    />
                  </Grid>
                </Grid>
                <Chip label={tableContent.name} variant="outlined" onClick={handleClickchip} />
                      </div>
            <div style={{ paddingTop: "40px" }}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                style={{ columnGap: "25px" }}
              >
                <button
                  className="logout-button"
                  onClick={() => {
                    setStep(1);
                  }}
                >
                  <Grid
                    container
                    justifyContent="center"
                    style={{ paddingTop: "20px" }}
                    spacing={2}
                  >
                    <Grid>
                      <NavigateBeforeIcon
                        style={{ paddingLeft: "3px" }}
                        fontSize="small"
                      />
                    </Grid>
                    <Grid>Prev</Grid>
                  </Grid>
                </button>
                <button
                  className="logout-button"
                  onClick={() => {
                    setStep(3);
                  }}
                >
                  <Grid
                    container
                    justifyContent="center"
                    style={{ paddingTop: "20px", paddingLeft: "25px" }}
                    spacing={2}
                  >
                    <Grid>Next</Grid>
                    <Grid>
                      <NavigateNextIcon
                        style={{ paddingLeft: "3px" }}
                        fontSize="small"
                      />
                    </Grid>
                  </Grid>
                </button>
              </Grid>
            </div>
            <Snackbar
              style={{ borderRadius: "30px" }}
              open={open}
              onClose={handleClose}
            >
              {userData.tableNumber != null ? (
                <Alert
                  onClose={handleClose}
                  severity="info"
                  sx={{ width: "100%" }}
                >
                  <span style={{ fontFamily: "Outfit", color: "#EEEEEE" }}>
                    {" "}
                    You have {userData.tableNumber} Table to fill it{" "}
                  </span>
                </Alert>
              ) : (
                <Alert
                  onClose={handleClose}
                  severity="warning"
                  sx={{ width: "100%" }}
                >
                  <span style={{ fontFamily: "Outfit", color: "#EEEEEE" }}>
                    {" "}
                    An initial value must be given to the table number text
                    field{" "}
                  </span>
                </Alert>
              )}
            </Snackbar>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SecondPage;
