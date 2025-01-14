import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Chip from "@mui/material/Chip";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#393E46",
    color: theme.palette.common.white,
    fontFamily: "Outfit",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontFamily: "Outfit",
    fontWeight: 600,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function TargetModelReprisentation() {
  const navigate = useNavigate();
  const targetModel_id = sessionStorage.getItem("metaModelTarged-ID");
  const targetModel_name = sessionStorage.getItem("metaModelTarged-name");
  const targetModel_description = sessionStorage.getItem(
    "metaModelTarged-description"
  );

  const [targetEntities, setTargetEntities] = useState([]);
  const [association, setAssociation] = useState([]);
  const [openDialog, setopenDialog] = React.useState(false);
  const [currentTabel, setCurrentTable] = useState();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(3);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleClickopenDialog = (data) => {
    setopenDialog(true);
    setCurrentTable(data);
  };

  const handleCloseDialogAndCancelReq = () => {
    setopenDialog(false);
  };

  const handleBackPage = () => {
    navigate("/admin-dashboard/main-search");
  };

  useEffect(() => {
    async function getTableData() {
      const response = await axios.post(
        "http://localhost:4000/get-selected-target-model",
        { _id_target: targetModel_id }
      );
      setAssociation(response.data.associationTarget);
      setTargetEntities(response.data.entitiesTarget);
    }
    getTableData();
  }, []);

  return (
    <div>
      <Grid container>
        <Grid container justifyContent="space-between">
          <Grid style={{ paddingTop: "80px", paddingLeft: "75px" }}>
            <span
              style={{
                fontSize: 34,
                fontWeight: 500,
                color: "#393E46",
                textAlign: "center",
              }}
            >
              {targetModel_name}
            </span>
          </Grid>
          <Grid
            justifyContent="center"
            style={{ paddingTop: "18px", paddingRight: "25px" }}
          >
            <button className="logout-button" onClick={handleBackPage}>
              <Grid
                container
                justifyContent="center"
                style={{ paddingTop: "20px", paddingLeft: "15px" }}
                spacing={2}
              >
                <Grid>Home</Grid>
                <Grid>
                  <HomeIcon style={{ paddingLeft: "3px" }} fontSize="small" />
                </Grid>
              </Grid>
            </button>
          </Grid>
        </Grid>
      </Grid>

      <div style={{ paddingTop: "100px" }}>
        <Grid container direction="row" justifyContent="center">
          <Grid>
            <Grid container direction="column">
              <Grid>
                <span
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    color: "#393E46",
                    textAlign: "center",
                  }}
                >
                  Target Model Tables
                </span>
              </Grid>
              <Grid>
                <div>
                  <Grid container justifyContent="center" direction="row">
                    <Grid
                      container
                      justifyContent="center"
                      direction="row"
                      gap={1}
                      paddingTop={2}
                    >
                      {targetEntities.map((data) => (
                        <Chip
                          label={data.name}
                          variant="outlined"
                          onClick={() => {
                            handleClickopenDialog(data);
                          }}
                          style={{
                            fontFamily: "Outfit",
                            fontWeight: 600,
                            color: "#393E46",
                          }}
                        />
                      ))}
                      {currentTabel != null ? (
                        <Dialog
                          open={openDialog}
                          onClose={handleCloseDialogAndCancelReq}
                        >
                          <Grid
                            container
                            justifyContent="center"
                            direction="column"
                          >
                            <Grid
                              container
                              justifyContent="center"
                              direction="column"
                            >
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
                                width: "350px",
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
                                <ul>
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
                                      {" " + dataATT.attributeKey
                                      +" | " +
                                        dataATT.attributeName +
                                        "   : " +
                                        dataATT.attributeType}
                                    </span>
                                  </li>
                                </ul>
                              ))}
                            </div>
                          </DialogContent>
                          <DialogActions>
                            <button
                              onClick={handleCloseDialogAndCancelReq}
                              style={{ height: "32px" }}
                              className="logout-button"
                            >
                              Exit
                            </button>
                          </DialogActions>
                        </Dialog>
                      ) : (
                        <></>
                      )}
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid>
            <div style={{ paddingLeft: "550px" }}>
              <Grid container direction="column">
                <span
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    color: "#393E46",
                    textAlign: "center",
                  }}
                >
                  Target Model Discription
                </span>

                <Grid>
                  <div
                    style={{
                      width: "410px",
                      wordWrap: "break-word",
                      paddingTop: "10px",
                    }}
                  >
                    {targetModel_description}
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>

      {/* <div>
        <Grid container justifyContent="center" direction="column">
          <span
            style={{
              fontSize: 20,
              fontWeight: 600,
              color: "#393E46",
              textAlign: "center",
              paddingTop: "15px",
            }}
          >
            Target Model Association{" "}
          </span>
          <div style={{ paddingTop: "15px", paddingLeft: "366px" }}>
            <TableContainer
              component={Paper}
              sx={{ width: 600 }}
              justifyContent="center"
            >
              <Table sx={{ width: 600 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>From </StyledTableCell>
                    <StyledTableCell align="center">
                      Association Name
                    </StyledTableCell>
                    <StyledTableCell align="center">To</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {association
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <StyledTableRow key={row.index}>
                          <StyledTableCell component="th" scope="row">
                            {row.From}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {row.name}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {row.To}
                          </StyledTableCell>
                        </StyledTableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <div style={{ paddingRight: "521px" }}>
              <TablePagination
                rowsPerPageOptions={[2, 3]}
                component="div"
                count={association.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </div>
          </div>
        </Grid>
      </div> */}
    </div>
  );
}
export default TargetModelReprisentation;
