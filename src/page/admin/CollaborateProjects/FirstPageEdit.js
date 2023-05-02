import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../../Contexts/AppContext";
import axios from "axios";
import Grid from "@mui/material/Grid";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CustomEditRationalDiagramDialog from "../../../compoments/CustomEditRationalDiagramDialog";
import CustomEditClassDiagramDialog from "../../../compoments/CustomEditClassDiagramDialog";

function FirstPageEdit() {
  const { editTables, setEditTables, editEntities, setEditEntities,currentStepEdit,setStepEdit } =
    useContext(AppContext);
    const selected_Id = sessionStorage.getItem("selectedModel")

  useEffect(() => {
    async function getTableData() {
      const response = await axios.post(
        "http://localhost:4000/get-selected-source-model",
        { _id_source: selected_Id }
      );
      setEditTables(response.data)
    //   setRelationShip(response.data.relationshipSource);
    //   setSourceTable(response.data.tablesSource);
    console.log(editTables)
    }
    getTableData();
  }, []);

  useEffect(() => {
    async function getTableData() {
      const response = await axios.post(
        "http://localhost:4000/get-selected-target-model",
        { _id_target: selected_Id }
      );
      setEditEntities(response.data)
    //   setAssociation(response.data.associationTarget);
    //   setTargetEntities(response.data.entitiesTarget);
    console.log(editEntities)
    }
    getTableData();
  }, []);

  return <div>
     <div style={{ paddingTop: "40px" }}>
              <Grid container direction="row" justifyContent="space-around">
                <Grid >
                  <span  style={{
                  fontSize: 20,
                  fontWeight: 400,
                  color: "#393E46",
                  textAlign: "center",
                  paddingLeft: "14px",
                }}>Tables</span>
                 <CustomEditClassDiagramDialog prop1={editTables} />
                </Grid>
                <Grid>
                  <span  style={{
                  fontSize: 20,
                  fontWeight: 400,
                  color: "#393E46",
                  textAlign: "center",
                  paddingLeft: "14px",
                }}>Entities</span>
                <CustomEditRationalDiagramDialog prop1={editEntities}/>
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
                <button className="logout-button" onClick={()=>{setStepEdit(2)}}
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
           
  </div>;
}

export default FirstPageEdit;
