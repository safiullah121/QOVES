import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Assessment from "./conponents/pages/Assessment";

function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Assessment/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
