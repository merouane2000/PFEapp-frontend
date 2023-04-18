import React, { createContext, useState } from "react";


export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [currentStep, setStep] = useState(1);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);

 function submitData(){
console.log(userData)
 }
  return (
    <div>
      <AppContext.Provider
       value={{
        currentStep,
        setStep,
        userData,
        setUserData,
        finalData,
        setFinalData,
        submitData
      }}
      >  
      {props.children} 
      </AppContext.Provider>
    </div>
  );
};

export default AppContextProvider;
