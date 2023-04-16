import React, { useState ,createContext  } from "react";
import MainPage from "./page/admin/CreateProjects/MainPage";

export const multistepContext = createContext();

 const StepContext  =()=>  {
  const [currentStep, setStep] = useState(1);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  return (
    <div>
      <multistepContext.Provider
        value={{
          currentStep,
          setStep,
          userData,
          setUserData,
          finalData,
          setFinalData,
        }}
      >
        <MainPage />
      </multistepContext.Provider>
    </div>
  );
};
export default StepContext;
