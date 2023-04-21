import React, {useContext, useEffect, useState} from "react";
import Grid from "@mui/material/Grid";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Chip from "@mui/material/Chip";
import { AppContext } from "../Contexts/AppContext";
import { json } from "react-router-dom";


function CustomChip() {

  const {entitiesContent} = useContext(AppContext)


  const clone = [...entitiesContent]
            clone.shift()

      

  const [openDialog, setopenDialog] = React.useState(false);
 

  const handleClickopenDialog = () => {
    console.log(entitiesContent)
        setopenDialog(true);
  };

  const handleCloseDialogAndCancelReq = () => {
    setopenDialog(false);
  };


//   const listTable = () => {
//     const chips = [];
   
//     if ( entitiesContent != null) {
//         entitiesContent.map((data) => {
//         chips.push(
//           <Chip
//             variant="outlined"
//             color="primary"
//             label={data.name}
//             onClick={handleClickopenDialog}
//           />
//         );
//       });
//     }
//     return chips;
//   };

  // const listAttribute = (dataAttr) => {
  //   const attributes = [];
   
  //   if (dataAttr.attributes !== null) {
  //       entitiesContent.map((data) => {
  //       attributes.push(
  //           <ol>
  //               <li>data.attributeName +" "+ data.attributeType</li>
  //           </ol>
  //       );
  //     });
  //   }
  //   return attributes;
  // };
  
//   const chips = listTable();
//   const  attr = listAttribute()
  return (
    <div>
            {/* {chips} */}
      <Grid md={4}>
        Entity Relationship
      </Grid>

    
    {clone.map((data) => (
                
            <Chip
                        label={<span>{data.name}</span>}
                        variant="outlined"
                        onClick={handleClickopenDialog}
                    />
                    
                ))
           }
          
            {clone.map((data) => (
               
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
                data.name{" "}
              </span>
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
          <DialogContent>
            <div>
          {}
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
                {data.cardinality}
                  </span>
                
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
        
          </DialogActions>
    
     
        </Dialog>
                    ))}
             
              

</div>

);
}

export default CustomChip
