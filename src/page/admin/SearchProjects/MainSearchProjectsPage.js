import React from "react";
import Grid from "@mui/material/Grid";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#393E46",
      color: theme.palette.common.white,
      fontFamily:"Outfit"
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      fontFamily:"Outfit",
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

function MainSearchProjectsPage() {
  const navigate = useNavigate();
  const username = sessionStorage.getItem("userName");

  const handleReset = () => {
    navigate("/");
    sessionStorage.clear();
  };
  const handelNavigationToCreate = () => {
    navigate("/admin-dashboard/main-create");
  };

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
                required
                placeholder="Model Name"
              />
            </Grid>
          </Grid>
          <Grid
            justifyContent="center"
            style={{ paddingTop: "18px", paddingRight: "25px" }}
          >
            <button className="logout-button" onClick={handleReset}>
              <Grid
                container
                justifyContent="center"
                style={{ paddingTop: "20px", paddingLeft: "15px" }}
                spacing={2}
              >
                <Grid>Logout</Grid>
                <Grid>
                  <LogoutIcon style={{ paddingLeft: "3px" }} fontSize="small" />
                </Grid>
              </Grid>
            </button>
          </Grid>
        </Grid>
      </Grid>

      <div>
        <Grid container justifyContent="center" style={{paddingTop:"50px"}}>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Model Name </StyledTableCell>
            <StyledTableCell align="right">Type</StyledTableCell>
            <StyledTableCell align="right">Reprisentation</StyledTableCell>
            <StyledTableCell align="right">Quality</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        
      </Table>
    </TableContainer>
    <TablePagination rowsPerPageOptions={[10, 50]} colSpan={3}
              count={rows.length} />

        </Grid>
      </div>
    
    </div>
  );
}
export default MainSearchProjectsPage;
