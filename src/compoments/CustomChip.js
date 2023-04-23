import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Chip from "@mui/material/Chip";
import { AppContext } from "../Contexts/AppContext";

function CustomChip() {
  const { entityContent } = useContext(AppContext);
  const [openDialog, setopenDialog] = React.useState(false);
  const [currentTabel, setcurrentTable] = React.useState();

  const handleClickopenDialog = (data) => {
    setopenDialog(true);
    setcurrentTable(data);
  };
  const handleCloseDialogAndCancelReq = () => {
    setopenDialog(false);
  };

  return (
    <div>
      <Grid container justifyContent="center" direction="row">
        <Grid>
          {entityContent.map((data) => (
            <Chip
              label={data.name}
              variant="outlined"
              onClick={() => handleClickopenDialog(data)}
              style={{
                fontFamily: "Outfit",
                fontWeight: 600,
                color: "#393E46",
              }}
            />
          ))}

          <Dialog open={openDialog} onClose={handleCloseDialogAndCancelReq}>
            <Grid container justifyContent="center" direction="column">
              <Grid container justifyContent="center" direction="column">
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

                <span
                  style={{
                    fontSize: 17,
                    fontWeight: 600,
                    color: "#393E46",
                    textAlign: "center",
                    fontFamily: "Outfit",
                    paddingTop: "5px",
                  }}
                >
                  {currentTabel.name}
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
                {currentTabel.attribute.map((dataATT) => (
                  <ol>
                    <li>
                      <span
                        style={{
                          fontSize: 17,
                          fontWeight: 600,
                          color: "#393E46",
                          textAlign: "center",
                          fontFamily: "Outfit",
                          paddingTop: "5px",
                        }}
                      >
                        {dataATT.attributeName + " " + dataATT.attributeType}
                      </span>
                    </li>
                  </ol>
                ))}
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
                    <span
                      style={{
                        fontSize: 17,
                        fontWeight: 600,
                        color: "#393E46",
                        textAlign: "center",
                        fontFamily: "Outfit",
                        paddingTop: "5px",
                      }}
                    >
                      {currentTabel.cardinalty}
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
        </Grid>
      </Grid>
    </div>
  );
}

export default CustomChip;
