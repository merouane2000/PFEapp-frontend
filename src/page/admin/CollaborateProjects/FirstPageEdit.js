import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../../Contexts/AppContext";
import axios from "axios";
import Grid from "@mui/material/Grid";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CustomEditRationalDiagramDialog from "../../../compoments/CustomEditRationalDiagramDialog";
import CustomEditClassDiagramDialog from "../../../compoments/CustomEditClassDiagramDialog";

function FirstPageEdit() {
  const {
    editTables,
    setEditTables,
    editEntities,
    setEditEntities,
    currentStepEdit,
    setStepEdit,
  } = useContext(AppContext);
  const selected_Id = localStorage.getItem("selectedModel");

  const [change , setChang] = useState()

  useEffect(() => {
    async function getTableData() {
      const response = await axios.post(
        "http://localhost:4000/get-selected-source-model",
        { _id_source: selected_Id }
      );
      setEditTables(response.data);
      console.log(editTables);
    }
    getTableData();
  }, []);

  useEffect(() => {
    async function getTableData() {
      const response = await axios.post(
        "http://localhost:4000/get-selected-target-model",
        { _id_target: selected_Id }
      );
      setEditEntities(response.data);
      console.log(editEntities);
    }
    getTableData();
  }, []);
  const handelNext = () => {
    setStepEdit(2);
    localStorage.setItem("changedModel" , change)
    
  };


  return (
    <div>
      <div style={{ paddingTop: "40px" }}>
        <Grid container direction="row" justifyContent="space-around">
          <Grid>
            <span
              style={{
                fontSize: 20,
                fontWeight: 400,
                color: "#393E46",
                textAlign: "center",
                paddingLeft: "14px",
              }}
            >
              Classes
            </span>
            <CustomEditClassDiagramDialog prop1={editTables} />
          </Grid>
          <Grid>
            <span
              style={{
                fontSize: 20,
                fontWeight: 400,
                color: "#393E46",
                textAlign: "center",
                paddingLeft: "14px",
              }}
            >
              Tables
            </span>
            <CustomEditRationalDiagramDialog prop1={editEntities} />
          </Grid>
        </Grid>
      </div>
   
      <div    style={{
          paddingTop: "20px",
          paddingLeft: "460px",
        }}>

          <Grid container direction="column" justifyItems="center">
            <Grid>
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
            <Grid>
              {" "}
              <textarea
                placeholder="Describe your Changes"
              onChange={(e)=>{setChang(e.target.value)}}
                name="description"
                required
                className="textarea"
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
            onClick={handelNext}
            // onClick={() => {
            //   setStepEdit(2);
            // }}
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
  );
}

export default FirstPageEdit;
