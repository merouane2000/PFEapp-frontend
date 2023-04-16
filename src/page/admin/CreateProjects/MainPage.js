
import React, { useContext } from "react";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import { Stepper, StepLabel, Step } from '@material-ui/core';
import {multistepContext} from '../../../StepContext'



function MainPage() {
  const { currentStep, finalData} = useContext (multistepContext);

  function showStep(step) {
    switch(step){
    case 1:
    return <FirstPage />
    case 2:
    return <SecondPage />
    case 3:
    return <ThirdPage />
    }
    }
 
  return (
  <div className="MainPage">
<Stepper style={{width: '18% '}} activeStep={currentStep-1} orientation="horizontal">
<Step>
<StepLabel></StepLabel>
</Step> 
<Step>
<StepLabel></StepLabel>
</Step>
<Step>
<StepLabel></StepLabel>
</Step>
</Stepper>
{showStep(currentStep)}
{/* <FirstPage/>
<SecondPage/>
<ThirdPage/>  
    */}
</div>

  );
}
export default MainPage;


