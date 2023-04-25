import React, { useContext } from "react";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import { Stepper, StepLabel, Step } from "@material-ui/core";
import { AppContext } from "../../../Contexts/AppContext";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

const steppeStyle = {
  backgroundColor: "#FCFAF1",
  width: "70%",
  paddingLeft: "207px",
};

function MainCreateProjectPage() {
  const navigate = useNavigate();
  const { currentStep } = useContext(AppContext);

  const handleBackToHomePage = () => {
    navigate("/admin-dashboard");
  };

  function showStep(step) {
    switch (step) {
      case 1:
        return <FirstPage />;
      case 2:
        return <SecondPage />;
      case 3:
        return <ThirdPage />;
      default:
        return <FirstPage />;
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
        activeStep={currentStep - 1}
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
              Initialize your model{" "}
            </span>
          </StepLabel>
        </Step>
        <Step>
          <StepLabel>
            {" "}
            <span
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#393E46",
                textAlign: "center",
                fontFamily: "Outfit",
              }}
            >
             Update and fill Tables/Entities in model
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
              Connect your tables/entities{" "}
            </span>
          </StepLabel>
        </Step>
      </Stepper>
      {showStep(currentStep)}
    </div>
  );
}
export default MainCreateProjectPage;
