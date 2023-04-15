import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import CustomStepper from "../../../compoments/CustomStepper";

function MainPage() {
  const navigate = useNavigate();
  const handleBackToHomePage = () => {
    navigate("/admin-dashboard");
  };

  return (
    <div>
        <CustomStepper/>
      <Grid
        justify="flex-end"
        style={{
          paddingTop: "18px",
          paddingRight: "25px",
          paddingLeft: "1250px",
        }}
      >
        <button className="logout-button" onClick={handleBackToHomePage}>
          <Grid
            container
            justifyContent="center"
            style={{ paddingTop: "20px", paddingLeft: "15px" }}
            spacing={2}
          >
            <Grid>Home</Grid>
            <Grid>
              <HomeIcon style={{ paddingLeft: "3px" }} fontSize="small" />
            </Grid>
          </Grid>
        </button>
      </Grid>
      <div>
        <form>
          <div style={{ paddingTop: "60px" }}>
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
            <div style={{ paddingTop: "70px" }}>
              <Grid container direction="row" justifyContent="space-around">
                <button className="logout-button">
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
                <button className="logout-button">
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
          </div>
        </form>
      </div>
    </div>
  );
}
export default MainPage;
