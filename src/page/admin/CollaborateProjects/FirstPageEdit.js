import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../../Contexts/AppContext";
import axios from "axios";
import Grid from "@mui/material/Grid";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

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
    //   setRelationShip(response.data.relationshipSource);
    //   setSourceTable(response.data.tablesSource);
    console.log(response.data)
    }
    getTableData();
  }, []);

  useEffect(() => {
    async function getTableData() {
      const response = await axios.post(
        "http://localhost:4000/get-selected-target-model",
        { _id_target: selected_Id }
      );
    //   setAssociation(response.data.associationTarget);
    //   setTargetEntities(response.data.entitiesTarget);
    console.log(response.data)
    }
    getTableData();
  }, []);

  return <div>
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
