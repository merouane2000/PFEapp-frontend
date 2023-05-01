import HomeIcon from "@mui/icons-material/Home";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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

function MainCollaborateProjectsPage() {
  const navigate = useNavigate();
  const [dataModels, setDataModels] = useState([]);
  const [dataSearch, setDataSearch] = useState();
  const [result, setResult] = useState([]);

  const handelSearch = (e) => {
    setDataSearch(e.target.value);
    setResult(dataModels);
    findServices();
  };

  const findServices = () => {
    let cloneData = dataModels.filter((model) => model.name.match(dataSearch));
    if (cloneData.length != 0) {
      setDataModels(cloneData);
    }
  };

  const handelNavigateToTargetModel = (row) => {
    sessionStorage.setItem("metaModelTarged-ID", row._id);
    sessionStorage.setItem("metaModelTarged-name", row.name);
    sessionStorage.setItem("metaModelTarged-description", row.description);
  };
  const handelNavigateToSourceModel = (row) => {
    sessionStorage.setItem("metaModelSource-ID", row._id);
    sessionStorage.setItem("metaModelSource-name", row.name);
    sessionStorage.setItem("metaModelSource-description", row.description);
  };
  const handelNavigateToEditPage = (row) => {
    sessionStorage.setItem("selectedModel", row._id);
  };
  const handleBackToHomePage = () => {
    navigate("/admin-dashboard");
  };
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  useEffect(() => {
    async function getTableData() {
      const response = await axios.get("http://localhost:4000/get-all-models");
      console.log(response.data);
      let tmp = [...response.data];
      setDataModels([...tmp]);
    }
    getTableData();
  }, []);
  return (
    <div>
      <Grid container>
        <Grid container justifyContent="space-between">
          <Grid style={{ paddingTop: "50px", paddingLeft: "467px" }}>
            <span
              style={{
                fontSize: 34,
                fontWeight: 500,
                color: "#393E46",
                textAlign: "center",
              }}
            ></span>
            <Grid>
              <span
                style={{
                  fontSize: 20,
                  fontWeight: 400,
                  color: "#393E46",
                  textAlign: "center",
                  paddingLeft: "14px",
                }}
              >
                Search for Model
              </span>
            </Grid>
            <Grid md={4}>
              <input
                className="input-log-in"
                name="modelName"
                value={dataSearch}
                onChange={handelSearch}
                required
                placeholder="Model Name"
              />
            </Grid>
          </Grid>
          <Grid
            justifyContent="center"
            style={{ paddingTop: "18px", paddingRight: "25px" }}
          >
            <button className="logout-button" onClick={handleBackToHomePage}>
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
      <div>
        <Grid container justifyContent="center" style={{ paddingTop: "50px" }}>
            <TableContainer component={Paper} sx={{ width: 1200 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Model Name </StyledTableCell>
                    <StyledTableCell align="center">
                      Based Example
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      MT Aproach used
                    </StyledTableCell>
                    <StyledTableCell align="center">Heuristic</StyledTableCell>
                    <StyledTableCell align="center">
                      Target Model Reprisentation{" "}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      Source Model Reprisentation
                    </StyledTableCell>
                    <StyledTableCell align="center">Edit Model</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dataModels
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <StyledTableRow key={row.index}>
                          <StyledTableCell component="th" scope="row">
                            {row.name}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {row.example}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {row.approachUsed}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {row.heuristic}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {
                              <Link
                                  onClick={() => handelNavigateToTargetModel(row)}
                                style={{ textDecoration: "none" }}
                                to="edit-target-reprisontation"
                              >
                                {" "}
                                View
                              </Link>
                            }
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {
                              <Link
                                  onClick={() => handelNavigateToSourceModel(row)}
                                style={{ textDecoration: "none" }}
                                to="edit-source-reprisontation"
                              >
                                {" "}
                                View
                              </Link>
                            }
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {
                              <Link
                                  onClick={() => handelNavigateToEditPage(row)}
                                style={{ textDecoration: "none" }}
                                to="edit-page"
                              >
                                {" "}
                                Go Edit
                              </Link>
                            }
                          </StyledTableCell>
                        </StyledTableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 6]}
              component="div"
              count={dataModels.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
  
        </Grid>
      </div>
    </div>
  );
}

export default MainCollaborateProjectsPage;
