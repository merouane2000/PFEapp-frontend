
import React, { useContext } from "react";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import { Stepper, StepLabel, Step } from '@material-ui/core';
import {AppContext} from "../../../Contexts/AppContext";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

const steppeStyle={
    backgroundColor:"#FCFAF1",
    width: "50%",
    paddingLeft: "381px"
}

function MainCreateProjectPage() {
    const navigate = useNavigate();
  const { currentStep, finalData} = useContext(AppContext);

  const handleBackToHomePage = () => {
    navigate("/admin-dashboard");
  };

  function showStep(step) {
    switch(step){
    case 1:
    return <FirstPage />
    case 2:
    return <SecondPage />
    case 3:
    return <ThirdPage />
}}
  return (
  <div>
     <Grid
        justify="flex-end"
        style={{
          paddingTop: "18px",
          paddingRight: "25px",
          paddingLeft: "1250px",
        }}
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
 <Stepper style={steppeStyle}  activeStep={currentStep-1} orientation="horizontal" >
<Step >
<StepLabel>
  <span  style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#393E46",
                      textAlign: "center",
                      fontFamily:"Outfit"
                    }}
                    >Add name type of diagram and model </span>
</StepLabel>
</Step> 
<Step>
<StepLabel> <span  style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#393E46",
                      textAlign: "center",
                      fontFamily:"Outfit"
                    }}
                    >Add the Source/Target Model</span></StepLabel>
</Step>
<Step>
<StepLabel>
<span  style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#393E46",
                      textAlign: "center",
                      fontFamily:"Outfit"
                    }}
                    > Textual Describe for the Source/Target model </span>
</StepLabel>
</Step>
</Stepper>
{showStep(currentStep)}
</div>
  );
}
export default MainCreateProjectPage;


