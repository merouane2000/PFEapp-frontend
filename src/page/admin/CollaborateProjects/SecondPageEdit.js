import React, { useState, useContext, useEffect } from "react";
import Grid from "@mui/material/Grid";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { AppContext } from "../../../Contexts/AppContext";

function SecondPageEdit() {
    const { editTables, setEditTables, editEntities, setEditEntities,currentStepEdit,setStepEdit } =
    useContext(AppContext);
    return ( <div>

<div
            style={{
              paddingTop: "40px",
            }}
          >
            <Grid
              container
              direction="row"
              justifyContent="center"
              style={{ columnGap: "25px" }}
            >
              <button
                className="logout-button"
                onClick={() => {
                    setStepEdit(1);
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
              <button className="logout-button">
                <Grid
                  container
                  justifyContent="center"
                  style={{ paddingTop: "20px", paddingLeft: "20px" }}
                  spacing={2}
                >
                  <Grid>Submit</Grid>
                  <Grid>
                    <KeyboardArrowUpIcon fontSize="small" />
                  </Grid>
                </Grid>
              </button>
            </Grid>
          </div>
    </div> );
}

export default SecondPageEdit;