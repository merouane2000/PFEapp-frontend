import React, { useState, useContext } from "react";
import Grid from "@mui/material/Grid";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { AppContext } from "../../../Contexts/AppContext";
import CustomClassDiagramDialog from "../../../compoments/CustomClassDiagramDialog";
import Chip from "@mui/material/Chip";
import CustomRationalDiagramDialog from "../../../compoments/CustomRationalDiagramDialog";
import CustomChip from "../../../compoments/CustomChip";
import axios from "axios";

const InitialValues = {
  example: "",
  description: "",
};

function SecondPage() {
  const { setStep, tableContent, entitiesContent } = useContext(AppContext);
  const metamodel_ID = sessionStorage.getItem("MetaModelID");

  // const handleClickchip = () => {
  //   console.info(entitiesContent);
  // };
  const [values, setValues] = useState(InitialValues);

  const handelUpdate = async () => {
   
    try {
      const response = await axios.post(
        "http://localhost:4000/metamodel-update",
        {
          metaModel_id: metamodel_ID,
          descriptionModel: values.description,
          exampleModel: values.example,
        }
      );
      if (response.data.acknowledged) {
        setStep(3);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
     
        <div>
          {/* <CustomChip/> */}
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
                    paddingRight: "275px",
                  }}
                >
                  The Example{" "}
                </span>
              </Grid>
              <Grid md={4}>
    
                <input
                  style={{ height: "39" }}
                  className="input-log-in"
                  name="example"
                  onChange={handleChange}
                  required
                  placeholder="Enter your example"
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
                  The Description{" "}
                </span>
              </Grid>
              <Grid md={4}>
            

                <textarea
                  placeholder="Describe your Target/source Model"
                  onChange={handleChange}
                  name="description"
                  required
                  className="textarea"
                />
              
              </Grid>
              <div style={{ paddingTop: "15px" }}>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  columnGap={8.5}
                >
                  <Grid>
                    <CustomClassDiagramDialog />
                  </Grid>
                  <Grid>
                    <CustomRationalDiagramDialog />
                  </Grid>
                </Grid>
              </div>
            </Grid>

            <div style={{ paddingTop: "40px" }}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                style={{ columnGap: "25px" }}
              >
                <button
                  className="logout-button"
                  type="button"
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
                <button className="logout-button" onClick={handelUpdate}>
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
