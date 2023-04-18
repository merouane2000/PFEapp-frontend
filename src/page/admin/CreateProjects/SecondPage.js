import React, { useEffect, useContext, useState } from "react";
import Grid from "@mui/material/Grid";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { AppContext } from "../../../Contexts/AppContext";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import AddIcon from "@mui/icons-material/Add";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteIcon from "@mui/icons-material/Delete";

function SecondPage() {
  const { setStep, userData, setUserData, tableContent, setTableContent } =
    useContext(AppContext);
  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]);
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
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

  useEffect(() => {
    handleClick();
  }, []);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const [openDialog, setopenDialog] = React.useState(false);

  const handleClickopenDialog = () => {
    setopenDialog(true);
  };

  const handleCloseDialog = () => {
    setopenDialog(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handelAddAttribute = () => {
    if (data !== null) {
      setAllData([...allData, data]);
      setData([]);
    }
  };
  const handleDeleteAttribute = (index) => {
    const deleteData = [...allData];
    deleteData.splice(index, 1);
    setAllData(deleteData);
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div style={{ paddingTop: "35px" }}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              style={{ rowGap: "5px" }}
            >
              <Grid md={4}>
                <button className="my-button" onClick={handleClickopenDialog}>
                  <Grid
                    container
                    justifyContent="center"
                    style={{ paddingTop: "0px", columnGap: "25px" }}
                  >
                    <Grid style={{ paddingTop: "3px" }}>Add Your Tables</Grid>
                    <Grid>
                      <AddCircleOutlineIcon />
                    </Grid>
                  </Grid>
                </button>
              </Grid>
              <Dialog open={openDialog} onClose={handleCloseDialog} >
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
                      onChange={handleChange}
                      className="input-Dialog"
                      label="tableName"
                      type="text"
                      name="tableName"
                      required
                      placeholder="Enter your table name"
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

                <Grid container direction="row" justifyContent="space-around">
                  <div>
                    <Grid container direction="column">
                      <span>Visibility</span>
                      <select
                        className="input-Dialog-littel"
                        value={data.visibilty}
                        onChange={handleChange}
                        name="attributeVisibilty"
                      >
                        <option value="+">Public (+)</option>
                        <option value="-">Private (-)</option>
                        <option value="#">Protected (#)</option>
                      </select>
                    </Grid>
                  </div>
                  <div>
                    <Grid container direction="column">
                      <span>Attribute name</span>
                      <input
                        onChange={handleChange}
                        className="input-Dialog-littel-nrml"
                        label="attributename"
                        type="text"
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
                        onChange={handleChange}
                        value={data.type}
                        name="attributeType"
                      >
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
                  <div>
                    <ol>
                      {allData.map((data, index) => (
                        <Grid
                          container
                          direction="row"
                          justifyContent="space-around"
                        >
                         
                            <li key={index}>
                              <div>
                                <Grid>

                                <span>
                                  {data.attributeVisibilty +
                                    " " +
                                    data.attributeName +
                                    " : " +
                                    data.attributeType}{" "}
                                </span>
                                </Grid>
                              </div>
                              <div>
                                <button
                                  className="logout-button"
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
                              </div>
                            </li>
                      
                        </Grid>
                      ))}
                    </ol>
                   
                  </div>
                </DialogContent>
                <DialogActions>
                  <button onClick={handleCloseDialog}>Cancel</button>
                  <button onClick={handleCloseDialog}>Subscribe</button>
                </DialogActions>
              </Dialog>

              {/* <Grid md={4}>
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
                </Grid> */}
            </Grid>
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
                      </div>*/}
            <div style={{ paddingTop: "40px" }}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                style={{ columnGap: "25px" }}
              >
                <button
                  className="logout-button"
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
                <button
                  className="logout-button"
                  onClick={() => {
                    setStep(3);
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
            <Snackbar
              style={{ borderRadius: "30px" }}
              open={open}
              onClose={handleClose}
            >
              {typeof userData.tableNumber !== typeof 5 ? (
                <Alert
                  onClose={handleClose}
                  severity="warning"
                  sx={{ width: "100%" }}
                >
                  <span style={{ fontFamily: "Outfit", color: "#EEEEEE" }}>
                    {" "}
                    An initial value must be given to the table number text
                    field{" "}
                  </span>
                </Alert>
              ) : (
                <Alert
                  onClose={handleClose}
                  severity="info"
                  sx={{ width: "100%" }}
                >
                  <span style={{ fontFamily: "Outfit", color: "#EEEEEE" }}>
                    {" "}
                    You have {userData.tableNumber} Table to fill it{" "}
                  </span>
                </Alert>
              )}
            </Snackbar>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SecondPage;
