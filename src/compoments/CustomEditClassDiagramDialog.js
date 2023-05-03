import React, { useContext, useState } from "react";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { AppContext } from "../Contexts/AppContext";
import Chip from "@mui/material/Chip";

function CustomEditClassDiagramDialog() {
  const { editTables } = useContext(AppContext);

  const [attribute, setAttribute] = useState([]);
  const [attributeSet, setAttributeSet] = useState([]);
  const [nameE, setNameE] = useState("");
  const [dataCardinality, setDataCardinality] = useState("");
  const [dataClone, setDataClone] = useState([]);
  const [dataMethods, setDataMethods] = useState([]);
  const [allDataMethods, setAllDataMethods] = useState([]);
  const handleChangeMethodes = (e) => {
    setDataMethods({
      ...dataMethods,
      [e.target.name]: e.target.value,
    });
  };
  const handelAddMethode = () => {
    if (dataMethods !== null) {
      setAllDataMethods([...allDataMethods, dataMethods]);
      setDataMethods([]);
    }
  };

  const handleDeleteMethode = (index) => {
    const deleteDataMethod = [...allDataMethods];
    deleteDataMethod.splice(index, 1);
    setAllDataMethods(deleteDataMethod);
  };
  const handleChangeAttribute = (e) => {
    setAttribute({
      ...attribute,
      [e.target.name]: e.target.value,
    });
  };
  const handelAddAttribute = () => {
    if (attribute !== null) {
      setAttributeSet([...attributeSet, attribute]);
      setAttribute([]);
    }
  };

  const handleSubmitAndNext = () => {
    setopenDialog(false);
  };

  const [openDialog, setopenDialog] = React.useState(false);

  const handleClickopenDialog = (selectedTable) => {
    setopenDialog(true);
    setAttributeSet([...selectedTable.attribute]);
    setNameE(selectedTable.name);
    setDataCardinality(selectedTable.multiplicity);
    setDataClone([selectedTable]);
    setAllDataMethods([...selectedTable.methode]);
  };

  const handleCloseDialogAndCancelReq = () => {
    setopenDialog(false);
  };

  const handleDeleteAttribute = (index) => {
    const deleteDataAtrribute = [...attributeSet];
    deleteDataAtrribute.splice(index, 1);
    setAttributeSet(deleteDataAtrribute);
  };

  return (
    <div>
      <Grid container justifyContent="center" direction="row">
        <Grid container justifyContent="center" direction="row" gap={1}>
          {editTables.tablesSource != null ? (
            editTables.tablesSource.map((table) => (
              <Chip
                label={table.name}
                variant="outlined"
                onClick={() => {
                  handleClickopenDialog(table);
                }}
                style={{
                  fontFamily: "Outfit",
                  fontWeight: 600,
                  color: "#393E46",
                }}
              />
            ))
          ) : (
            <></>
          )}
          {dataClone != null ? (
            <Dialog open={openDialog} onClose={handleCloseDialogAndCancelReq}>
              <Grid container justifyContent="center" direction="column">
                <Grid container justifyContent="center">
                  <span
                    style={{
                      fontSize: 20,
                      fontWeight: 400,
                      color: "#393E46",
                      textAlign: "center",
                      fontFamily: "Outfit",
                    }}
                  >
                    Entity Name{" "}
                  </span>
                </Grid>
                <Grid container justifyContent="center">
                  <input
                    className="input-Dialog"
                    onChange={(e) => {
                      setNameE(e.target.value);
                    }}
                    name="entityName"
                    required
                    value={nameE}
                    placeholder="Enter your entity name"
                  />
                </Grid>
                <hr
                  style={{
                    width: "500px",
                    height: "1px",
                    background: "black",
                  }}
                />
              </Grid>

              <Grid container justifyContent="center">
                <span
                  style={{
                    fontSize: 20,
                    fontWeight: 400,
                    color: "#393E46",
                    textAlign: "center",
                    fontFamily: "Outfit",
                  }}
                >
                  Attributes{" "}
                </span>
              </Grid>
              <Grid
                container
                direction="row"
                justifyContent="space-around"
                style={{ paddingTop: "5px" }}
              >
                <div>
                  <Grid container direction="column">
                    <span>Attribute name</span>
                    <input
                      className="input-Dialog-littel-nrml"
                      onChange={handleChangeAttribute}
                      name="attributeName"
                      required
                      placeholder="Attribute name"
                    />
                  </Grid>
                </div>
                <div>
                  <Grid container direction="column">
                    <span>Type</span>
                    <select
                      className="input-Dialog-littel"
                      onChange={handleChangeAttribute}
                      name="attributeType"
                    >
                      <option value="/">--Select--</option>
                      <option value="ID">_id</option>
                      <option value="Integer">Integer</option>
                      <option value="String">String</option>
                      <option value="Boolean">Boolean</option>
                      <option value="Float">Float</option>
                      <option value="Date/Time">Date/Time</option>
                      <option value="Object">Object</option>
                      <option value="Enumeration">Enumeration</option>
                    </select>
                  </Grid>
                </div>
                <div style={{ paddingTop: "20px" }}>
                  <button
                    className="logout-button"
                    style={{ height: "32px" }}
                    onClick={handelAddAttribute}
                    type="button"
                  >
                    <Grid
                      container
                      justifyContent="center"
                      style={{ paddingTop: "19px", paddingLeft: "20px" }}
                      spacing={2}
                    >
                      <Grid>Add</Grid>
                      <Grid paddingLeft="5px">
                        <AddIcon fontSize="small" />
                      </Grid>
                    </Grid>
                  </button>
                </div>
              </Grid>
              <DialogContent>
                <div style={{ paddingLeft: "70px" }}>
                  <ol>
                    {attributeSet.map((data, index) => (
                      <li key={index}>
                        <Grid container direction="row" justifyContent="center">
                          <Grid md={6} style={{ paddingTop: "5px" }}>
                            <span style={{ paddingTop: "7px" }}>
                              {"  " +
                                data.attributeVisibilty +
                                "  " +
                                data.attributeName +
                                " : " +
                                data.attributeType}{" "}
                            </span>
                          </Grid>
                          <Grid md={6} style={{ paddingTop: "5px" }}>
                            <button
                              className="logout-button"
                              style={{ height: "32px" }}
                              type="button"
                              onClick={() => handleDeleteAttribute(index)}
                            >
                              <Grid
                                container
                                justifyContent="center"
                                style={{
                                  paddingTop: "19px",
                                  paddingLeft: "20px",
                                }}
                                spacing={2}
                              >
                                <Grid>Delete</Grid>
                                <Grid paddingLeft="3px">
                                  <DeleteIcon fontSize="small" />
                                </Grid>
                              </Grid>
                            </button>
                          </Grid>
                        </Grid>
                      </li>
                    ))}
                  </ol>
                </div>
                <hr
                  style={{
                    width: "500px",
                    height: "1px",
                    background: "black",
                  }}
                />
                <Grid container justifyContent="center">
                  <span
                    style={{
                      fontSize: 20,
                      fontWeight: 400,
                      color: "#393E46",
                      textAlign: "center",
                      fontFamily: "Outfit",
                    }}
                  >
                    Methodes{" "}
                  </span>
                </Grid>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-around"
                  style={{ paddingTop: "5px" }}
                >
                  <div>
                    <Grid container direction="column">
                      <span>Visibility</span>
                      <select
                        className="input-Dialog-littel"
                        value={dataMethods.visibilty}
                        onChange={handleChangeMethodes}
                        name="methodeVisibilty"
                      >
                        <option value="/">Select</option>
                        <option value="+">Public (+)</option>
                        <option value="-">Private (-)</option>
                        <option value="#">Protected (#)</option>
                      </select>
                    </Grid>
                  </div>
                  <div>
                    <Grid container direction="column">
                      <span>Methode name</span>
                      <input
                        onChange={handleChangeMethodes}
                        className="input-Dialog-littel-nrml"
                        type="text"
                        name="methodeName"
                        required
                        placeholder="Methode name"
                      />
                    </Grid>
                  </div>

                  <div style={{ paddingTop: "20px" }}>
                    <button
                      className="logout-button"
                      style={{ height: "32px" }}
                      type="button"
                      onClick={handelAddMethode}
                    >
                      <Grid
                        container
                        justifyContent="center"
                        style={{ paddingTop: "19px", paddingLeft: "20px" }}
                        spacing={2}
                      >
                        <Grid>Add</Grid>
                        <Grid paddingLeft="5px">
                          <AddIcon fontSize="small" />
                        </Grid>
                      </Grid>
                    </button>
                  </div>
                </Grid>
                <div style={{ paddingLeft: "70px" }}>
                  <ol>
                    {allDataMethods.map((datas, index) => (
                      <li key={index}>
                        <Grid
                          container
                          direction="row"
                          justifyContent="center"
                        >
                          <Grid md={6} style={{ paddingTop: "5px" }}>
                          <span style={{ paddingTop: "7px" }}>
                            {datas.methodeVisibilty +
                              " " +
                              datas.methodeName +
                              "()"}{" "}
                          </span>
                          </Grid>
                          <Grid md={6} style={{ paddingTop: "5px" }}>

                          <button
                            className="logout-button"
                            style={{ height: "32px" }}
                            onClick={() => handleDeleteMethode(index)}
                          >
                            <Grid
                              container
                              justifyContent="center"
                              style={{
                                paddingTop: "19px",
                                paddingLeft: "20px",
                              }}
                              spacing={2}
                            >
                              <Grid>Delete</Grid>
                              <Grid paddingLeft="3px">
                                <DeleteIcon fontSize="small" />
                              </Grid>
                            </Grid>
                          </button>
                          </Grid>
                       

                        </Grid>
                      </li>
                    ))}
                  </ol>
                </div>
                <hr
                  style={{
                    width: "500px",
                    height: "1px",
                    background: "black",
                  }}
                />
                <Grid container justifyContent="center">
                  <span
                    style={{
                      fontSize: 20,
                      fontWeight: 400,
                      color: "#393E46",
                      textAlign: "center",
                      fontFamily: "Outfit",
                    }}
                  >
                    Cardinalty{" "}
                  </span>
                </Grid>
                <Grid container justifyContent="center">
                  <div>
                    <Grid container direction="column">
                      <span style={{ paddingTop: "10px", paddingLeft: "20px" }}>
                        Cardinalty
                      </span>
                      <select className="input-Dialog-littel" name="cardinalty">
                        <option value={dataCardinality}>
                          {dataCardinality}
                        </option>
                        <option value="1..*">"1..*"</option>
                        <option value="0..1">"0..1"</option>
                        <option value="*">"*"</option>
                        <option value="1">"1"</option>
                      </select>
                    </Grid>
                  </div>
                </Grid>
              </DialogContent>
              <DialogActions>
                <button
                  onClick={handleCloseDialogAndCancelReq}
                  type="button"
                  style={{ height: "32px" }}
                  className="logout-button"
                >
                  Undo
                </button>
                <button
                  // type="submit"
                  style={{ height: "32px" }}
                  className="logout-button"
                  onClick={handleSubmitAndNext}
                >
                  Save
                </button>
              </DialogActions>
            </Dialog>
          ) : (
            <></>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default CustomEditClassDiagramDialog;
