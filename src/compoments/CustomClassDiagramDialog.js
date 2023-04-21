import React, { useState, useContext, useEffect } from "react";
import Grid from "@mui/material/Grid";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { AppContext } from "../Contexts/AppContext";
import axios from "axios";

function CustomClassDiagramDialog() {
  const { tableContent, setTableContent, finalData, setFinalData } =
    useContext(AppContext);
  const [DataAttribute, setDataAttribute] = useState([]);
  const [allDataAttribute, setAllDataAttribute] = useState([]);
  const [dataMethods, setDataMethods] = useState([]);
  const [allDataMethods, setAllDataMethods] = useState([]);
  const [nameTable, setNameTable] = useState("");
  const [cardinalityTable, setcardinalityTable] = useState("");
  const [openDialog, setopenDialog] = React.useState(false);
  const metaModel_id = sessionStorage.getItem("MetaModelID")
  const handleChange = (e) => {
    setDataAttribute({
      ...DataAttribute,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeMethodes = (e) => {
    setDataMethods({
      ...dataMethods,
      [e.target.name]: e.target.value,
    });
  };
  const handleClickopenDialog = () => {
    setopenDialog(true);
  };

  const handleCloseDialogAndCancelReq = () => {
    setopenDialog(false);
    setAllDataMethods([]);
    setAllDataAttribute([]);
    setNameTable("");
    setcardinalityTable("");
  };


  const handleCloseDialogAndSubmite = async() => {
    const obj = {
      allDataAttribute,
      ...allDataMethods,
    };
    obj.name = nameTable;
    obj.cardinality = cardinalityTable;

    setTableContent(obj);
    setFinalData([...finalData, tableContent]);
    console.log(finalData);

    try {
      const response = await axios.post(
        "http://localhost:4000/table-create",
        {
          attributes: allDataAttribute,
          methodes: allDataMethods,
          name:nameTable,
          cardinality:cardinalityTable,
          metaModel_ID: metaModel_id

        }
      );
      if (response.data.isCreate) {     
        console.log(response)

      }
    } catch (error) {
      console.error(error);
    }
  };

  const handelAddAttribute = () => {
    if (DataAttribute !== null) {
      setAllDataAttribute([...allDataAttribute, DataAttribute]);
      setDataAttribute([]);
    }
  };
  const handleDeleteAttribute = (index) => {
    const deleteDataAtrribute = [...allDataAttribute];
    deleteDataAtrribute.splice(index, 1);
    setAllDataAttribute(deleteDataAtrribute);
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

  return (
    <div>
      <Grid md={4}>
        <button className="targe-source-buttom" onClick={handleClickopenDialog}>
          <Grid
            container
            justifyContent="center"
            style={{ paddingTop: "0px", columnGap: "25px" }}
          >
            <Grid style={{ paddingTop: "3px" }}>source model</Grid>
            <Grid>
              <AddCircleOutlineIcon />
            </Grid>
          </Grid>
        </button>
      </Grid>
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
              onChange={(e) => {
                setNameTable(e.target.value);
              }}
              className="input-Dialog"
              label="tableName"
              type="text"
              name="tableName"
              value={nameTable}
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
              <span>Visibility</span>
              <select
                className="input-Dialog-littel"
                value={DataAttribute.visibilty}
                onChange={handleChange}
                name="attributeVisibilty"
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
                value={DataAttribute.type}
                name="attributeType"
              >
                <option value="/">Select</option>
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
              {allDataAttribute.map((data, index) => (
                <li key={index}>
                  <Grid container direction="row" justifyContent="space-evenly">
                    <span style={{ paddingTop: "7px" }}>
                      {data.attributeVisibilty +
                        " " +
                        data.attributeName +
                        " : " +
                        data.attributeType}{" "}
                    </span>

                    <button
                      className="logout-button"
                      style={{ height: "32px" }}
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
          <div>
            <ol>
              {allDataMethods.map((datas, index) => (
                <li key={index}>
                  <Grid container direction="row" justifyContent="space-evenly">
                    <span style={{ paddingTop: "7px" }}>
                      {datas.methodeVisibilty + " " + datas.methodeName + "()"}{" "}
                    </span>

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
              Multiplicity{" "}
            </span>
          </Grid>
          <Grid container justifyContent="center">
            <div>
              <Grid container direction="column">
                <span style={{ paddingTop: "10px", paddingLeft: "20px" }}>
                  Multiplicity
                </span>
                <select
                  className="input-Dialog-littel"
                  onChange={(e) => {
                    setcardinalityTable(e.target.value);
                  }}
                  value={cardinalityTable}
                  name="tableMultiplicity"
                >
                  <option value="/">Select</option>
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
            style={{ height: "32px" }}
            className="logout-button"
          >
            Cancel
          </button>
          <button
            onClick={handleCloseDialogAndSubmite}
            style={{ height: "32px" }}
            className="logout-button"
          >
            Submit
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CustomClassDiagramDialog;
