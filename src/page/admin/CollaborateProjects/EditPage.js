import React, { useContext } from "react";
import { Stepper, StepLabel, Step } from "@material-ui/core";
import { AppContext } from "../../../Contexts/AppContext";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import FirstPageEdit from "./FirstPageEdit";
import SecondPageEdit from "./SecondPageEdit";

const steppeStyle = {
    backgroundColor: "#FCFAF1",
    width: "70%",
    paddingLeft: "207px",
  };

function EditPage() {
    const navigate = useNavigate();
    const { currentStepEdit } = useContext(AppContext);
  
    const handleBackToHomePage = () => {
      navigate("/admin-dashboard/main-collaborate");
    };
  
    function showStep(step) {
      switch (step) {
        case 1:
          return <FirstPageEdit/>;
        case 2:
          return <SecondPageEdit/>
  
      }
    }
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
        <Stepper
          style={steppeStyle}
          activeStep={currentStepEdit - 1}
          orientation="horizontal"
        >
          <Step>
            <StepLabel>
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#393E46",
                  textAlign: "center",
                  fontFamily: "Outfit",
                }}
              >
               Edit Classes / Tables{" "}
              </span>
            </StepLabel>
          </Step>
          <Step>
            <StepLabel>
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#393E46",
                  textAlign: "center",
                  fontFamily: "Outfit",
                }}
              >
                {" "}
                Edit RelationShips{" "}
              </span>
            </StepLabel>
          </Step>
        </Stepper>
        {showStep(currentStepEdit)}
        
      </div>
      
    );
}

export default EditPage;
