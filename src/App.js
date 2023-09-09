import React from "react";
import Form from './TestForm'
import Header from "./conponents/common/Layout";
import FacialAssessment from "./conponents/pages/FacialAssessment";
import PersonalData from "./conponents/pages/PersonalData";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import ImageUpload from "./conponents/pages/ImageUpload";
import InfoChecking from "./conponents/pages/InfoChecking";
import ReportFormatting from "./conponents/pages/ReportFormatting";
import ReportCompleted from "./conponents/pages/ReportCompleted";
import TestForm from "./TestForm";


function App() {
   
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<FacialAssessment/>}/>
     <Route path="/PersonalData" element={<PersonalData/>}/>
     <Route path="/ImageUpload" element={<ImageUpload/>}/>
     <Route path="/InfoChecking" element={<InfoChecking/>}/>
     <Route path="/ReportFormatting" element={<ReportFormatting/>}/>
     <Route path="/ReportCompleted" element={<ReportCompleted/>}/>
     <Route path="/form" element={<TestForm/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
