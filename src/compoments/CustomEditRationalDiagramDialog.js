import React, { useContext, useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { AppContext } from "../Contexts/AppContext";
import Chip from "@mui/material/Chip";



function CustomEditRationalDiagramDialog() {
  const {  editEntities } =
    useContext(AppContext);

  const [attribute, setAttribute] = useState([]);
  const [attributeSet, setAttributeSet] = useState([]);
  const [nameE, setNameE] = useState('');
  const [dataCardinality, setDataCardinality] = useState('');
  const [dataClone, setDataClone] = useState([]);


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

  const handleSubmitAndNext =  () => {
    setopenDialog(false);
  };

  const [openDialog, setopenDialog] = React.useState(false);

  const handleClickopenDialog = (selectedEntity) => {
    setopenDialog(true);
    setAttributeSet([...selectedEntity.attribute]);
    setNameE(selectedEntity.name)
    setDataCardinality(selectedEntity.cardinalty)
    setDataClone([selectedEntity])

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
        <Grid  container
                    justifyContent="center"
                    direction="row"
                    gap={1}>
          {(editEntities.entitiesTarget) != null ? (
            (editEntities.entitiesTarget).map((entity) => (
              <Chip
                label={entity.name}
                variant="outlined"
                onClick={() => {
                  handleClickopenDialog(entity);
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
                      Table Name{" "}
                    </span>
                  </Grid>
                  <Grid container justifyContent="center">
                    <input
                      className="input-Dialog"
                   
                      onChange={(e)=>{setNameE(e.target.value)}}
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
                <span>Key</span>
                <select
                  className="input-Dialog-littel"
                  onChange={handleChangeAttribute}
                 name="attributeKey"
             
                >
                  <option value="/">--Select--</option>
                  <option value="_PK">Primary key</option>
                  <option value="_Fk">Foreign key</option>
                </select>
              </Grid>
            </div>
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
                  <div  style={{paddingLeft:"70px"}}>
                    <ol>
                      {attributeSet.map((data, index) => (
                        <li key={index}>
                          <Grid
                            container
                            direction="row"
                            justifyContent="center"
                          >
                            <Grid md={6} style={{paddingTop:"5px"}}>
                              <span style={{ paddingTop: "7px" }}>
                                {data.attributeKey +" | "+ data.attributeName +
                                  " : " +
                                  data.attributeType}{" "}
                              </span>
                            </Grid>
                            <Grid md={6} style={{paddingTop:"5px"}}>
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

export default CustomEditRationalDiagramDialog;
