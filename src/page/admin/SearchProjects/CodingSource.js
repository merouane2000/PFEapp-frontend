import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import HomeIcon from "@mui/icons-material/Home";
import axios from "axios";
import { Link } from "react-router-dom";
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

function CodingSource() {
  const navigate = useNavigate();

  const codedsourceModel_id = sessionStorage.getItem("metaModelSource-ID");

  const [dataModels, setDataModels] = useState([]);
  const [selectedFragment, setSelectedFragment] = useState();
  const [dataSearch, setDataSearch] = useState();
  const [classLine, setClassLine] = useState();
  const [classRow, setClassRow] = useState();
  const [matrix, setMatrix] = useState();

  const [selectCoding, setSelectCoding] = useState();
  const [data, setData] = useState();

  const [result, setResult] = useState([]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(6);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
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
    findServices();
  };

  const findServices = () => {
    let cloneData = dataModels.filter((model) => model.name.match(dataSearch));
    if (cloneData.length != 0) {
      setDataModels(cloneData);
    }
  };
  useEffect(() => {
    async function getTableData() {
      const response = await axios.post(
        "http://localhost:4000/get-from-to-relations",
        { codedsourceModel_id }
      );
      console.log(response.data);
      setData(response.data.Coding);
      setSelectCoding(response.data.CodingClasses);
    }
    getTableData();
  }, []);
  useEffect(() => {
    extractValues(selectedFragment)
    
    if(selectedFragment!= null){

        selectCoding.map((cls)=>{
            if(cls.name === extractValues(selectedFragment)[0]){
                setClassLine(cls)
            }
            if(cls.name === extractValues(selectedFragment)[1]){
                setClassRow(cls)
            }
        })
    }
 
    const tmpmatrix = generateMatrix(classLine,classRow)
    setMatrix(tmpmatrix)
 
  }, [selectedFragment]);

  const handleBackPage = () => {
    navigate("/admin-dashboard/main-search/source-reprisontation");
  };
  function extractValues(selectedFragment) {
 
    if (!selectedFragment ) {
      return ['', ''];
    }

      const values = selectedFragment.split(',');
      const value1 = values[0] ? values[0].trim() : '';
      const value2 = values[1] ? values[1].trim() : '';
    
      return [value1, value2];
    
    
  }
  const handelconsole = () => {
   console.log(data)
   console.log(selectCoding)
   console.log(selectedFragment)
   console.log(classLine)
   console.log(matrix)

  };
  function generateMatrix(classLine, classRow) {
    const numRows =classLine?.attribute?.length || 0;
    const numColumns = classRow?.attribute?.length || 0;
    const matrix = [];
    for (let i = 0; i < numRows; i++) {
      matrix[i] = [];
      for (let j = 0; j < numColumns+4; j++) {
        const randomValue = Math.round(Math.random());
        matrix[i][j] = randomValue;
        // if (classLine.attribute[i] === classRow.attribute[j]) {
        //   matrix[i][j] = 1;
        // } else {
        //   matrix[i][j] = 0;
        // }
      }
    }
  
    return matrix;
  }
  

  return (
    <div>
      <Grid container>
        <Grid
          justifyContent="center"
          style={{ paddingTop: "18px", paddingLeft: "1250px" }}
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
      <div style={{ paddingTop: "30px" ,paddingLeft:"80px" }}>
        <Grid container direction="row" justifyContent='space-around'>
          <Grid md={3} justifyContent='center'>
            <Grid style={{ paddingTop: "120px" }}>
              {" "}
              <span
                style={{
                  fontSize: 34,
                  fontWeight: 500,
                  color: "#393E46",
                  textAlign: "center",
                }}
              >
                Select Fragment
              </span>
            </Grid>
            <Grid  style={{ paddingTop: "15px" }}>
            <select
                  className="input-Dialog-littel"
                  style={{width:"250px" ,height:"45px" ,paddingLeft:"45px" }}
                  onChange={(e)=>{setSelectedFragment(e.target.value)}}
                >
                      <option value={null} >--Select--</option>
                {(data != null) ?data.map((ele) => (
                            <option value={ele.From +", "+ ele.To}>{ele.From +" --> "+ ele.To}</option>
                          )):<></>}
                  
                </select>
            </Grid>
          </Grid>
          <Grid md={7} justifyContent="center">
             <Grid style={{ paddingTop: "40px" }}>
              {" "}
              <span
                style={{
                  fontSize: 34,
                  fontWeight: 500,
                  color: "#393E46",
                  textAlign: "center",
                }}
              >
               Crresponding code
              </span>
            </Grid>
            <Grid>
            <div style={{ paddingTop: "15px" }}>
            <TableContainer
              component={Paper}
              sx={{ width: 650 }}
              justifyContent="center"
            >
              <Table xs={{ width: 650 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                  <StyledTableCell> </StyledTableCell>


            {(classLine && classLine.attribute != null) ? (
  classLine.attribute.map((attribute, index) => (
    <StyledTableCell key={index}>{attribute.attributeName}</StyledTableCell>
  ))
) : (
  <></>
)}
<StyledTableCell>
  1..*
      </StyledTableCell>
 <StyledTableCell>
  0..1
      </StyledTableCell>
 <StyledTableCell>
  *
      </StyledTableCell>
 <StyledTableCell>
  1
      </StyledTableCell>
                       
                  </TableRow>
                </TableHead>
                <TableBody>

                {classLine && classRow.attribute && matrix && classRow.attribute.map((attribute, rowIndex) => (
  <StyledTableRow key={attribute}>
    <StyledTableCell>{attribute.attributeName}</StyledTableCell>
    {matrix[rowIndex] && matrix[rowIndex].map((_, colIndex) => (
      <StyledTableCell key={`${rowIndex}-${colIndex}`}>
        {matrix[rowIndex][colIndex]}
      </StyledTableCell>
      
    ))}
  </StyledTableRow>

))}
 
              
          
                </TableBody>
              </Table>
            </TableContainer>
          </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
export default CodingSource;
