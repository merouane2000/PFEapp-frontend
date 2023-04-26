import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import HomeIcon from "@mui/icons-material/Home";
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

function MainSearchProjectsPage() {
  const navigate = useNavigate();
  const [dataModels, setDataModels] = useState([]);
  const [result, setResult] = useState([]);
  const [dataSearch, setDataSearch] = useState();

  const handleBackToHomePage = () => {
    navigate("/admin-dashboard");
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
  const handelSearch = (e) => {
    setDataSearch(e.target.value);
    setResult(dataModels);
    findServices()
  };

   const findServices =()=> {
    let cloneData = dataModels.filter((model) => model.name.match(dataSearch));
    if(cloneData.length != 0){
      setDataModels(cloneData) 
    } 

    }
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
            <Table sx={{ width: 1200 }} aria-label="customized table">
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
              
                </TableRow>
              </TableHead>
              <TableBody>
                {dataModels.map((row, index) => (
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
                          to="target-reprisontation"
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
                          to="source-reprisontation"
                        >
                          {" "}
                          View
                        </Link>
                      }
                    </StyledTableCell>
                  
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </div>
    </div>
  );
}
export default MainSearchProjectsPage;
