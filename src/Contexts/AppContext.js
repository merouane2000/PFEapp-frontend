import React, { createContext, useState } from "react";


export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [currentStep, setStep] = useState(1);
  const [userData, setUserData] = useState([]);
  const [tableContent, setTableContent] = useState([]);
  const [entityContent, setEntityContent] = useState([]);
  const [entitiesContent, setEntitiesContent] = useState([]);
  const [finalData, setFinalData] = useState([]);

 function submitData(){
console.log(userData)
 }
 
 function submitEntityData() {
  setEntitiesContent([...entitiesContent, entityContent]);
  setEntityContent([]);
  }
  
  return (
    <div>
      <AppContext.Provider
       value={{
        currentStep,
        entitiesContent,
        setStep,
        userData,
        setUserData,
        finalData,
        setFinalData,
        submitData,
        entitiesContent, 
        tableContent,
        setEntityContent,
        setTableContent,
        entityContent,
        submitEntityData,
        setEntitiesContent
      }}
      >  
      {props.children} 
      </AppContext.Provider>
    </div>
  );
};

export default AppContextProvider;
