import React, { useEffect, useContext } from "react";
import Grid from "@mui/material/Grid";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { AppContext } from "../../../Contexts/AppContext";
import CustomClassDiagramDialog from "../../../compoments/CustomClassDiagramDialog";
import Chip from "@mui/material/Chip";
import CustomRationalDiagramDialog from "../../../compoments/CustomRationalDiagramDialog";
import CustomChip from "../../../compoments/CustomChip";

function SecondPage() {
  const { setStep, tableContent, entitiesContent } = useContext(AppContext);

  const handleClickchip = () => {
    console.info(entitiesContent);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div>
<CustomChip/>
          <div style={{ paddingTop: "35px" }}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              style={{ rowGap: "5px" }}
            >
              <Grid
                container
                direction="row"
                justifyContent="center"
                columnGap={7}
              >
                <Grid>
                  <CustomClassDiagramDialog />
                </Grid>
                <Grid>
                  <CustomRationalDiagramDialog />
                </Grid>
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
              <Chip
                label={tableContent.name}
                variant="outlined"
                onClick={handleClickchip}
              />
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
          </div>
      </div>
    </div>
  );
}

export default SecondPage;
