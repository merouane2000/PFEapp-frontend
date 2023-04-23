import React, { useContext, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { AppContext } from "../../../Contexts/AppContext";
import axios from "axios";
import CustomChip from "../../../compoments/CustomChip";

function ThirdPage() {
  const {
    setStep,
    userData,
    setUserData,
    entitiesContent,
    tableContent,
    entityContent,
    setEntityContent,
    setTableContent,
    submitData,
  } = useContext(AppContext);
  const [dataTable, setDataTable] = useState([]);
  const [dataEntity, setDataEntity] = useState([]);
  const metamodel_id = sessionStorage.getItem("MetaModelID");

  useEffect(() => {
    async function getTableData() {
      const response = await axios.post(
        "http://localhost:4000/get-table-data",
        { id: metamodel_id }
      );
      let tmp = [...response.data];
      setDataTable([...tmp]);
      setTableContent([...tmp])
    }
    getTableData();
  }, []);

  useEffect(() => {
    async function getEntityData() {
      const response = await axios.post(
        "http://localhost:4000/get-entity-data",
        { id: metamodel_id }
      );
      let tmpE = [...response.data];
      setDataEntity([...tmpE]);
      setEntityContent([...tmpE])
    }
    getEntityData();
  }, []);

  const handelUpdate = () => {
    console.log(entityContent);
    // console.log(tableContent);
    
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
                      Your Tables
                    </span>
                  </Grid>
                  <Grid
                    container
                    justifyContent="center"
                    direction="row"
                    gap={1}
                  >
                    {/* <CustomChip/> */}
                    {dataTable.map((table) => (
                      <Grid>
                        <button>{table.name}</button>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </div>
            </Grid>
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
                      Your Entities
                    </span>
                  </Grid>
                  <Grid
                    container
                    justifyContent="center"
                    direction="row"
                    gap={1}
                  >
                    <CustomChip/>
                    {/* {dataEntity.map((etitys) => (
                      <Grid>
                        <button>{etitys.name}</button>
                      </Grid>
                    ))} */}
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
                      Tables Relationships
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
                        <select className="input-Dialog-littel">
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
                          To
                        </span>
                      </Grid>
                      <Grid>
                        <select className="input-Dialog-littel">
                          <option value="/">--Select--</option>
                          {dataTable.map((data) => (
                            <option value={data.name}>{data.name}</option>
                          ))}
                        </select>
                      </Grid>
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
                          paddingLeft: "33px",
                        }}
                      >
                        Relationship Type
                      </span>
                    </Grid>
                    <div style={{ paddingLeft: "25px" }}>
                      <Grid>
                        <select
                          className="input-Dialog-littel"
                          style={{ width: "150px" }}
                        >
                          <option value="/">--Select--</option>
                          <option value="association">Association</option>
                          <option value="aggregation">Aggregation</option>
                          <option value="composition">Composition</option>
                          <option value="inheritance">Inheritance</option>
                          <option value="dependency">Dependency</option>
                        </select>
                      </Grid>
                    </div>
                    <div style={{ paddingTop: "17px" }}>
                      <Grid>
                        <button
                          className="logout-button"
                          style={{ width: "200px" }}
                        >
                          <span
                            style={{
                              fontSize: 15,
                              fontWeight: 600,
                              color: "#393E46",
                              textAlign: "center",
                            }}
                          >
                            Add Relation
                          </span>
                        </button>
                      </Grid>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>
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
                      Entities Associations
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
                        <select className="input-Dialog-littel">
                          <option value="/">--Select--</option>
                          {dataEntity.map((data) => (
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
                          To
                        </span>
                      </Grid>
                      <Grid>
                        <select className="input-Dialog-littel">
                          <option value="/">--Select--</option>
                          {dataEntity.map((data) => (
                            <option value={data.name}>{data.name}</option>
                          ))}
                        </select>
                      </Grid>
                    </Grid>
                  </Grid>
                  <div style={{ paddingTop: "73px", paddingLeft: "20px" }}>
                    <Grid>
                      <button
                        className="logout-button"
                        style={{ width: "200px" }}
                        onClick={handelUpdate}
                      >
                        <span
                          style={{
                            fontSize: 15,
                            fontWeight: 600,
                            color: "#393E46",
                            textAlign: "center",
                          }}
                        >
                          Add Association{" "}
                        </span>
                      </button>
                    </Grid>
                  </div>
                </Grid>
              </div>
            </Grid>
          </Grid>

          {/* <Grid
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
                    Model Type{" "}
                  </span>
                </Grid>
                <Grid md={4}>
                  <select className="Select-input">
                    <option value="Source Model">Source Model</option>
                    <option value="Target Model">Target Model</option>
                  </select>
                </Grid>
              </Grid> */}
          {/* <div style={{ paddingTop: "10px" }}>
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
              </div> */}
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
                  setStep(2);
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
              <button className="logout-button" onClick={submitData}>
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
        </div>
      </div>
    </div>
  );
}

export default ThirdPage;
