import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { AppContext } from "../../../Contexts/AppContext";

function FirstPage() {
  const { setStep, userData, setUserData } = useContext(AppContext);
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
                  value={userData["ModelName"]}
                  onChange={(e) => {
                    setUserData({ ...userData, ModelName: e.target.value });
                  }}
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
                    paddingRight: "150px",
                  }}
                >
                 Choose Meta-Model Diagram{" "}
                </span>
              </Grid>
              <Grid md={4}>
                <select
                  className="Select-input"
                  value={userData["typeOfMetaModelDiagram"]}
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      "typeOfMetaModelDiagram": e.target.value,
                    });
                  }}
                >
                  <option value="isEntityRelationshipDiagram">
                    Entity Relationship Diagram
                  </option>
                  <option value="isClassDiagram">Class Diagram (UML)</option>
                </select>
              </Grid>
              <Grid md={4}>
                <span
                  style={{
                    fontSize: 20,
                    fontWeight: 400,
                    color: "#393E46",
                    textAlign: "center",
                    paddingRight: "190px",
                  }}
                >
                 Choose Meta-Model Type {" "}
                </span>
              </Grid>
              <Grid md={4}>
                <select
                  className="Select-input"
                  value={userData["typeOfMetaModel"]}
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      "typeOfMetaModel": e.target.value,
                    });
                  }}
                >
                  <option value="SM">
                  Source Model (SM)
                  </option>
                  <option value="TM">Target Model (TM)</option>
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
                    value={userData["tableNumber"]}
                    onChange={(e) => {
                      setUserData({ ...userData, tableNumber: e.target.value });
                    }}
                    label="table-number"
                    type="text"
                    name="tableNumber"
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
                    value={userData["assosiationNumber"]}
                    onChange={(e) => {
                      setUserData({
                        ...userData,
                        assosiationNumber: e.target.value,
                      });
                    }}
                    label="assosiation-number"
                    type="text"
                    name="assosiationNumber"
                    required
                    placeholder="Enter number"
                  />
                </Grid>
              </Grid>
            </div>
            <div style={{ paddingTop: "40px" }}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                style={{ columnGap: "50px" }}
              >
                <button
                  className="logout-button"
                  onClick={() => {
                    setStep(2);
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
        </form>
      </div>
    </div>
  );
}

export default FirstPage;
