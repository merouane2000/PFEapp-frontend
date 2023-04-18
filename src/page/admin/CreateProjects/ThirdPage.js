import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { AppContext } from "../../../Contexts/AppContext";

function ThirdPage() {
  const { setStep, userData, setUserData,submitData } = useContext(AppContext);

    return (
        <div>
      
        <div>
          <form>
            <div style={{ paddingTop: "35px" }}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                style={{ rowGap: "5px" }}
              >
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
                    Model Name{" "}
                  </span>
                </Grid>
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
              </div>
              <div style={{ paddingTop: "40px" }}>
                <Grid container direction="row" justifyContent="center" style={{columnGap:"25px"}}>
                <button className="logout-button" onClick={()=>{setStep(2)}}>
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
                  <button className="logout-button" onClick={submitData}>
                    <Grid
                      container
                      justifyContent="center"
                      style={{ paddingTop: "20px", paddingLeft: "20px" }}
                      spacing={2}
                    >
                      <Grid>Submit</Grid>
                      <Grid>
                        <KeyboardArrowUpIcon
                          fontSize="small"
                        />
                      </Grid>
                    </Grid>
                  </button>
                </Grid>
              </div>
            </div>
          </form>
        </div>
      </div>  );
}

export default ThirdPage;