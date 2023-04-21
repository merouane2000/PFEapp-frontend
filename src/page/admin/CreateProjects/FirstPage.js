import React, { useContext, useState } from "react";
import Grid from "@mui/material/Grid";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { AppContext } from "../../../Contexts/AppContext";
import axios from "axios";
const InitialValues = {
  modelName: "",
  diagramType: "",
  targetQuality: "",
  UsedApproach: "",
};

function FirstPage() {
  const [values, setValues] = useState(InitialValues);
  const { setStep } = useContext(AppContext);
  const sessionUser_id = sessionStorage.getItem("userID");

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmitAndNext = async (e) => {
    e.preventDefault();
    const tmpObj = { ...values };
    tmpObj.user_id = sessionUser_id;
    try {
      const response = await axios.post(
        "http://localhost:4000/metamodel-create",
        {
          data: tmpObj,
        }
      );
      if (response.data.isCreate) {
        setStep(2);
        sessionStorage.setItem("MetaModelID", response.data.MetaModel_ID)
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmitAndNext}>
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
                  onChange={handleChange}
                  name="modelName"
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
                  onChange={handleChange}
                  name="diagramType"
                  required
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
                    paddingRight: "285px",
                  }}
                >
                  Target Quality{" "}
                </span>
              </Grid>
              <Grid md={4}>
                <input
                  className="input-log-in"
                  onChange={handleChange}
                  name="targetQuality"
                  required
                  placeholder="Enter Quality"
                />
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
                      Used approach
                    </span>
                  </Grid>

                  <select
                    className="Select-input"
                    onChange={handleChange}
                    name="UsedApproach"
                    required
                  >
                    <option value="/">--Select--</option>
                    <option value="varroApproach">Varro Approach</option>
                    <option value=" WimmerApproach"> Wimmer Approach</option>
                    <option value="StrommerApproach">Strommer Approach</option>
                    <option value=" KassentiniApproach">
                      Kassentini Approach
                    </option>
                    <option value=" BaloghApproach">Balogh Approach </option>
                    <option value="GarciaApproach">Garcia Approach</option>
                    <option value="DeloquesApproach">Deloques Approach</option>
                    <option value="SaadaApproach">Saada Approach</option>
                    <option value="FaunesApproach">Faunes Approach</option>
                    <option value="BakiApproach">Baki Approach</option>
                  </select>
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
                <button className="logout-button"  type="submit">
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
