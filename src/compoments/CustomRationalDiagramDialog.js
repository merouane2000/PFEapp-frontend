import React, {useContext, useState} from "react";
import Grid from "@mui/material/Grid";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { AppContext } from "../Contexts/AppContext";

const InitialValues = {
  entityName: "",
  cardinalty: "",
};

function CustomRationalDiagramDialog() {
  const [values, setValues] = useState(InitialValues);
  const [attribute, setAttribute] = useState([]);
  const [attributeSet, setAttributeSet] = useState([]);
  const {entityContent, setEntityContent,entitiesContent, setEntitiesContent} = useContext(AppContext)

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
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
  const handleSubmitAndNext = async () => {
      const contexObj ={
        name:values.entityName,
        cardinality:values.cardinalty,
        attributes:attributeSet
      }
      setEntityContent({...contexObj})
      setEntitiesContent([...entitiesContent, entityContent]);

      try {
        const response = await axios.post(
          "http://localhost:4000/entity-create",
          {
            attributeData: attributeSet,
            name:values.entityName,
            cardinality:values.cardinalty,
          }
        );
        console.log(response.data)
        if (response.data.isCreate) {
          sessionStorage.setItem("EntityID", response.data.entity_ID)
        }
      } catch (error) {
        console.error(error);
      }
    };


  const [openDialog, setopenDialog] = React.useState(false);
 

  const handleClickopenDialog = () => {
    setopenDialog(true);
  };



  const handleCloseDialogAndCancelReq = () => {
    setopenDialog(false);
  };

  const handleCloseDialogAndSubmite = () => {
    console.log(values)
    console.log(attributeSet)
    // const obj = {
    //   allDataAttribute,
    //   ...allDataMethods,
    // };
    // obj.name = nameTable;
    // obj.cardinality = cardinalityTable;

    // setTableContent({ ...obj });
    // console.log(tableContent);
    // setopenDialog(false);
  };

  const handleDeleteAttribute = (index) => {
    const deleteDataAtrribute = [...attributeSet];
    deleteDataAtrribute.splice(index, 1);
    setAttributeSet(deleteDataAtrribute);
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
            <Grid style={{ paddingTop: "3px" }}>
             Target model
            </Grid>
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
              Entity Name{" "}
            </span>
          </Grid>
          <Grid container justifyContent="center">
            <input
              className="input-Dialog"
              onChange={handleChange}
              name="entityName"
              required
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
               onChange={ handleChangeAttribute }
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
              {attributeSet.map((data, index) => (
                <li key={index}>
                  <Grid container direction="row" justifyContent="space-evenly">
                    <span style={{ paddingTop: "7px" }}>
                      {data.attributeName +
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
              Cardinalty{" "}
            </span>
          </Grid>
          <Grid container justifyContent="center">
            <div>
              <Grid container direction="column">
                <span style={{ paddingTop: "10px", paddingLeft: "20px" }}>
                Cardinalty
                </span>
                <select
                  className="input-Dialog-littel"
                onChange={handleChange}
                  name="cardinalty"
                >
                  <option value="/">--Select--</option>
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
        
        onClick={handleSubmitAndNext}
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

export default CustomRationalDiagramDialog;