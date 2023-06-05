import React, { useContext, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { AppContext } from "../../../Contexts/AppContext";
import axios from "axios";
import Chip from "@mui/material/Chip";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import { useNavigate } from "react-router-dom";

const EntityInitialValues = {
  AssociationFrom: "",
  AssociationTo: "",
  AssociationName: "",
};
const tableInitialValues = {
  RelationShipFrom: "",
  RelationShipTo: "",
  RelationShipName: "",
  RelationShipType: "",
};

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function SecondPageEdit() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const {
    editTables,
    editEntities,
    setStepEdit
  } = useContext(AppContext);
  const [dataTable, setDataTable] = useState([]);
  const [dataEntity, setDataEntity] = useState([]);
  const [entityValues, setEntityValues] = useState(EntityInitialValues);
  const [tabelValues, setTableValues] = useState(tableInitialValues);
  const metamodel_id = sessionStorage.getItem("MetaModelID");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEntityValues({
      ...entityValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeTable = (e) => {
    setTableValues({
      ...tabelValues,
      [e.target.name]: e.target.value,
    });
  };
  const handelSubmite = () => {
    if (dataTable.length !== 0) {
      handleClick();
    } else {
      navigate("/admin-dashboard");
      setStepEdit(1);
    }
  };

  useEffect(() => {
      setDataTable([...editTables.tablesSource]);
  }, []);

  useEffect(() => {
      setDataEntity([...editEntities.entitiesTarget]);
  }, []);

  const handelUpdateAssociation = async () => {
    const deleteEntity = [...dataEntity];

    deleteEntity.map((data) => {
      if (data.name == entityValues.AssociationFrom) {
        deleteEntity.splice(data, 1);
        setDataEntity(deleteEntity);
      }
    });

    deleteEntity.map((data) => {
      if (data.name == entityValues.AssociationTo) {
        deleteEntity.splice(data, 1);
        setDataEntity(deleteEntity);
      }
    });

    try {
      const response = await axios.post(
        "http://localhost:4000/association-create",
        {
          values: entityValues,
          metaModel_ID: metamodel_id,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const handelUpdateRelationShip = async () => {
    console.log(tabelValues);
    const deleteTable = [...dataTable];

    deleteTable.map((data) => {
      if (data.name == tabelValues.RelationShipFrom) {
        deleteTable.splice(data, 1);
        setDataTable(deleteTable);
      }
    });
    deleteTable.map((data) => {
      if (data.name == tabelValues.RelationShipTo) {
        deleteTable.splice(data, 1);
        setDataTable(deleteTable);
      }
    });
    try {
      const response = await axios.post(
        "http://localhost:4000/relationship-create",
        {
          values: tabelValues,
          metaModel_ID: metamodel_id,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div>
        <div style={{ paddingTop: "35px" }}>
          <Grid container direction="row" justifyContent="center">
            <Grid md={4}>
              <div>
                <Grid container justifyContent="center" gap={2}>
                  <Grid>
                    {" "}
                    <span
                      style={{
                        fontSize: 20,
                        fontWeight: 400,
                        color: "#393E46",
                        textAlign: "center",
                      }}
                    >
                      Your Classes
                    </span>
                  </Grid>
                  <Grid
                    container
                    justifyContent="center"
                    direction="row"
                    gap={1}
                  >
                    {dataTable.length !== 0 ? (
                      dataTable.map((data) => (
                        <Chip
                          label={data.name}
                          variant="outlined"
                          style={{
                            fontFamily: "Outfit",
                            fontWeight: 600,
                            color: "#393E46",
                          }}
                        />
                      ))
                    ) : (
                      <Alert
                        severity="info"
                        variant="filled"
                        style={{
                          borderRadius: "35px",
                          width: "280px",
                          height: "36px",
                          backgroundColor: "#2196f3",
                          color: "#2196f3",
                        }}
                      >
                        <span
                          style={{ fontFamily: "Outfit", color: "#EEEEEE" }}
                        >
                          You have related all the Classes
                        </span>
                      </Alert>
                    )}
                  </Grid>
                </Grid>
              </div>
            </Grid>
     
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="center"
            paddingTop={5}
          >
            <Grid md={4}>
              <div>
                <Grid container justifyContent="center" gap={2}>
                  <Grid>
                    {" "}
                    <span
                      style={{
                        fontSize: 20,
                        fontWeight: 400,
                        color: "#393E46",
                        textAlign: "center",
                      }}
                    >
                      Classes Relationships
                    </span>
                  </Grid>
                  <Grid
                    container
                    justifyContent="center"
                    direction="row"
                    gap={1}
                  >
                    <Grid direction="column">
                      <Grid>
                        <span
                          style={{
                            fontSize: 17,
                            fontWeight: 600,
                            color: "#393E46",
                            textAlign: "center",
                          }}
                        >
                          From
                        </span>
                      </Grid>
                      <Grid>
                        <select
                          className="input-Dialog-littel"
                          onChange={handleChangeTable}
                          name="RelationShipFrom"
                        >
                          <option value="/">--Select--</option>
                          {dataTable.map((data) => (
                            <option value={data.name}>{data.name}</option>
                          ))}
                        </select>
                      </Grid>
                    </Grid>
                    <Grid direction="column">
                      <Grid>
                        <span
                          style={{
                            fontSize: 17,
                            fontWeight: 600,
                            color: "#393E46",
                            textAlign: "center",
                          }}
                        >
                          Cardinalty
                        </span>
                      </Grid>
                        <select
                          className="input-Dialog-littel"
                          onChange={handleChangeTable}
                          name="RelationShipCardinalty"
                        >
                         
                          <option value="">--Select--</option>
                          <option value="1..*">"1..*"</option>
                          <option value="0..1">"0..1"</option>
                          <option value="*">"*"</option>
                          <option value="1">"1"</option>
                        </select>
                      </Grid>
           

                    <Grid direction="column">
                      <Grid>
                        <span
                          style={{
                            fontSize: 17,
                            fontWeight: 600,
                            color: "#393E46",
                            textAlign: "center",
                          }}
                        >
                          To
                        </span>
                      </Grid>
                      <Grid>
                        <select
                          className="input-Dialog-littel"
                          onChange={handleChangeTable}
                          name="RelationShipTo"
                        >
                          <option value="/">--Select--</option>
                          {dataTable.map((data) => (
                            <option value={data.name}>{data.name}</option>
                          ))}
                        </select>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    justifyContent="center"
                    direction="row"
                    gap={1}
                  >
                    <Grid direction="column">
                      <Grid>
                        <span
                          style={{
                            fontSize: 17,
                            fontWeight: 600,
                            color: "#393E46",
                            textAlign: "center",
                          }}
                        >
                          Type
                        </span>
                      </Grid>
                      <Grid>
                        <select
                          className="input-Dialog-littel"
                          onChange={handleChangeTable}
                          name="RelationShipType"
                        >
                          <option value="/">--Select--</option>
                          <option value="association">Association</option>
                          <option value="aggregation">Aggregation</option>
                          <option value="composition">Composition</option>
                          <option value="inheritance">Inheritance</option>
                          <option value="dependency">Dependency</option>
                        </select>
                      </Grid>
                    </Grid>

                    <Grid direction="column">
                      <Grid>
                        <span
                          style={{
                            fontSize: 17,
                            fontWeight: 600,
                            color: "#393E46",
                            textAlign: "center",
                          }}
                        >
                          Name
                        </span>
                      </Grid>
                      <Grid>
                        <input
                          style={{ width: "110px", height: "24px" }}
                          className="input-Dialog-littel-nrml"
                          name="RelationShipName"
                          onChange={handleChangeTable}
                          placeholder="Name"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid>
                    <button
                      className="logout-button"
                      onClick={handelUpdateRelationShip}
                      style={{ width: "200px" }}
                    >
                      Add Relationships{" "}
                    </button>
                  </Grid>
                </Grid>
              </div>
            </Grid>
       
          </Grid>
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
                  onClick={handelSubmite}
                >
                  <Grid>Submit</Grid>
                  <Grid>
                    <KeyboardArrowUpIcon fontSize="small" />
                  </Grid>
                </Grid>
              </button>
            </Grid>
          </div>
        </div>
      </div>
      <Snackbar
        style={{ borderRadius: "30px" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }} 
        style={{
          backgroundColor: "#f44336",
          color: "#f44336",
        }}>
          <span style={{ fontFamily: "Outfit", color: "#EEEEEE" }}>
            You havent finished the links between you tables and entities
          </span>
        </Alert>
      </Snackbar>
    </div>
  );
}

export default SecondPageEdit;

