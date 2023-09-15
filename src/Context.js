// MyContext.js
import React, { createContext, useState } from 'react';

// Create a context object
const MyContext = createContext();

// Create a provider component
export function MyProvider({ children }) {
  // Define the state or data you want to share
  const [navigation, setnavigation] = useState("/");
  const [TextRevealForNextBtn, setTextRevealForNextBtn] = useState(false);
  const routes = [
    '/',
    '/PersonalData',
    '/ImageUpload',
    '/InfoChecking',
    '/ReportFormatting',
    '/ReportCompleted',
  ];
  // You can also define functions or methods to modify the state here

  return (
    <MyContext.Provider value={{ navigation, setnavigation , TextRevealForNextBtn ,setTextRevealForNextBtn }}>
      {children}
    </MyContext.Provider>
  );
}

export default MyContext;
