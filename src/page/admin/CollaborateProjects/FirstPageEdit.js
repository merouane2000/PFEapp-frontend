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
  const selected_Id = sessionStorage.getItem("selectedModel");

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
              Tables
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
              Entities
            </span>
            <CustomEditRationalDiagramDialog prop1={editEntities} />
          </Grid>
        </Grid>
      </div>
      <div
        style={{
          paddingTop: "20px",
          paddingLeft: "310px",
        }}
      >
        <Grid container justifyContent="center" direction="row">
          <Grid direction="column" md={6}>
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
            <Grid>
              <select
                className="Select-input"
                style={{ width: "200px" }}
                // onChange={handleChange}
                name="UsedApproach"
                required
              >
                <option value="/">--Select--</option>
                <option value="varroApproach">Varro Approach</option>
                <option value=" WimmerApproach"> Wimmer Approach</option>
                <option value="StrommerApproach">Strommer Approach</option>
                <option value=" KassentiniApproach">Kassentini Approach</option>
                <option value=" BaloghApproach">Balogh Approach </option>
                <option value="GarciaApproach">Garcia Approach</option>
                <option value="DeloquesApproach">Deloques Approach</option>
                <option value="SaadaApproach">Saada Approach</option>
                <option value="FaunesApproach">Faunes Approach</option>
                <option value="BakiApproach">Baki Approach</option>
              </select>
            </Grid>
          </Grid>

          <Grid direction="column" md={6}>
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
            <Grid>
              <input
                style={{ width: "170px " }}
                className="input-log-in"
                name="example"
                // onChange={handleChange}
                required
                placeholder="Enter your example"
              />
            </Grid>
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
                // onChange={handleChange}
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
            onClick={() => {
              setStepEdit(2);
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
  );
}

export default FirstPageEdit;
